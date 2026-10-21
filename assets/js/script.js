/* ============================================================
   WEDDING INVITATION — JAVASCRIPT & TEMPLATING ENGINE
   File: assets/js/script.js
   Minggu 10 — Template Tagging & Placeholder Variable
   ============================================================ */

/* ============================================================
   0. MESIN INJEKSI DATA JAVASCRIPT (VANILLA JS TEMPLATING ENGINE)
   ============================================================ */

/**
 * 1. Fungsi Pembantu (Helper): Mengambil nilai properti bersarang (nested property)
 *    Contoh path: "mempelai.pria.namaLengkap"
 *    @param {Object} obj - Objek sumber data (WEDDING_CONFIG)
 *    @param {string} path - Jalur properti dipisahkan titik
 *    @returns {*} Nilai properti atau null jika tidak ditemukan
 */
const getNestedValue = (obj, path) => {
    if (!obj || !path || typeof path !== "string") return null;
    return path.split(".").reduce((acc, part) => {
        return acc && acc[part] !== undefined && acc[part] !== null ? acc[part] : null;
    }, obj);
};

/**
 * Mengecek apakah suatu nilai konfigurasi dianggap kosong (Fallback Check)
 * @param {*} value
 * @returns {boolean}
 */
const isEmptyConfigValue = (value) => {
    if (value === null || value === undefined || value === false) return true;
    if (typeof value === "string" && value.trim() === "") return true;
    if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return true;
    return false;
};

/**
 * 2. Mesin Injeksi Data Semantik & Penanganan Data Kosong (DOM Hydration)
 *    Memindai atribut [data-template-section], [data-template],
 *    [data-template-src], [data-template-href], [data-template-alt],
 *    dan [data-template-content].
 */
