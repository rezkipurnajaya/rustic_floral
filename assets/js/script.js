/* ============================================================
   SCRIPT UTAMA & MESIN INJEKSI DATA / DESIGN TOKENS (SCRIPT.JS)
   ============================================================ */

function getNestedValue(obj, path) {
    if (!obj || !path) return undefined;
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function isEmptyConfigValue(val) {
    if (val === undefined || val === null) return true;
    if (typeof val === "string" && val.trim() === "") return true;
    if (typeof val === "object" && Object.keys(val).length === 0) return true;
    return false;
}

/* ============================================================
   1. THEME SWITCHER PRESET ENGINE & DYNAMIC CSS TOKENS API
   ============================================================ */

function applyDesignTokensFromConfig() {
    const config = window.WEDDING_CONFIG;
    if (!config || !config.theme) return;

    if (config.theme.preset) {
        document.documentElement.setAttribute("data-theme", config.theme.preset);
    }

    if (config.theme.customTokens && typeof config.theme.customTokens === "object") {
        Object.entries(config.theme.customTokens).forEach(([tokenName, tokenValue]) => {
            if (tokenName.startsWith("--") && !isEmptyConfigValue(tokenValue)) {
                document.documentElement.style.setProperty(tokenName, String(tokenValue));
            }
        });
    }
}

window.setWeddingTheme = function (presetName, customTokenOverrides = {}) {
    if (presetName) {
        document.documentElement.setAttribute("data-theme", presetName);
    }
    Object.entries(customTokenOverrides).forEach(([tokenName, tokenValue]) => {
        if (tokenName.startsWith("--")) {
            document.documentElement.style.setProperty(tokenName, String(tokenValue));
        }
    });
};

/* ============================================================
   2. VANILLA JS TEMPLATE ENGINE (DATA-TEMPLATE HYDRATION)
   ============================================================ */

function runTemplateEngine() {
    const config = window.WEDDING_CONFIG;
    if (!config) {
        console.warn("[TemplateEngine] WEDDING_CONFIG tidak ditemukan di global scope.");
        return;
    }

    applyDesignTokensFromConfig();

    document.querySelectorAll("[data-template-section]").forEach((sectionEl) => {
        const path = sectionEl.getAttribute("data-template-section");
        const val = getNestedValue(config, path);

        if (isEmptyConfigValue(val)) {
            sectionEl.hidden = true;
            sectionEl.classList.add("is-empty-fallback");
            sectionEl.style.display = "none";
        } else {
            sectionEl.hidden = false;
            sectionEl.classList.remove("is-empty-fallback");
            sectionEl.style.removeProperty("display");
        }
    });

    document.querySelectorAll("[data-template]").forEach((el) => {
        const path = el.getAttribute("data-template");
        const val = getNestedValue(config, path);

        if (!isEmptyConfigValue(val)) {
            el.textContent = String(val);
            el.hidden = false;
        } else {
            el.textContent = "";
            el.hidden = true;
        }
    });

    document.querySelectorAll("[data-template-src]").forEach((el) => {
        const path = el.getAttribute("data-template-src");
        const val = getNestedValue(config, path);

        if (!isEmptyConfigValue(val)) {
            el.setAttribute("src", String(val));
            el.hidden = false;
            if (el.tagName === "SOURCE" && el.parentElement && typeof el.parentElement.load === "function") {
                el.parentElement.load();
            }
        } else {
            el.removeAttribute("src");
            el.hidden = true;
            const slideParent = el.closest(".gallery-slide, .gallery-item");
            if (slideParent) {
                slideParent.hidden = true;
                slideParent.style.display = "none";
            }
        }
    });

    document.querySelectorAll("[data-template-href]").forEach((el) => {
        const path = el.getAttribute("data-template-href");
        const val = getNestedValue(config, path);

        if (!isEmptyConfigValue(val)) {
            el.setAttribute("href", String(val));
            el.hidden = false;
        } else {
            el.removeAttribute("href");
            el.hidden = true;
        }
    });

    document.querySelectorAll("[data-template-alt]").forEach((el) => {
        const path = el.getAttribute("data-template-alt");
        const val = getNestedValue(config, path);
        if (!isEmptyConfigValue(val)) {
            el.setAttribute("alt", String(val));
        }
    });

    document.querySelectorAll("[data-template-meta]").forEach((el) => {
        const path = el.getAttribute("data-template-meta");
        const val = getNestedValue(config, path);
        if (!isEmptyConfigValue(val)) {
            el.setAttribute("content", String(val));
        }
    });

    // Injeksi nama tamu dari parameter URL (?to=Nama+Tamu)
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("to") || urlParams.get("guest");
    const guestNameDisplay = document.getElementById("guestNameDisplay");
    if (guestParam && guestNameDisplay) {
        guestNameDisplay.textContent = guestParam;
    }
}

/* ============================================================
   3. FUNGSI INTERAKTIVITAS UTAMA (MUSIK, COUNTDOWN, SLIDER, RSVP)
   ============================================================ */

const openingScreen = document.getElementById("openingScreen");
const openInvitation = document.getElementById("openInvitation");
const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const weddingMusic = document.getElementById("weddingMusic");
const musicControl = document.getElementById("musicControl");
const calendarButton = document.getElementById("calendarButton");

let isMusicPlaying = false;

function updateMusicButton() {
    if (!musicControl) return;
    if (isMusicPlaying) {
        musicControl.textContent = "♫";
        musicControl.classList.add("playing");
    } else {
        musicControl.textContent = "✕";
        musicControl.classList.remove("playing");
    }
}

function playMusic() {
    if (!weddingMusic) return;
    weddingMusic.play().then(() => {
        isMusicPlaying = true;
        updateMusicButton();
    }).catch(() => {
        isMusicPlaying = false;
        updateMusicButton();
    });
}

function pauseMusic() {
    if (!weddingMusic) return;
    weddingMusic.pause();
    isMusicPlaying = false;
    updateMusicButton();
}

function openWeddingInvitation() {
    if (openingScreen) {
        openingScreen.classList.add("hide");
    }
    document.body.classList.remove("locked");
    playMusic();
}

function updateCountdown() {
    const config = window.WEDDING_CONFIG;
    const targetDateStr = getNestedValue(config, "acara.tanggalCountdown") || "2027-02-21T08:00:00+07:00";
    const targetTime = new Date(targetDateStr).getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, targetTime - now);

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.textContent = String(d).padStart(3, "0");
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, "0");
}