function runTemplateEngine() {
    // Verifikasi Ketersediaan Data di Global Scope
    const config = window.WEDDING_CONFIG;
    if (!config) {
        console.warn("[TemplateEngine] WEDDING_CONFIG tidak ditemukan di global scope.");
        return;
    }

    // A. Fallback Value Handling: Sembunyikan seksi/kontainer jika data terkait kosong
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

    // B. Injeksi Teks: Mencari [data-template] & mengganti textContent
    document.querySelectorAll("[data-template]").forEach((el) => {
        const path = el.getAttribute("data-template");
        const val = getNestedValue(config, path);

        if (!isEmptyConfigValue(val)) {
            el.textContent = String(val);
        } else {
            // Fallback jika data teks kosong
            el.textContent = "";
            el.hidden = true;
        }
    });

    // C. Injeksi Sumber Media (Gambar/Iframe/Audio): Mencari [data-template-src] & mengganti atribut src
    document.querySelectorAll("[data-template-src]").forEach((el) => {
        const path = el.getAttribute("data-template-src");
        const val = getNestedValue(config, path);

        if (!isEmptyConfigValue(val)) {
            el.setAttribute("src", String(val));
            if (el.tagName === "SOURCE" && el.parentElement && typeof el.parentElement.load === "function") {
                el.parentElement.load();
            }
        } else {
            el.removeAttribute("src");
            el.hidden = true;
            const slideParent = el.closest(".gallery-slide");
            if (slideParent) {
                slideParent.hidden = true;
                slideParent.style.display = "none";
            }
        }
    });

    // D. Injeksi Tautan: Mencari [data-template-href] & mengganti atribut href
    document.querySelectorAll("[data-template-href]").forEach((el) => {
        const path = el.getAttribute("data-template-href");
        const val = getNestedValue(config, path);

        if (!isEmptyConfigValue(val)) {
            el.setAttribute("href", String(val));
        } else {
            el.removeAttribute("href");
            el.hidden = true;
            el.style.display = "none";
        }
    });

    // E. Injeksi Atribut Alt Gambar: Mencari [data-template-alt]
    document.querySelectorAll("[data-template-alt]").forEach((el) => {
        const path = el.getAttribute("data-template-alt");
        const val = getNestedValue(config, path);
        if (!isEmptyConfigValue(val)) {
            el.setAttribute("alt", String(val));
        }
    });

    // F. Injeksi Meta Content: Mencari [data-template-content]
    document.querySelectorAll("[data-template-content]").forEach((el) => {
        const path = el.getAttribute("data-template-content");
        const val = getNestedValue(config, path);
        if (!isEmptyConfigValue(val)) {
            el.setAttribute("content", String(val));
        }
    });

    // G. Dukungan Nama Tamu Dinamis via URL Parameter (?to=Nama+Tamu)
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("to") || urlParams.get("kepada");
    const guestNameDisplay = document.getElementById("guestNameDisplay");
    if (guestParam && guestNameDisplay) {
        guestNameDisplay.textContent = guestParam;
        guestNameDisplay.hidden = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    // Jalankan Mesin Injeksi Data sebelum inisialisasi komponen UI
    runTemplateEngine();

    /* =========================================================
       1. KONFIGURASI & ELEMENT
       ========================================================= */

    const config = window.WEDDING_CONFIG || {};
    const WEDDING_DATE =
        getNestedValue(config, "acara.tanggalCountdown") ||
        "2027-02-21T08:00:00+07:00";

    const openingScreen = document.getElementById("openingScreen");
    const openInvitation = document.getElementById("openInvitation");
    const siteHeader = document.getElementById("siteHeader");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    const calendarButton = document.getElementById("calendarButton");
    const rsvpForm = document.getElementById("rsvpForm");
    const formStatus = document.getElementById("formStatus");

    // Modal Galeri Element
    const galleryModal = document.getElementById("galleryModal");
    const galleryModalImg = document.getElementById("galleryModalImg");
    const galleryModalClose = document.getElementById("galleryModalClose");

    /* FLOATING NAVBAR — ACTIVE LINK */
    const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileNavLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    /* ============================================================
       WEDDING BACKGROUND MUSIC
       ============================================================ */

    const music = document.getElementById("weddingMusic");
    const musicControl = document.getElementById("musicControl");
    const openInvitationButton = document.getElementById("openInvitation");

    if (music && musicControl) {

        // Volume awal
        music.volume = 0.45;

        function updateMusicButton() {
            if (!music.paused) {
                musicControl.classList.add("playing");
                musicControl.setAttribute("aria-label", "Jeda musik");
                musicControl.setAttribute("aria-pressed", "true");
            } else {
                musicControl.classList.remove("playing");
                musicControl.setAttribute("aria-label", "Putar musik");
                musicControl.setAttribute("aria-pressed", "false");
            }
        }

        function playMusic() {
            music.play()
                .then(() => {
                    console.log("Musik berhasil diputar.");
                    updateMusicButton();
                })
                .catch((error) => {
                    console.error("Musik gagal diputar:", error);
                    updateMusicButton();
                });
        }

        function pauseMusic() {
            music.pause();
            updateMusicButton();
        }

        if (openInvitationButton) {
            openInvitationButton.addEventListener("click", function () {
                playMusic();
            });
        }

        musicControl.addEventListener("click", function () {
            if (music.paused) {
                playMusic();
            } else {
                pauseMusic();
            }
        });

        music.addEventListener("play", updateMusicButton);
        music.addEventListener("pause", updateMusicButton);

        updateMusicButton();
    }

    /* =========================================================
       2. PEMBUKA UNDANGAN
       ========================================================= */

    function openWeddingInvitation() {
        if (!openingScreen) return;

        openingScreen.classList.add("is-hidden");
        document.body.classList.remove("locked");

        if (siteHeader) {
            siteHeader.classList.add("visible");
        }

        setTimeout(() => {
            openingScreen.style.display = "none";
        }, 700);
    }

    if (openingScreen) {
        document.body.classList.add("locked");
    }

    if (openInvitation) {
        openInvitation.addEventListener("click", openWeddingInvitation);
    }

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Enter" &&
            openingScreen &&
            !openingScreen.classList.contains("is-hidden")
        ) {
            openWeddingInvitation();
        }
    });

    /* =========================================================
       3. NAVBAR & MOBILE MENU
       ========================================================= */

    window.addEventListener("scroll", () => {
        if (openingScreen && openingScreen.classList.contains("is-hidden")) {
            if (siteHeader) siteHeader.classList.add("visible");
        }
    }, { passive: true });

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
            });
        });
    }

    /* =========================================================
       4. COUNTDOWN
       ========================================================= */

    function updateCountdown() {
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        const activeWeddingDate =
            getNestedValue(window.WEDDING_CONFIG, "acara.tanggalCountdown") ||
            WEDDING_DATE;

        const target = new Date(activeWeddingDate).getTime();
        const now = Date.now();
        const difference = target - now;

        if (Number.isNaN(target) || difference <= 0) {
            daysEl.textContent = "000";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";
            return;
        }

        const totalSeconds = Math.floor(difference / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        daysEl.textContent = String(days).padStart(3, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* =========================================================
       5. SAVE TO CALENDAR (.ICS DINAMIS DARI CONFIG)
       ========================================================= */

    if (calendarButton) {
        calendarButton.addEventListener("click", () => {
            const cfg = window.WEDDING_CONFIG || {};
            const icsCfg = getNestedValue(cfg, "acara.akad.ics") || {};
            const coupleNames = getNestedValue(cfg, "meta.namaPasangan") || "Andi & Sari";
            const akadTempat = getNestedValue(cfg, "acara.akad.tempat") || "Masjid Jami' Al-Ikhlas";
            const akadAlamat = getNestedValue(cfg, "acara.akad.alamat") || "";

            const icsContent = [
                "BEGIN:VCALENDAR",
                "VERSION:2.0",
                `PRODID:-//${coupleNames} Wedding//ID`,
                "CALSCALE:GREGORIAN",
                "BEGIN:VEVENT",
                `UID:${icsCfg.uid || "wedding-akad@rezwanjaya.com"}`,
                `DTSTAMP:${icsCfg.dtstamp || "20261021T000000Z"}`,
                `DTSTART:${icsCfg.dtstart || "20270221T010000Z"}`,
                `DTEND:${icsCfg.dtend || "20270221T030000Z"}`,
                `SUMMARY:${icsCfg.summary || "Akad Nikah " + coupleNames}`,
                `LOCATION:${icsCfg.location || akadTempat + ", " + akadAlamat}`,
                `DESCRIPTION:${icsCfg.description || "Akad Nikah " + coupleNames}`,
                "END:VEVENT",
                "END:VCALENDAR"
            ].join("\r\n");

            const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");

            link.href = url;
            link.download = icsCfg.filename || "save-the-date-akad.ics";
            document.body.appendChild(link);
            link.click();
            link.remove();

            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 1000);
        });
    }

    /* =========================================================
       6. MAP SLIDER
       ========================================================= */

    const mapSlider = document.getElementById("mapSlider");
    const mapTrack = document.querySelector(".map-track");
    const mapSlides = document.querySelectorAll(".map-slide");
    const mapDots = document.querySelectorAll(".map-dot");
    const mapPrev = document.getElementById("mapPrev");
    const mapNext = document.getElementById("mapNext");

    let currentMap = 0;

    function showMap(index) {
        if (!mapTrack || mapSlides.length === 0) return;

        currentMap = (index + mapSlides.length) % mapSlides.length;
        mapTrack.style.transform = `translateX(-${currentMap * 100}%)`;

        mapSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentMap);
        });

        mapDots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentMap);
            dot.setAttribute("aria-current", i === currentMap ? "true" : "false");
        });
    }

    if (mapPrev) {
        mapPrev.addEventListener("click", () => showMap(currentMap - 1));
    }

    if (mapNext) {
        mapNext.addEventListener("click", () => showMap(currentMap + 1));
    }

    mapDots.forEach((dot, index) => {
        dot.addEventListener("click", () => showMap(index));
    });

    if (mapSlides.length > 0) {
        showMap(0);
    }

    // Touch Swipe Map
    let touchStartX = 0;
    let touchEndX = 0;

    if (mapSlider) {
        mapSlider.addEventListener("touchstart", (event) => {
            touchStartX = event.changedTouches[0].clientX;
        }, { passive: true });

        mapSlider.addEventListener("touchend", (event) => {
            touchEndX = event.changedTouches[0].clientX;
            const swipeDistance = touchStartX - touchEndX;

            if (swipeDistance > 50) showMap(currentMap + 1);
            if (swipeDistance < -50) showMap(currentMap - 1);
        }, { passive: true });
    }

    /* =========================================================
       7. GALERI / LIGHTBOX MODAL & MOBILE SLIDER
       ========================================================= */

    const gallerySlider = document.getElementById("gallerySlider");
    const galleryTrack = document.querySelector(".gallery-track");
    const gallerySlides = document.querySelectorAll(".gallery-slide:not([hidden])");
    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");
    const galleryDotsContainer = document.getElementById("galleryDots");
    const galleryItems = document.querySelectorAll(".gallery-item");

    let currentGalleryIndex = 0;
    let isMobileView = window.innerWidth <= 768;

    // Inisialisasi Dots Slider Foto untuk Mobile
    if (galleryDotsContainer && gallerySlides.length > 0) {
        galleryDotsContainer.innerHTML = "";
        gallerySlides.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.classList.add("gallery-dot");
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => showGallerySlide(index));
            galleryDotsContainer.appendChild(dot);
        });
    }

    const galleryDots = document.querySelectorAll(".gallery-dot");

    function showGallerySlide(index) {
        if (!galleryTrack || gallerySlides.length === 0 || !isMobileView) return;

        currentGalleryIndex = (index + gallerySlides.length) % gallerySlides.length;
        galleryTrack.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;

        galleryDots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentGalleryIndex);
        });
    }

    if (galleryPrev) {
        galleryPrev.addEventListener("click", () => showGallerySlide(currentGalleryIndex - 1));
    }

    if (galleryNext) {
        galleryNext.addEventListener("click", () => showGallerySlide(currentGalleryIndex + 1));
    }

    // Touch / Swipe Khusus Mobile pada Galeri
    let galleryTouchStartX = 0;
    let galleryTouchEndX = 0;

    if (gallerySlider) {
        gallerySlider.addEventListener("touchstart", (e) => {
            if (!isMobileView) return;
            galleryTouchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        gallerySlider.addEventListener("touchend", (e) => {
            if (!isMobileView) return;
            galleryTouchEndX = e.changedTouches[0].clientX;
            const diff = galleryTouchStartX - galleryTouchEndX;

            if (diff > 40) showGallerySlide(currentGalleryIndex + 1);
            if (diff < -40) showGallerySlide(currentGalleryIndex - 1);
        }, { passive: true });
    }

    // Handlers Resizing Window
    window.addEventListener("resize", () => {
        isMobileView = window.innerWidth <= 768;
        if (!isMobileView && galleryTrack) {
            galleryTrack.style.transform = "none";
        } else {
            showGallerySlide(currentGalleryIndex);
        }
    });

    // Lightbox Modal
    function openGalleryModal(imageSrc) {
        if (!galleryModal || !galleryModalImg) return;
        galleryModalImg.src = imageSrc;
        galleryModal.classList.add("active");
        galleryModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("locked");
    }

    function closeGalleryModal() {
        if (!galleryModal) return;
        galleryModal.classList.remove("active");
        galleryModal.setAttribute("aria-hidden", "true");
        if (galleryModalImg) galleryModalImg.src = "";

        if (!openingScreen || openingScreen.classList.contains("is-hidden")) {
            document.body.classList.remove("locked");
        }
    }

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const img = item.querySelector("img");
            if (img && img.src) {
                openGalleryModal(img.src);
            }
        });
    });

    if (galleryModalClose) {
        galleryModalClose.addEventListener("click", closeGalleryModal);
    }

    if (galleryModal) {
        galleryModal.addEventListener("click", (event) => {
            if (event.target === galleryModal) {
                closeGalleryModal();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            galleryModal &&
            galleryModal.classList.contains("active")
        ) {
            closeGalleryModal();
        }
    });

    /* =========================================================
       8. RSVP / UCAPAN — GOOGLE SHEETS + RIWAYAT UCAPAN
       ========================================================= */

    const GOOGLE_SCRIPT_URL =
        getNestedValue(config, "rsvp.scriptUrl") ||
        "https://script.google.com/macros/s/AKfycby0ijLbTlRvzkjtySPbHRTmf0CxJhSezpaPzvY8mIDeP53kLFg50IM91dqGvsj4U7befw/exec";

    const guestbookHistory = document.getElementById("guestbookHistory");
    const loadMoreMessages = document.getElementById("loadMoreMessages");

    let guestbookMessages = [];
    let visibleMessages = 5;
    let guestbookRequestId = 0;

    function formatGuestbookDate(value) {
        if (!value) return "";

        const date = new Date(value);

        if (Number.isNaN(date.getTime())) {
            return String(value);
        }

        return date.toLocaleString("id-ID", {
            dateStyle: "medium",
            timeStyle: "short"
        });
    }

    function renderGuestbook() {
        if (!guestbookHistory) return;

        guestbookHistory.replaceChildren();

        if (guestbookMessages.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent =
                "Belum ada ucapan. Jadilah yang pertama!";

            guestbookHistory.appendChild(emptyMessage);
        } else {
            guestbookMessages
                .slice(0, visibleMessages)
                .forEach((item) => {
                    const card = document.createElement("div");
                    card.className = "guestbook-message";

                    const name = document.createElement("h3");
                    name.textContent =
                        item.name || item.nama || "Tamu";

                    const attendance = document.createElement("p");
                    attendance.textContent =
                        "Kehadiran: " +
                        (item.attendance || item.kehadiran || "-");

                    const message = document.createElement("p");
                    message.textContent =
                        item.message || item.ucapan || "";

                    card.append(name, attendance, message);

                    const dateValue =
                        item.timestamp ||
                        item.waktu ||
                        item.date ||
                        item.tanggal;

                    if (dateValue) {
                        const date = document.createElement("small");
                        date.textContent = formatGuestbookDate(dateValue);
                        card.appendChild(date);
                    }

                    guestbookHistory.appendChild(card);
                });
        }

        if (loadMoreMessages) {
            loadMoreMessages.hidden =
                guestbookMessages.length <= visibleMessages;
        }
    }

    function loadGuestbook() {
        if (!guestbookHistory) return;

        const requestId = ++guestbookRequestId;
        const callbackName =
            "guestbookCallback_" +
            Date.now() +
            "_" +
            Math.random().toString(36).slice(2);

        const script = document.createElement("script");
        let finished = false;

        guestbookHistory.textContent = "Memuat ucapan dan doa...";

        const timeout = setTimeout(() => {
            finish();

            if (requestId === guestbookRequestId) {
                guestbookHistory.textContent =
                    "Riwayat ucapan gagal dimuat. Periksa konfigurasi Apps Script.";
            }
        }, 15000);

        function finish() {
            if (finished) return;
            finished = true;

            clearTimeout(timeout);
            script.remove();
            delete window[callbackName];
        }

        window[callbackName] = function (data) {
            finish();

            if (requestId !== guestbookRequestId) return;

            if (!Array.isArray(data)) {
                guestbookHistory.textContent =
                    "Data riwayat ucapan tidak valid.";
                console.error("Respons riwayat tidak valid:", data);
                return;
            }

            guestbookMessages = data;
            visibleMessages = 5;
            renderGuestbook();
        };

        script.onerror = function () {
            finish();

            if (requestId === guestbookRequestId) {
                guestbookHistory.textContent =
                    "Riwayat ucapan gagal dimuat. Periksa deployment Apps Script.";

                console.error("Gagal mengambil riwayat ucapan.");
            }
        };

        const separator = GOOGLE_SCRIPT_URL.includes("?") ? "&" : "?";

        script.src =
            GOOGLE_SCRIPT_URL +
            separator +
            "callback=" + encodeURIComponent(callbackName) +
            "&_=" + Date.now();

        document.head.appendChild(script);
    }

    if (loadMoreMessages) {
        loadMoreMessages.addEventListener("click", () => {
            visibleMessages += 5;
            renderGuestbook();
        });
    }

    if (rsvpForm) {
        rsvpForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const guestName =
                document.getElementById("guestName")?.value.trim() || "";

            const attendance =
                document.getElementById("attendance")?.value || "";

            const message =
                document.getElementById("message")?.value.trim() || "";

            const submitButton = rsvpForm.querySelector(
                'button[type="submit"]'
            );

            if (
                !guestName ||
                !message ||
                !["Hadir", "Tidak Hadir"].includes(attendance)
            ) {
                if (formStatus) {
                    formStatus.textContent =
                        "Mohon lengkapi semua kolom terlebih dahulu.";
                }
                return;
            }

            if (submitButton?.disabled) return;

            const rsvpData = {
                name: guestName.slice(0, 100),
                attendance,
                message: message.slice(0, 2000)
            };

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Mengirim...";
            }

            if (formStatus) {
                formStatus.textContent = "Sedang mengirim ucapan...";
            }

            try {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify(rsvpData)
                });

                if (formStatus) {
                    formStatus.textContent =
                        "Ucapan dikirim. Memperbarui riwayat...";
                }

                rsvpForm.reset();

                setTimeout(() => {
                    loadGuestbook();
                }, 2500);

            } catch (error) {
                console.error("Gagal mengirim ucapan:", error);

                if (formStatus) {
                    formStatus.textContent =
                        "Pengiriman gagal. Periksa koneksi internet dan coba kembali.";
                }
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "♡ Kirim Ucapan";
                }
            }
        });
    }

    loadGuestbook();

    /* =========================================================
       9. SMOOTH SCROLL
       ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();

            const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });

    /* =========================================================
       10. CEK STATUS AWAL
       ========================================================= */

    if (!openingScreen) {
        document.body.classList.remove("locked");
    }

    if (openingScreen && openingScreen.classList.contains("is-hidden") && siteHeader) {
        siteHeader.classList.add("visible");
    }

    /* =========================================================
       11. AMPLOP DIGITAL / SALIN REKENING & ALAMAT KADO
       ========================================================= */

    async function salinTeksGift(teks, pesan) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(teks);
                alert(pesan);
                return;
            }

            const area = document.createElement("textarea");
            area.value = teks;
            area.setAttribute("readonly", "");
            area.style.position = "fixed";
            area.style.opacity = "0";
            area.style.pointerEvents = "none";

            document.body.appendChild(area);
            area.select();

            const berhasil = document.execCommand("copy");
            area.remove();

            if (berhasil) {
                alert(pesan);
            } else {
                alert("Gagal menyalin. Silakan salin secara manual.");
            }
        } catch (error) {
            console.error("Gagal menyalin informasi hadiah:", error);
            alert("Gagal menyalin. Silakan salin secara manual.");
        }
    }

    function salinRekening(targetId = "accountBCA") {
        const accountElement = document.getElementById(targetId);

        if (!accountElement) {
            alert("Nomor rekening tidak ditemukan.");
            return;
        }

        const nomorRekening = accountElement.textContent.trim().replace(/\s+/g, "");

        salinTeksGift(
            nomorRekening,
            "Nomor rekening berhasil disalin!"
        );
    }

    function salinAlamatKado() {
        const namaElement = document.getElementById("giftRecipient");
        const hpElement = document.getElementById("giftPhone");
        const alamatElement = document.getElementById("giftAddress");

        if (!namaElement || !hpElement || !alamatElement) {
            alert("Informasi penerima kado belum lengkap.");
            return;
        }

        const nama = namaElement.textContent.trim();
        const hp = hpElement.textContent.trim();
        const alamat = alamatElement.textContent.trim();

        const informasiKado =
            `Nama Penerima: ${nama}\n` +
            `Nomor HP: ${hp}\n` +
            `Alamat: ${alamat}`;

        salinTeksGift(
            informasiKado,
            "Informasi penerima kado berhasil disalin!"
        );
    }

    // Ekspor fungsi ke global window
    window.salinRekening = salinRekening;
    window.salinAlamatKado = salinAlamatKado;
    window.runTemplateEngine = runTemplateEngine;
    window.getNestedValue = getNestedValue;

});