/* Map Slider */
let currentMapIndex = 0;

function showMap(index) {
    const slides = document.querySelectorAll(".map-slide");
    const dots = document.querySelectorAll(".map-dot");
    if (!slides.length) return;

    currentMapIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentMapIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentMapIndex);
    });
}

/* Gallery Slider & Lightbox Modal */
let currentGalleryIndex = 0;

function showGallerySlide(index) {
    const slides = Array.from(document.querySelectorAll(".gallery-slide")).filter((s) => !s.hidden);
    if (!slides.length) return;

    currentGalleryIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentGalleryIndex);
    });
}

function openGalleryModal(src, alt) {
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("galleryModalImg");
    if (!modal || !modalImg || !src) return;

    modalImg.src = src;
    modalImg.alt = alt || "Pratinjau Foto Galeri";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}

function closeGalleryModal() {
    const modal = document.getElementById("galleryModal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

/* Download / Simpan Kalender (.ics) */
function downloadCalendarEvent() {
    const icsConfig = getNestedValue(window.WEDDING_CONFIG, "acara.akad.ics") || {
        uid: "akad-andi-sari-2027@rezwanjaya.com",
        dtStart: "20270221T010000Z",
        dtEnd: "20270221T030000Z",
        summary: "Pernikahan Andi & Sari",
        description: "Acara Pernikahan Andi Prasetyo & Sari Wulandari",
        location: "Masjid Jami' Al-Ikhlas, Jakarta Selatan"
    };

    const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//UD. Rez Wan Jaya//Wedding Invitation//ID",
        "BEGIN:VEVENT",
        `UID:${icsConfig.uid}`,
        `DTSTAMP:${icsConfig.dtStart}`,
        `DTSTART:${icsConfig.dtStart}`,
        `DTEND:${icsConfig.dtEnd}`,
        `SUMMARY:${icsConfig.summary}`,
        `DESCRIPTION:${icsConfig.description}`,
        `LOCATION:${icsConfig.location}`,
        "END:VEVENT",
        "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "pernikahan-andi-sari.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/* Salin Rekening & Alamat Kado */
function salinTeksGift(teks, triggerBtn, defaultLabel) {
    if (!teks) return;
    navigator.clipboard.writeText(teks.trim()).then(() => {
        if (triggerBtn) {
            const originalText = defaultLabel || triggerBtn.textContent;
            triggerBtn.textContent = "Berhasil Disalin ✓";
            setTimeout(() => {
                triggerBtn.textContent = originalText;
            }, 2000);
        }
    });
}

window.salinRekening = function (elementId = "accountBCA", btnEl = null) {
    const el = document.getElementById(elementId);
    if (!el) return;
    salinTeksGift(el.textContent, btnEl, "Salin Rekening");
};

window.salinAlamatKado = function (btnEl = null) {
    const recipient = document.getElementById("giftRecipient")?.textContent || "";
    const phone = document.getElementById("giftPhone")?.textContent || "";
    const address = document.getElementById("giftAddress")?.textContent || "";
    const combined = `${recipient} (${phone}) - ${address}`;
    salinTeksGift(combined, btnEl, "Salin Alamat Kado");
};

/* Buku Tamu & RSVP */
const guestbookMessages = [
    {
        nama: "Keluarga Besar H. Rahman",
        kehadiran: "Hadir",
        tanggal: "2026-10-25",
        ucapan: "Selamat menempuh hidup baru untuk Andi & Sari. Semoga menjadi keluarga sakinah, mawaddah, warahmah."
    },
    {
        nama: "Rina & Dimas",
        kehadiran: "Hadir",
        tanggal: "2026-10-25",
        ucapan: "Turut berbahagia atas pernikahan kalian! Semoga lancar sampai hari H."
    }
];

function formatGuestbookDate(dateStr) {
    const d = dateStr ? new Date(dateStr) : new Date();
    if (Number.isNaN(d.getTime())) return String(dateStr);
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

function renderGuestbook() {
    const container = document.getElementById("guestbookHistory");
    if (!container) return;
    container.innerHTML = "";

    guestbookMessages.forEach((item) => {
        const card = document.createElement("div");
        card.className = "comment-card guestbook-item";
        card.innerHTML = `
            <div class="guestbook-header">
                <span class="guestbook-name">${item.nama}</span>
                <span class="guestbook-badge">${item.kehadiran}</span>
            </div>
            <span class="guestbook-date">${formatGuestbookDate(item.tanggal)}</span>
            <p class="guestbook-message">${item.ucapan}</p>
        `;
        container.appendChild(card);
    });
}

/* Inisialisasi DOM */
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("locked");
    runTemplateEngine();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    renderGuestbook();

    if (openInvitation) {
        openInvitation.addEventListener("click", openWeddingInvitation);
    }

    if (musicControl) {
        musicControl.addEventListener("click", () => {
            if (isMusicPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        });
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    if (calendarButton) {
        calendarButton.addEventListener("click", downloadCalendarEvent);
    }

    const mapPrev = document.getElementById("mapPrev");
    const mapNext = document.getElementById("mapNext");
    if (mapPrev) mapPrev.addEventListener("click", () => showMap(currentMapIndex - 1));
    if (mapNext) mapNext.addEventListener("click", () => showMap(currentMapIndex + 1));

    document.querySelectorAll(".map-dot").forEach((dot) => {
        dot.addEventListener("click", () => {
            const idx = Number(dot.getAttribute("data-map-index") || 0);
            showMap(idx);
        });
    });

    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");
    if (galleryPrev) galleryPrev.addEventListener("click", () => showGallerySlide(currentGalleryIndex - 1));
    if (galleryNext) galleryNext.addEventListener("click", () => showGallerySlide(currentGalleryIndex + 1));

    document.querySelectorAll(".gallery-item img").forEach((img) => {
        img.addEventListener("click", () => openGalleryModal(img.src, img.alt));
    });

    const modalClose = document.getElementById("galleryModalClose");
    const galleryModal = document.getElementById("galleryModal");
    if (modalClose) modalClose.addEventListener("click", closeGalleryModal);
    if (galleryModal) {
        galleryModal.addEventListener("click", (e) => {
            if (e.target === galleryModal) closeGalleryModal();
        });
    }

    const rsvpForm = document.getElementById("rsvpForm");
    const formStatus = document.getElementById("formStatus");
    if (rsvpForm) {
        rsvpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nama = document.getElementById("nama")?.value || "Tamu Undangan";
            const kehadiran = document.getElementById("kehadiran")?.value || "Hadir";
            const ucapan = document.getElementById("ucapan")?.value || "";

            guestbookMessages.unshift({
                nama,
                kehadiran,
                tanggal: new Date().toISOString(),
                ucapan
            });
            renderGuestbook();

            const scriptUrl = getNestedValue(window.WEDDING_CONFIG, "rsvp.scriptUrl");
            if (scriptUrl) {
                const formData = new FormData(rsvpForm);
                fetch(scriptUrl, { method: "POST", body: formData, mode: "no-cors" }).catch(() => {});
            }

            if (formStatus) {
                formStatus.textContent = "Terima kasih! Konfirmasi & ucapan Anda telah tersimpan.";
            }
            rsvpForm.reset();
        });
    }
});
