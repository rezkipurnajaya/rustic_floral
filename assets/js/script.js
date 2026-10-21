
Gemini

New chat
Library
Images
Scheduled
Students

More
New notebook
Mastering Product Requirements: Best Practices and Documentation Formats
Monorepo Build Tools: Scaling Engineering with Bazel and Beyond
Mapping the Evolution of Retrieval-Augmented Generation
All notebooks
Magang Undangan Digital
Laporan Penjualan UD Rez Wan Jaya
Penyakit Hipertensi
Script Presentasi Video
Daily Quiz IELTS Intermediate
Grammar In Use Intermediate
Personal Branding
IELTS Writing Task 1
Conjunctions Practice
GROW Most Vocabulary
Outline Carousel Wawasan
IELTS Writing Task 2
Les IELTS: Optimalisasi
Framework Proses Belajar Efektif
Script PPT IK
Strategi Konten Solopreneur Edukasi Komputer
34 Daftar Jurusan, Mata Kuliah, Prospek
Tokoh Teknologi Komputer
Kerangka Konten YouTube Revolusi Edukasi
Membangun Kanal Edukasi Visioner
Riset Pendidikan Non-Formal Indonesia
Tujuan Pembelajaran Modul Teknis
Panduan Video Katalog Rezwan Jaya
Konsep Desain Web Undangan
Membuat Fitur dengan Web Statis
Caption Grosir Blangko Salman
Ciri Khas Blangko Undangan Specta 41-48
Penggabungan Estetik Blangko Undangan
Komposisi Estetik Tujuh Blangko Undangan
Ide Konten Blangko Terbaru
Penyusunan Estetik Blangko Undangan
Konsep Poster Empati Harjad Banjarmasin
Pembuatan Caption Blangko Falah
Desain Poster Carousel Magang AI
Susunan Estetik Undangan Pernikahan
Penataan Estetis Blangko Undangan
Strategi Stok Blangko Undangan Profit
Transkripsi Daftar Harga Produk
Klasifikasi Kategori Blangko Undangan Beliya 02
Transkripsi Teks dari Gambar
Kurikulum Pengembangan Software GenAI
Salin dan Sesuaikan Format Teks
Susunan Estetik Blangko Undangan
Penataan Blangko Undangan Estetik
Buatkan simulasi mulai harga normal 750rb, 800rb, 850rb, 900rb, ditambah 50rb seterusnya sampai 4,5 juta. Buat kolom keduanya berapa 7% dari harga normal (harga diskon) , kolom ketiga berapa harga normal-harga diskon (harga setelah diskon), kolom terakhir selisih dari harga normal dan harga setelah diskon Buat dalam bentuk tabel
Rincian Informasi Google Calendar
Pembuatan Caption Blangko Undangan BELIYA
Penataan Estetik Blangko Undangan
Desain Poster Rustic Cyan dan Gold
Jadwal Musim Hujan Banjarmasin
Analisis Periode Ramai Blangko Pernikahan
Analisis SWOT Bisnis Percetakan Undangan
Daftar Merek Produk Spanduk
Conversation with Gemini
apa tujuan dari materi ini?

Tujuan utama dari materi Minggu 10 ini adalah memisahkan lapisan data dari lapisan representasi (tampilan) pada proyek Website Undangan Pernikahan Digital menggunakan Vanilla JavaScript. Pemisahan ini memungkinkan kustomisasi data klien secara terpusat, cepat, dan mencegah risiko kerusakan struktur HTML/CSS.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Secara rinci, tujuan pembelajaran teknis dari modul ini mencakup empat target utama:

Merancang Skema Data Konfigurasi Klien Tersentralisasi

Menyusun berkas konfigurasi terpisah (assets/js/config.js atau wedding-data.json) sebagai single source of truth yang menampung seluruh variabel dinamis klien (seperti data mempelai, waktu, lokasi, dan nomor rekening).   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Formulasi Pola Tagging Penanda Variabel

Menerapkan sintaks penandaan variabel dinamis pada dokumen HTML5 menggunakan atribut semantik (seperti data-template, data-template-src, dan data-template-href) atau format Mustache-style.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Konstruksi Mesin Injeksi Data JavaScript

Mengembangkan fungsi templating engine mandiri berbasis Vanilla JS untuk memindai atribut semantik, membaca properti bersarang (nested properties), dan mengganti placeholder dengan data konfigurasi secara otomatis ke dalam DOM.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Pengelolaan Version Control & Dokumentasi Kendala

Mengelola riwayat commit repositori Git secara terstruktur sesuai standar Conventional Commits serta mendokumentasikan analisis kendala teknis beserta solusinya pada berkas README.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Penerapan materi ini bertujuan memberikan dampak praktis berupa efisiensi waktu produksi, penghindaran kesalahan struktural kode (zero structural regression), dan penanganan kondisi data kosong secara otomatis (fallback handling).   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

coba terapkan Skema Data Konfigurasi Klien Tersentralisasi, Formulasi Pola Tagging Penanda Variabel dan Konstruksi Mesin Injeksi Data JavaScript yang ada panduannya di slide ke kodingan ini



dan berikan kembali file index.html, style.css, script.js, dan config.js

Python
import os
import zipfile

# Check current directory files
print("Files in current dir:", os.listdir('.'))

# Find any zip or directory
for root, dirs, files in os.walk('.'):
    for f in files:
        print(os.path.join(root, f))

Code output
Files in current dir: ['rustic_floral-main (1).zip', '10 Modul Pembelajaran - Template Tagging & Placeholder Variable']
./rustic_floral-main (1).zip
./10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Python
import zipfile

with zipfile.ZipFile('rustic_floral-main (1).zip', 'r') as z:
    z.extractall('extracted')
    print("Zip contents:", z.namelist())

with open('extracted/rustic_floral-main/index.html', 'r', encoding='utf-8') as f:
    print("=== INDEX.HTML ===")
    print(f.read())

with open('extracted/rustic_floral-main/assets/js/script.js', 'r', encoding='utf-8') as f:
    print("=== SCRIPT.JS ===")
    print(f.read())

with open('extracted/rustic_floral-main/assets/css/style.css', 'r', encoding='utf-8') as f:
    print("=== STYLE.CSS ===")
    print(f.read())

Code output
Zip contents: ['rustic_floral-main/', 'rustic_floral-main/.gitignore', 'rustic_floral-main/README.md', 'rustic_floral-main/assets/', 'rustic_floral-main/assets/css/', 'rustic_floral-main/assets/css/style.css', 'rustic_floral-main/assets/images/', 'rustic_floral-main/assets/images/.gitkeep', 'rustic_floral-main/assets/images/foto1.jpg', 'rustic_floral-main/assets/images/foto2.jpg', 'rustic_floral-main/assets/images/foto3.jpg', 'rustic_floral-main/assets/images/foto4.jpg', 'rustic_floral-main/assets/images/foto5.jpg', 'rustic_floral-main/assets/images/foto6.jpg', 'rustic_floral-main/assets/images/man.jpg', 'rustic_floral-main/assets/images/story-1.jpg', 'rustic_floral-main/assets/images/story-2.jpg', 'rustic_floral-main/assets/images/story-3.jpg', 'rustic_floral-main/assets/images/story-4.jpg', 'rustic_floral-main/assets/images/woman.jpg', 'rustic_floral-main/assets/js/', 'rustic_floral-main/assets/js/script.js', 'rustic_floral-main/assets/music/', 'rustic_floral-main/assets/music/wedding-song.mp3', 'rustic_floral-main/docs/', 'rustic_floral-main/docs/PRD_Wedding_Invitation_Rustic_Floral.pdf', 'rustic_floral-main/index.html']
=== INDEX.HTML ===
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Undangan Pernikahan Andi Prasetyo & Sari Wulandari">
    <title>Undangan Pernikahan — Andi & Sari</title>

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <div class="rustic-bg-ornaments">
        <div class="floral-corner floral-corner-left">
            <span class="leaf leaf-1">❧</span>
            <span class="leaf leaf-2">❦</span>
            <span class="flower flower-1">✿</span>
            <span class="flower flower-2">❀</span>
        </div>

        <div class="floral-corner floral-corner-right">
            <span class="leaf leaf-3">❧</span>
            <span class="leaf leaf-4">❦</span>
            <span class="flower flower-3">❁</span>
            <span class="flower flower-4">✿</span>
        </div>

        <div class="floating-botanical botanical-1">❦</div>
        <div class="floating-botanical botanical-2">❧</div>
        <div class="floating-botanical botanical-3">✿</div>
    </div>
    
    <!-- BACKGROUND MUSIC -->
    <audio id="weddingMusic" loop preload="auto">
        <source src="assets/music/wedding-song.mp3" type="audio/mpeg">
        Browser Anda tidak mendukung audio HTML5.
    </audio>

    <!-- MUSIC CONTROL -->
    <button
        type="button"
        class="music-control"
        id="musicControl"
        aria-label="Putar musik"
        aria-pressed="false">
        <span class="music-icon">♫</span>
        <span class="music-waves">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </button>
    <!-- OPENING SCREEN -->
    <div class="opening-screen" id="openingScreen">
        <div class="opening-card">
            <div class="opening-floral">❀</div>
            <div class="opening-label">The Wedding Of</div>
            <h1>Andi <span>&</span> Sari</h1>
            <div class="opening-line"></div>
            <p class="opening-to">Kepada Yth.<br>Bapak/Ibu/Saudara/i</p>
            <div class="opening-date">MINGGU, 21 FEBRUARI 2027</div>
            <button type="button" class="open-button" id="openInvitation">Buka Undangan</button>
        </div>
    </div>

    <!-- HEADER -->
    <header class="site-header" id="siteHeader">
        <a href="#hero" class="brand">A<span>&</span>S</a>
        <nav class="nav-links">
            <a href="#couple">Mempelai</a>
            <a href="#events">Acara</a>
            <a href="#location">Lokasi</a>
            <a href="#countdown">Countdown</a>
            <a href="#story">Kisah</a>
            <a href="#gallery">Gallery</a>
            <a href="#wedding-quote">Doa</a>
            <a href="#gift">Hadiah</a>
            <a href="#rsvp">RSVP</a>
        </nav>
    </header>

    <main>

        <!-- HERO / COVER -->
        <section class="hero" id="hero">
            <div class="hero-flower hero-flower-left">❀</div>
            <div class="hero-flower hero-flower-right">✿</div>
            <div class="hero-content">
                <p class="hero-eyebrow">The Wedding Invitation Of</p>
                <h1 class="hero-names">Andi <span>&</span> Sari</h1>
                <div class="hero-divider">
                    <span></span>❀<span></span>
                </div>
                <p class="hero-message">
                    Dengan penuh kebahagiaan, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.
                </p>
                <div class="hero-date">
                    <span>MINGGU</span>
                    <strong>21</strong>
                    <span>FEBRUARI</span>
                    <span>2027</span>
                </div>
                <a href="#couple" class="scroll-down">
                    <span>Scroll untuk melihat undangan</span>
                    <b>↓</b>
                </a>
            </div>
        </section>

        <!-- 1. MEMPELAI (#couple) -->
        <section class="section couple-section" id="couple">
            <div class="section-heading">
                <p class="section-eyebrow">Kami Yang Berbahagia</p>
                <h2>Mempelai</h2>
                <div class="heading-flower">✿</div>
            </div>

            <div class="couple-wrapper">
                <div class="person">
                    <div class="person-image">
                        <img src="assets/images/man.jpg" alt="Andi Prasetyo, S.T.">
                    </div>
                    <p class="person-label">The Groom</p>
                    <h3>Andi Prasetyo, S.T.</h3>
                    <p class="person-family">Putra dari<br>Bapak H. Ahmad & Ibu Hj. Fatimah</p>
                </div>

                <div class="couple-heart"><span>♡</span></div>

                <div class="person">
                    <div class="person-image">
                        <img src="assets/images/woman.jpg" alt="Sari Wulandari, S.Pd.">
                    </div>
                    <p class="person-label">The Bride</p>
                    <h3>Sari Wulandari, S.Pd.</h3>
                    <p class="person-family">Putri dari<br>Bapak H. Budi & Ibu Hj. Rahayu</p>
                </div>
            </div>
        </section>

        <!-- 2. RANGKAIAN ACARA (#events) -->
        <section class="section events-section" id="events">
            <div class="section-heading">
                <p class="section-eyebrow">Rangkaian Pernikahan</p>
                <h2>Acara Utama</h2>
                <div class="heading-flower">✿</div>
            </div>

            <div class="events-wrapper">
                <!-- AKAD NIKAH -->
                <article class="event">
                    <div class="event-top">
                        <span>01</span>
                        <p>AKAD NIKAH</p>
                    </div>
                    <div class="event-flower">❀</div>
                    <h3>Akad Nikah</h3>
                    <div class="event-detail">
                        <div>
                            <span class="detail-label">Hari & Tanggal</span>
                            <strong>Minggu, 21 Februari 2027</strong>
                        </div>
                        <div>
                            <span class="detail-label">Waktu</span>
                            <strong>08.00 — 10.00 WIB</strong>
                        </div>
                        <div>
                            <span class="detail-label">Tempat</span>
                            <strong>Masjid Jami' Al-Ikhlas</strong>
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
                                Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan
                            </p>
                        </div>
                    </div>
                    <div class="event-actions" style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
                        <a href="https://maps.google.com/?q=Masjid+Jami'+Al-Ikhlas+Jl.+Raya+Ragunan+No.+11A+Jati+Padang" target="_blank" class="event-button">🗺️ Lokasi Akad</a>
                        <button type="button" class="event-button" id="calendarButton">📅 Save The Date</button>
                    </div>
                </article>

                <!-- RESEPSI -->
                <article class="event">
                    <div class="event-top">
                        <span>02</span>
                        <p>RESEPSI</p>
                    </div>
                    <div class="event-flower">❀</div>
                    <h3>Resepsi Pernikahan</h3>
                    <div class="event-detail">
                        <div>
                            <span class="detail-label">Hari & Tanggal</span>
                            <strong>Minggu, 21 Februari 2027</strong>
                        </div>
                        <div>
                            <span class="detail-label">Waktu</span>
                            <strong>14.00 — 16.00 WIB</strong>
                        </div>
                        <div>
                            <span class="detail-label">Tempat</span>
                            <strong>Gedung Pertemuan PERTAMINA</strong>
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
                                Jl. Cemp. Putih Tengah XX B No.20B, Kota Jakarta Pusat
                            </p>
                        </div>
                    </div>
                    <div class="event-actions" style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
                        <a href="https://maps.google.com/?q=Gedung+Pertemuan+PERTAMINA" target="_blank" class="event-button">🗺️ Lokasi Resepsi</a>
                        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Andi+%26+Sari&dates=20270221T070000Z/20270221T090000Z&details=Resepsi+Pernikahan+Andi+Prasetyo+%26+Sari+Wulandari&location=Gedung+Pertemuan+PERTAMINA" target="_blank" class="event-button">📅 Save The Date</a>
                    </div>
                </article>
            </div>
        </section>

        <!-- 3. LOKASI & COUNTDOWN -->
        <section class="section location-section" id="location">
            <div class="section-heading">
                <p class="section-eyebrow">Lokasi Acara</p>
                <h2>Peta Lokasi Acara</h2>
                <div class="heading-flower">✿</div>
            </div>

            <!-- MAP SLIDER -->
            <div class="map-slider" id="mapSlider">
                <div class="map-track">
                    <!-- MAP AKAD -->
                    <div class="map-slide active">
                        <div class="map-card">
                            <div class="map-title">
                                <span class="map-number">01</span>
                                <div>
                                    <small>AKAD NIKAH</small>
                                    <h3>Masjid Jami' Al-Ikhlas</h3>
                                    <p>Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan</p>
                                </div>
                            </div>
                            <div class="map-frame">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7362024147047!2d106.8286915!3d-6.2983804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2307bdcdd03%3A0x6b9bfd3b48f654b1!2sMasjid%20Jami&#39;%20Al-Ikhlas!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                                    width="100%"
                                    height="360"
                                    style="border:0;"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <a href="https://maps.google.com/?q=Masjid+Jami'+Al-Ikhlas+Jl.+Raya+Ragunan+No.+11A+Jati+Padang"
                                target="_blank" rel="noopener noreferrer" class="map-button">
                                Buka Google Maps
                            </a>
                        </div>
                    </div>

                    <!-- MAP RESEPSI -->
                    <div class="map-slide">
                        <div class="map-card">
                            <div class="map-title">
                                <span class="map-number">02</span>
                                <div>
                                    <small>RESEPSI</small>
                                    <h3>Gedung Pertemuan PERTAMINA</h3>
                                    <p>Jl. Cempaka Putih Tengah XX B No. 20B, Jakarta Pusat</p>
                                </div>
                            </div>
                            <div class="map-frame">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2737668615796!2d106.8329618!3d-6.2275811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ebd03c9233%3A0x3344692eb3f57262!2sGedung%20Pertemuan%20Pertamina!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                                    width="100%"
                                    height="360"
                                    style="border:0;"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <a href="https://maps.google.com/?q=Gedung+Pertemuan+PERTAMINA"
                                target="_blank" rel="noopener noreferrer" class="map-button">
                                Buka Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                <!-- TOMBOL SLIDER -->
                <button type="button" class="map-arrow map-prev" id="mapPrev" aria-label="Lokasi sebelumnya">‹</button>
                <button type="button" class="map-arrow map-next" id="mapNext" aria-label="Lokasi berikutnya">›</button>

                <!-- DOT INDICATOR -->
                <div class="map-dots">
                    <button type="button" class="map-dot active" data-slide="0" aria-label="Lihat lokasi akad"></button>
                    <button type="button" class="map-dot" data-slide="1" aria-label="Lihat lokasi resepsi"></button>
                </div>
            </div>

            <!-- COUNTDOWN -->
            <div class="countdown-wrapper" id="countdown">
                <div class="section-heading countdown-heading">
                    <p class="section-eyebrow">Menuju Hari Bahagia</p>
                    <h2>Countdown</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <div class="countdown">
                    <div class="count-item">
                        <strong id="days">000</strong>
                        <span>HARI</span>
                    </div>
                    <div class="count-item">
                        <strong id="hours">00</strong>
                        <span>JAM</span>
                    </div>
                    <div class="count-item">
                        <strong id="minutes">00</strong>
                        <span>MENIT</span>
                    </div>
                    <div class="count-item">
                        <strong id="seconds">00</strong>
                        <span>DETIK</span>
                    </div>
                </div>
            </div>
        </section>

        </section>


        <!-- ==================================================
            4. LIVE STREAMING
            ================================================== -->

        <section class="section live-section" id="live">

            <div class="section-heading">

                <p class="section-eyebrow">
                    Saksikan Bersama
                </p>

                <h2>
                    Live Streaming
                </h2>

                <div class="heading-flower">
                    ✿
                </div>

            </div>


            <div class="live-wrapper">

                <div class="live-card">

                    <div class="live-status">
                        <span class="live-dot"></span>
                        LIVE
                    </div>


                    <div class="live-frame">

                        <iframe
                            src="https://www.youtube.com/embed/YOUR_LIVE_VIDEO_ID"
                            title="Live Streaming Pernikahan Andi & Sari"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>

                    </div>


                    <div class="live-content">

                        <h3>
                            Saksikan Pernikahan Kami Secara Live
                        </h3>

                        <p>
                            Bagi keluarga dan sahabat yang tidak dapat hadir
                            secara langsung, kami mengundang Anda untuk
                            menyaksikan momen bahagia ini melalui live streaming.
                        </p>


                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="live-button">

                            Tonton di YouTube

                        </a>

                    </div>

                </div>

            </div>

        </section>


        <!-- 5. LOVE STORY -->
        <section class="section story-section" id="story">

        <!-- 4. LOVE STORY -->
        <section class="section story-section" id="story">
            <div class="section-heading">
                <p class="section-eyebrow">Kisah Kami</p>
                <h2>Love Story</h2>
                <div class="heading-flower">✿</div>
            </div>

            <div class="story">
                <div class="story-item">
                    <div class="story-year">01</div>
                    <div class="story-dot"></div>
                    <div class="story-content">
                        <div class="story-image">
                            <img src="assets/images/story-1.jpg" alt="Awal pertemuan Andi dan Sari">
                        </div>
                        <div class="story-text">
                            <span class="story-label">AWAL PERTEMUAN</span>
                            <h3>Pertama Bertemu</h3>
                            <p>
                                Kami pertama kali bertemu di bangku kuliah saat mengikuti kegiatan organisasi kampus.
                                Dari sebuah pertemuan sederhana, perlahan tumbuh cerita yang begitu berarti.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="story-item">
                    <div class="story-year">02</div>
                    <div class="story-dot"></div>
                    <div class="story-content">
                        <div class="story-image">
                            <img src="assets/images/story-2.jpg" alt="Kisah Andi dan Sari">
                        </div>
                        <div class="story-text">
                            <span class="story-label">KOMITMEN</span>
                            <h3>Berkomitmen</h3>
                            <p>
                                Setelah melalui berbagai cerita bersama, kami memutuskan untuk melangkah lebih jauh,
                                saling mendukung dan tumbuh bersama.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="story-item">
                    <div class="story-year">03</div>
                    <div class="story-dot"></div>
                    <div class="story-content">
                        <div class="story-image">
                            <img src="assets/images/story-3.jpg" alt="Lamaran Andi dan Sari">
                        </div>
                        <div class="story-text">
                            <span class="story-label">MENUJU PERNIKAHAN</span>
                            <h3>Lamaran & Pernikahan</h3>
                            <p>
                                Dengan restu kedua keluarga, kami memantapkan hati untuk mengikat janji suci dan memulai
                                perjalanan baru sebagai satu keluarga.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="story-item">
                    <div class="story-year">04</div>
                    <div class="story-dot"></div>
                    <div class="story-content">
                        <div class="story-image">
                            <img src="assets/images/story-4.jpg" alt="Kisah Andi dan Sari">
                        </div>
                        <div class="story-text">
                            <span class="story-label">PERNIKAHAN</span>
                            <h3>Pernikahan</h3>
                            <p>
                                Hari di mana janji suci diucapkan di hadapan Tuhan dan para saksi, mengawali kehidupan
                                bahtera rumah tangga yang penuh kehangatan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. GALLERY & VIDEO -->
        <section class="section gallery-section" id="gallery">
            <div class="section-heading">
                <p class="section-eyebrow">Our Moments</p>
                <h2>Wedding Video</h2>
                <div class="heading-flower">✿</div>
            </div>

            <div class="video-wrapper">
                <div class="video-card">
                    <iframe 
                        class="wedding-video" 
                        src="https://www.youtube.com/embed/CglBdEdY2T4" 
                        title="Wedding Video Andi & Sari" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                <p class="video-caption">
                    Sebuah cerita, sebuah perjalanan, dan sebuah momen yang akan selalu kami kenang.
                </p>
            </div>

            <div class="section-heading gallery-heading">
                <p class="section-eyebrow">Memories</p>
                <h2>Our Gallery</h2>
                <div class="heading-flower">✿</div>
            </div>

            <!-- CONTAINER GALERI (Desktop: Grid, Mobile: Slider) -->
            <div class="gallery-slider-wrapper" id="gallerySlider">
                <div class="gallery-grid gallery-track">
                    <div class="gallery-item gallery-slide">
                        <img src="assets/images/foto1.jpg" alt="Foto Andi dan Sari 1">
                    </div>
                    <div class="gallery-item gallery-slide">
                        <img src="assets/images/foto2.jpg" alt="Foto Andi dan Sari 2">
                    </div>
                    <div class="gallery-item gallery-slide">
                        <img src="assets/images/foto3.jpg" alt="Foto Andi dan Sari 3">
                    </div>
                    <div class="gallery-item gallery-slide">
                        <img src="assets/images/foto4.jpg" alt="Foto Andi dan Sari 4">
                    </div>
                    <div class="gallery-item gallery-slide">
                        <img src="assets/images/foto5.jpg" alt="Foto Andi dan Sari 5">
                    </div>
                    <div class="gallery-item gallery-slide">
                        <img src="assets/images/foto6.jpg" alt="Foto Andi dan Sari 6">
                    </div>
                </div>

                <!-- Control Slider khusus Mobile -->
                <button type="button" class="gallery-arrow gallery-prev" id="galleryPrev" aria-label="Foto sebelumnya">‹</button>
                <button type="button" class="gallery-arrow gallery-next" id="galleryNext" aria-label="Foto berikutnya">›</button>

                <div class="gallery-dots" id="galleryDots"></div>
            </div>

            <!-- Modal Lightbox Foto -->
            <div id="galleryModal" class="gallery-modal" aria-hidden="true">
                <div class="gallery-modal-content">
                    <button type="button" class="gallery-modal-close" id="galleryModalClose">&times;</button>
                    <img id="galleryModalImg" src="" alt="Preview Photo">
                </div>
            </div>
        </section>

        <!-- 6. DOA & HARAPAN (#wedding-quote) -->
        <section class="section prayer-section" id="wedding-quote">
            <div class="section-heading">
                <p class="section-eyebrow">Doa & Harapan</p>
                <h2>Sebuah Doa Untuk Kami</h2>
                <div class="heading-flower">✿</div>
            </div>

            <div class="prayer-card">
                <div class="arabic">
                    رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
                </div>
                <div class="prayer-divider">❀</div>
                <div class="translation">
                    “Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan yang menjadi penyejuk hati...”
                </div>
                <div class="prayer-source">— QS. Al-Furqan: 74 —</div>
            </div>
        </section>

        <!-- 7. AMPLOP DIGITAL / HADIAH (#gift) -->
        <section class="section gift-section" id="gift">
            <div class="section-heading">
                <p class="section-eyebrow">Tanda Kasih</p>
                <h2>Amplop Digital</h2>
                <div class="heading-flower">✿</div>
            </div>

            <p class="gift-intro">
                Doa restu Anda merupakan hadiah terindah. Namun jika ingin memberi hadiah,
                Anda dapat menggunakan fitur di bawah ini:
            </p>

            <div class="gift-wrapper">

                <!-- KARTU REKENING BCA -->
                <div class="gift-card">
                    
                    <p class="gift-bank">BANK BCA</p>

                    <p class="gift-account" id="accountBCA">1234 5678 90</p>

                    <p class="gift-name">a.n. Andi Prasetyo</p>

                    <button
                        type="button"
                        class="gift-button"
                        onclick="salinRekening()">
                        Salin Rekening
                    </button>

                    <div class="gift-icon">♡</div>
                    <p class="gift-bank">BANK BCA</p>

                    <p class="gift-account" id="accountBCA">4567 5678 21</p>

                    <p class="gift-name">a.n. Sari Wulandari</p>
                    
                    <button
                        type="button"
                        class="gift-button"
                        onclick="salinRekening()">
                        Salin Rekening
                    </button>
                </div>

                <!-- KARTU KIRIM KADO -->
                <div class="gift-card gift-delivery-card">
                    <div class="gift-icon">♡</div>
                    <p class="gift-bank">KIRIM KADO</p>

                    <div class="gift-detail">
                        <span class="gift-label">Nama Penerima</span>
                        <p class="gift-value" id="giftRecipient">
                            Andi Prasetyo
                        </p>
                    </div>

                    <div class="gift-detail">
                        <span class="gift-label">Nomor HP</span>
                        <p class="gift-value" id="giftPhone">
                            0812-3456-7890
                        </p>
                    </div>

                    <div class="gift-detail">
                        <span class="gift-label">Alamat Penerima</span>
                        <p class="gift-value gift-address" id="giftAddress">
                            Masukkan alamat lengkap penerima kado di sini
                        </p>
                    </div>

                    <button
                        type="button"
                        class="gift-button"
                        onclick="salinAlamatKado()">
                        Salin Alamat Kado
                    </button>
                </div>

            </div>
        </section>

        
        <!-- 8. RSVP & KIRIM UCAPAN -->
        <section class="section rsvp-section" id="rsvp">

            <div class="section-heading">
                <p class="section-eyebrow">Kehadiran & Doa</p>
                <h2>RSVP & Kirim Ucapan</h2>
                <div class="heading-flower">✿</div>
                <p>Bagikan konfirmasi kehadiran serta doa terbaik untuk Andi & Sari.</p>
            </div>

            <!-- DUA BOX DALAM SATU SECTION -->
            <div class="rsvp-container">

                <!-- BOX 1: FORM KIRIM UCAPAN -->
                <div class="rsvp-box rsvp-form-box">

                    <div class="rsvp-box-heading">
                        <span class="rsvp-box-icon">♡</span>
                        <h3>Kirim Ucapan & Doa</h3>
                        <p>Sampaikan doa dan harapan terbaik Anda.</p>
                    </div>

                    <form class="rsvp-form" id="rsvpForm">

                        <div class="form-group">
                            <label for="guestName">Nama Lengkap</label>
                            <input
                                type="text"
                                id="guestName"
                                placeholder="Nama Lengkap Anda"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="attendance">Konfirmasi Kehadiran</label>
                            <select id="attendance" required>
                                <option value="">Pilih konfirmasi</option>
                                <option value="Hadir">Hadir</option>
                                <option value="Tidak Hadir">Tidak Hadir</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Ucapan & Doa</label>
                            <textarea
                                id="message"
                                placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" class="rsvp-button">
                            ♡ Kirim Ucapan
                        </button>

                        <p class="form-status" id="formStatus" aria-live="polite"></p>

                    </form>
                </div>

                <!-- BOX 2: RIWAYAT UCAPAN -->
                <div class="rsvp-box guestbook-box" id="guestbook">

                    <div class="rsvp-box-heading">
                        <span class="rsvp-box-icon">❀</span>
                        <h3>Ucapan & Doa dari Tamu</h3>
                        <p>Doa dan ucapan hangat dari keluarga serta sahabat.</p>
                    </div>

                    <!-- HANYA AREA INI YANG BISA DI-SCROLL -->
                    <div class="guestbook-scroll-container">

                        <div id="guestbookHistory" aria-live="polite">
                            <p>Memuat ucapan dan doa...</p>
                        </div>

                    </div>

                    <button type="button" id="loadMoreMessages" hidden>
                        Lihat Ucapan Lainnya
                    </button>

                </div>

            </div>
        </section>

    <footer class="footer">
        <div class="footer-flower">❀</div>
        <p class="footer-small">With love</p>
        <h2>Andi & Sari</h2>
        <p>21 Februari 2027</p>
    </footer>

    <!-- NAVBAR MOBILE -->

        <nav class="mobile-nav" aria-label="Navigasi undangan">
        <a href="#home" class="active">
            <span>⌂</span>
            <small>Home</small>
        </a>
        <a href="#couple">
            <span>♡</span>
            <small>Mempelai</small>
        </a>
        <a href="#event">
            <span>♧</span>
            <small>Acara</small>
        </a>
        <a href="#gallery">
            <span>▧</span>
            <small>Galeri</small>
        </a>
        <a href="#gift">
            <span>♧</span>
            <small>Hadiah</small>
        </a>
    </nav>
    


    <script src="assets/js/script.js"></script>
</body>

</html>
=== SCRIPT.JS ===
/* ============================================================
WEDDING INVITATION — JAVASCRIPT
File: script.js
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
    1. KONFIGURASI & ELEMENT
    ========================================================= */

    const WEDDING_DATE = "2027-02-21T08:00:00+07:00";

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

        /* ------------------------------------------------------------
        UPDATE TOMBOL MUSIK
        ------------------------------------------------------------ */

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

        /* ------------------------------------------------------------
        PLAY MUSIC
        ------------------------------------------------------------ */

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

        /* ------------------------------------------------------------
        PAUSE MUSIC
        ------------------------------------------------------------ */

        function pauseMusic() {
            music.pause();
            updateMusicButton();
        }

        /* ------------------------------------------------------------
        BUKA UNDANGAN
        ------------------------------------------------------------ */

        if (openInvitationButton) {
            openInvitationButton.addEventListener("click", function () {

                // Jalankan musik setelah user klik tombol
                playMusic();

            });
        }

        /* ------------------------------------------------------------
        TOMBOL PLAY / PAUSE
        ------------------------------------------------------------ */

        musicControl.addEventListener("click", function () {

            if (music.paused) {
                playMusic();
            } else {
                pauseMusic();
            }

        });

        /* ------------------------------------------------------------
        UPDATE STATUS
        ------------------------------------------------------------ */

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

        const target = new Date(WEDDING_DATE).getTime();
        const now = Date.now();
        const difference = target - now;

        if (difference <= 0) {
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
    5. SAVE TO CALENDAR
    ========================================================= */

    if (calendarButton) {
        calendarButton.addEventListener("click", () => {
            const icsContent = [
                "BEGIN:VCALENDAR",
                "VERSION:2.0",
                "PRODID:-//Andi & Sari Wedding//ID",
                "CALSCALE:GREGORIAN",
                "BEGIN:VEVENT",
                "UID:andi-sari-wedding-2027@example.com",
                "DTSTAMP:20260919T000000Z",
                "DTSTART:20270221T010000Z",
                "DTEND:20270221T030000Z",
                "SUMMARY:Akad Nikah Andi & Sari",
                "LOCATION:Masjid Jami' Al-Ikhlas, Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan",
                "DESCRIPTION:Akad Nikah Andi & Sari.",
                "END:VEVENT",
                "END:VCALENDAR"
            ].join("\r\n");

            const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");

            link.href = url;
            link.download = "andi-sari-akad.ics";
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
    const gallerySlides = document.querySelectorAll(".gallery-slide");
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
            galleryTrack.style.transform = "none"; // Reset transformasi saat kembali ke Desktop
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
        "https://script.google.com/macros/s/AKfycby0ijLbTlRvzkjtySPbHRTmf0CxJhSezpaPzvY8mIDeP53kLFg50IM91dqGvsj4U7befw/exec";

    const guestbookHistory = document.getElementById("guestbookHistory");
    const loadMoreMessages = document.getElementById("loadMoreMessages");

    let guestbookMessages = [];
    let visibleMessages = 5;
    let guestbookRequestId = 0;

    /* =========================================================
    FORMAT TANGGAL
    ========================================================= */

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

    /* =========================================================
    TAMPILKAN RIWAYAT UCAPAN
    ========================================================= */

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

    /* =========================================================
    AMBIL RIWAYAT DARI GOOGLE SHEETS MELALUI JSONP
    ========================================================= */

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

    /* =========================================================
    TOMBOL LIHAT UCAPAN LAINNYA
    ========================================================= */

    if (loadMoreMessages) {
        loadMoreMessages.addEventListener("click", () => {
            visibleMessages += 5;
            renderGuestbook();
        });
    }

    /* =========================================================
    KIRIM RSVP DAN UCAPAN
    ========================================================= */

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
                /*
                * no-cors tidak memberikan respons yang bisa dibaca.
                * Karena itu, kirim data lalu muat ulang riwayat
                * setelah memberi waktu untuk penyimpanan.
                */
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

    /* Muat riwayat saat halaman dibuka */
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

            // Fallback untuk browser yang tidak mendukung Clipboard API
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

    function salinRekening() {
        const accountElement = document.getElementById("accountBCA");

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
    
    // Agar dapat dipanggil oleh atribut onclick pada HTML.
    window.salinRekening = salinRekening;
    window.salinAlamatKado = salinAlamatKado;

});
=== STYLE.CSS ===
/* ============================================================
   WEDDING INVITATION — ANDI & SARI
   RUSTIC FLORAL DIGITAL INVITATION
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@400;500;600&display=swap');


/* ============================================================
   VARIABLES
   ============================================================ */

:root {
    --cream: #f8f3ed;
    --cream-dark: #eee5db;
    --paper: #fffdf9;

    --sage: #dfe8df;
    --sage-light: #edf2ec;
    --sage-dark: #70836f;
    --sage-deep: #506651;

    --rose: #d9a0a5;
    --rose-light: #f2dfe0;
    --rose-dark: #b8757d;

    --lavender: #e8e0ec;
    --lavender-dark: #9887a5;

    --gold: #b99358;
    --gold-light: #d8bd8b;

    --ink: #4a4642;
    --muted: #837b75;

    --white: #ffffff;

    --serif: "Cormorant Garamond", Georgia, serif;
    --sans: "Montserrat", Arial, sans-serif;

    --shadow: 0 15px 45px rgba(80, 65, 55, 0.08);
    --border: rgba(185, 147, 88, 0.25);
}


/* ============================================================
   RESET
   ============================================================ */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--cream);
    color: var(--ink);
    font-family: var(--sans);
    line-height: 1.7;
    overflow-x: hidden;
}

body.locked {
    overflow: hidden;
}

img {
    display: block;
    width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input,
select,
textarea {
    font: inherit;
}


/* ============================================================
   BACKGROUND ORNAMENT
   ============================================================ */

.rustic-bg-ornaments {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}

.floral-corner {
    position: absolute;
    width: 250px;
    height: 250px;
    opacity: 0.14;
}

.floral-corner-left {
    top: -45px;
    left: -45px;
    transform: rotate(-20deg);
}

.floral-corner-right {
    right: -50px;
    bottom: -40px;
    transform: rotate(160deg);
}

.flower,
.leaf {
    position: absolute;
    font-family: var(--serif);
}

.flower {
    color: var(--rose-dark);
    font-size: 4rem;
}

.leaf {
    color: var(--sage-deep);
    font-size: 5rem;
}

.flower-1 { top: 30px; left: 60px; }
.flower-2 { top: 110px; left: 15px; color: var(--gold); font-size: 2.8rem; }
.leaf-1 { top: 50px; left: 100px; transform: rotate(25deg); }
.leaf-2 { top: 135px; left: 75px; transform: rotate(-30deg); }
.flower-3 { top: 20px; left: 70px; color: var(--rose); }
.flower-4 { top: 100px; left: 20px; color: var(--gold); font-size: 3rem; }
.leaf-3 { top: 55px; left: 110px; transform: rotate(25deg); }
.leaf-4 { top: 135px; left: 75px; transform: rotate(-25deg); }

.floating-botanical {
    position: absolute;
    color: var(--sage-deep);
    font-family: var(--serif);
    opacity: 0.08;
}

.botanical-1 { top: 35%; left: 3%; font-size: 7rem; transform: rotate(-20deg); }
.botanical-2 { top: 55%; right: 3%; color: var(--rose-dark); font-size: 6rem; transform: rotate(25deg); }
.botanical-3 { bottom: 18%; left: 8%; color: var(--gold); font-size: 4rem; }


/* ============================================================
   OPENING SCREEN
   ============================================================ */

.opening-screen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background: var(--cream);
    transition: opacity 0.7s ease, visibility 0.7s ease;
}

.opening-screen.is-hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.opening-card {
    position: relative;
    width: min(520px, 100%);
    padding: 65px 35px 55px;
    text-align: center;
    background: var(--paper);
    border: 1px solid var(--border);
    box-shadow: 0 25px 80px rgba(70, 55, 45, 0.12);
    overflow: hidden;
}

.opening-card::before,
.opening-card::after {
    content: "❀";
    position: absolute;
    color: var(--rose);
    font-family: var(--serif);
    font-size: 6rem;
    opacity: 0.16;
}

.opening-card::before { top: -30px; left: -15px; }
.opening-card::after { right: -15px; bottom: -35px; }

.opening-floral {
    margin-bottom: 10px;
    color: var(--gold);
    font-family: var(--serif);
    font-size: 1.6rem;
}

.opening-label {
    color: var(--gold);
    font-family: var(--serif);
    font-size: 1.5rem;
    font-style: italic;
}

.opening-card h1 {
    margin-top: 5px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: clamp(4rem, 10vw, 6rem);
    font-weight: 500;
    line-height: 0.9;
}

.opening-card h1 span {
    color: var(--rose);
}

.opening-line {
    width: 100px;
    height: 1px;
    margin: 22px auto;
    background: var(--gold);
}

.opening-to {
    color: var(--muted);
    font-family: var(--serif);
    font-size: 1.15rem;
    font-style: italic;
}

.opening-date {
    margin-top: 20px;
    color: var(--sage-deep);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 2px;
}

.open-button {
    margin-top: 28px;
    padding: 13px 28px;
    border: 1px solid var(--sage-deep);
    border-radius: 2px;
    background: var(--sage-deep);
    color: white;
    cursor: pointer;
    font-size: 0.72rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: 0.3s ease;
}

.open-button:hover {
    background: var(--rose-dark);
    border-color: var(--rose-dark);
    transform: translateY(-2px);
}


/* ============================================================
   HEADER
   ============================================================ */

.site-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 7%;
    background: rgba(255, 253, 249, 0.94);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(185, 147, 88, 0.15);
}

.brand {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gold-light);
    border-radius: 50%;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 1rem;
}

.brand span {
    color: var(--rose);
}

.nav-links {
    display: flex;
    gap: 28px;
}

.nav-links a {
    position: relative;
    color: var(--muted);
    font-size: 0.68rem;
    letter-spacing: 0.5px;
    transition: 0.25s ease;
}

.nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 0;
    height: 1px;
    background: var(--rose);
    transition: 0.25s ease;
}

.nav-links a:hover {
    color: var(--rose-dark);
}

.nav-links a:hover::after {
    width: 100%;
}


/* ============================================================
   MAIN & HERO
   ============================================================ */

main {
    position: relative;
    z-index: 1;
}

.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 25px 80px;
    text-align: center;
    background: var(--cream);
    overflow: hidden;
}

.hero::before,
.hero::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    border: 1px solid rgba(185, 147, 88, 0.22);
    border-radius: 50%;
}

.hero::before {
    top: 18%;
    left: 8%;
}

.hero::after {
    right: 8%;
    bottom: 14%;
}

.hero-content {
    width: min(850px, 100%);
}

.hero-eyebrow {
    color: var(--gold);
    font-family: var(--serif);
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-style: italic;
}

.hero-names {
    margin-top: 5px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: clamp(5rem, 13vw, 9rem);
    font-weight: 500;
    line-height: 0.85;
}

.hero-names span {
    color: var(--rose);
}

.hero-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 30px auto 20px;
    color: var(--gold);
}

.hero-divider span {
    width: 90px;
    height: 1px;
    background: var(--gold-light);
}

.hero-message {
    width: min(480px, 100%);
    margin: auto;
    color: var(--muted);
    font-family: var(--serif);
    font-size: 1.35rem;
    font-style: italic;
    line-height: 1.5;
}

.hero-date {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 35px;
    color: var(--sage-deep);
}

.hero-date span {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 1.5px;
}

.hero-date strong {
    color: var(--rose-dark);
    font-family: var(--serif);
    font-size: 3rem;
    font-weight: 500;
    line-height: 1;
}

.hero-flower {
    position: absolute;
    color: var(--rose);
    font-family: var(--serif);
    font-size: 7rem;
    opacity: 0.10;
}

.hero-flower-left {
    left: 3%;
    bottom: 10%;
}

.hero-flower-right {
    top: 18%;
    right: 3%;
    color: var(--sage-deep);
}

.scroll-down {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 45px;
    color: var(--muted);
    font-size: 0.6rem;
    letter-spacing: 1px;
}

.scroll-down b {
    color: var(--rose);
    font-size: 1.2rem;
    font-weight: 400;
}


/* ============================================================
   GENERAL SECTION
   ============================================================ */

.section,
.couple-section,
.story-section,
.gift-section,
.events-section,
.rsvp-section,
.countdown-section,
.gallery-section,
.prayer-section,
.location-section,
.quote-section,
.video-section {
    position: relative;
    width: 100%;
    padding: 100px 7%;
    overflow: hidden;
    background: var(--cream);
}

.section::before {
    content: "❀";
    position: absolute;
    top: 25px;
    left: 25px;
    color: var(--rose);
    font-family: var(--serif);
    font-size: 3rem;
    opacity: 0.07;
    transform: rotate(-20deg);
    pointer-events: none;
}

.section::after {
    content: "❦";
    position: absolute;
    right: 25px;
    bottom: 25px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 4rem;
    opacity: 0.06;
    transform: rotate(15deg);
    pointer-events: none;
}


/* ============================================================
   STANDARD SECTION HEADING
   ============================================================ */

.section-heading {
    position: relative;
    z-index: 2;
    margin-bottom: 55px;
    text-align: center;
}

.section-eyebrow {
    color: var(--gold);
    font-family: var(--serif);
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-style: italic;
    font-weight: 400;
    line-height: 1.2;
}

.section-heading h2 {
    margin-top: 5px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: clamp(2.5rem, 6vw, 3.8rem);
    font-weight: 600;
    line-height: 1;
}

.heading-flower {
    margin-top: 12px;
    color: var(--rose);
    font-family: var(--serif);
    font-size: 1.1rem;
}

.section-heading p {
    width: min(500px, 100%);
    margin: 14px auto 0;
    color: var(--muted);
    font-family: var(--sans);
    font-size: 0.75rem;
    line-height: 1.8;
}


/* ============================================================
   BACKGROUND MUSIC CONTROL
   ============================================================ */

.music-control {
    position: fixed;
    right: 22px;
    bottom: 22px;

    width: 52px;
    height: 52px;

    border: 1px solid rgba(96, 118, 90, 0.35);
    border-radius: 50%;

    background: rgba(251, 249, 244, 0.95);
    color: var(--sage-deep);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    z-index: 9998;

    box-shadow:
        0 8px 25px rgba(48, 51, 45, 0.15);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;

    overflow: hidden;
}

.music-control:hover {
    transform: scale(1.08);

    box-shadow:
        0 10px 30px rgba(48, 51, 45, 0.22);
}

.music-icon {
    position: relative;
    z-index: 2;

    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0;
    line-height: 1;

    transform-origin: center center;
}

/*
   NOTE MUSIK SAAT BERHENTI
   Tetap menggunakan simbol ♫.
   Garis merah menandakan mute/paused.
*/

.music-icon::before {
    content: "♫";

    color: var(--sage-deep);

    font-family: var(--serif);
    font-size: 25px;
    font-weight: 600;

    line-height: 1;

    transform: rotate(0deg);
}

.music-icon::after {
    content: "";

    position: absolute;

    width: 27px;
    height: 2px;

    background: var(--rose-dark);

    border-radius: 2px;

    transform: rotate(-45deg);

    transition: opacity 0.25s ease;
}


/*
   ============================================================
   SAAT MUSIK BERJALAN
   ============================================================

   Tidak lagi berubah menjadi piringan hitam.

   Note musik ♫ akan berputar secara terus-menerus.
*/

.music-control.playing .music-icon {
    width: 30px;
    height: 30px;

    background: transparent;

    border-radius: 0;

    box-shadow: none;

    animation:
        musicNoteSpin 2.4s linear infinite;
}

.music-control.playing .music-icon::before {
    content: "♫";

    position: absolute;

    color: var(--rose-dark);

    font-family: var(--serif);

    font-size: 27px;
    font-weight: 600;

    line-height: 1;

    transform: none;
}

.music-control.playing .music-icon::after {
    display: none;
}


/*
   Efek lingkaran lembut ketika musik sedang berjalan.
*/

.music-control.playing {
    border-color: rgba(189, 119, 123, 0.45);

    animation:
        musicPulse 2s ease-in-out infinite;
}


/* ============================================================
   MUSIC NOTE ROTATION
   ============================================================ */

@keyframes musicNoteSpin {

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

}


/* ============================================================
   MUSIC BUTTON PULSE
   ============================================================ */

@keyframes musicPulse {

    0%,
    100% {
        box-shadow:
            0 8px 25px rgba(48, 51, 45, 0.15);
    }

    50% {
        box-shadow:
            0 8px 30px rgba(189, 119, 123, 0.28);
    }

}


/* ============================================================
   MOBILE MUSIC CONTROL
   ============================================================ */

@media (max-width: 600px) {

    .music-control {
        width: 46px;
        height: 46px;

        right: 16px;
        bottom: 75px;
    }

    .music-icon {
        width: 25px;
        height: 25px;
    }

    .music-icon::before {
        font-size: 21px;
    }

    .music-icon::after {
        width: 23px;
    }

    .music-control.playing .music-icon {
        width: 26px;
        height: 26px;
    }

    .music-control.playing .music-icon::before {
        font-size: 23px;
    }
}


/* ============================================================
   COUPLE
   ============================================================ */

.couple-wrapper {
    width: min(900px, 100%);
    margin: auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 45px;
}

.person {
    text-align: center;
}

.person-image {
    width: 230px;
    height: 300px;
    margin: auto;
    overflow: hidden;
    border: 7px solid white;
    border-radius: 120px 120px 8px 8px;
    box-shadow: var(--shadow);
}

.person-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.person-label {
    margin-top: 22px;
    color: var(--gold);
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.person h3 {
    margin-top: 3px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 2.1rem;
    font-weight: 600;
}

.person-family {
    margin-top: 7px;
    color: var(--muted);
    font-family: var(--serif);
    font-size: 1.05rem;
    line-height: 1.5;
}

.couple-heart {
    width: 70px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--rose);
    border-radius: 50%;

    color: var(--rose-dark);

    font-family: var(--serif);
    font-size: 2rem;
}


/* ============================================================
   QUOTE / DOA
   ============================================================ */

.quote-section {
    position: relative;
    text-align: center;
}

.quote-decoration {
    margin-bottom: 15px;
    color: var(--rose);
    font-size: 1.5rem;
}

.quote-content {
    width: min(750px, 100%);
    margin: auto;
}

.quote-intro {
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: clamp(1.7rem, 4vw, 2.5rem);
    font-style: italic;
    line-height: 1.35;
}

.quote-line {
    width: 70px;
    height: 1px;
    margin: 25px auto;
    background: var(--gold);
}

.quote-source {
    color: var(--gold);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1.5px;
}


/* ============================================================
   COUNTDOWN
   ============================================================ */

.countdown-wrapper {
    width: min(850px, calc(100% - 40px));
    margin: 30px auto 0;
    padding-top: 50px;
    border-top: 1px solid var(--border);
}

.countdown-heading {
    margin-bottom: 30px;
    text-align: center;
}

.countdown {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: var(--gold-light);
    border: 1px solid var(--gold-light);
}

.count-item {
    min-width: 0;
    padding: 30px 10px;
    text-align: center;
    background: var(--paper);
}

.count-item strong {
    display: block;
    color: var(--rose-dark);
    font-family: var(--serif);
    font-size: clamp(2.8rem, 6vw, 4.5rem);
    font-weight: 500;
    line-height: 1;
}

.count-item span {
    display: block;
    margin-top: 8px;
    color: var(--sage-deep);
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 1.5px;
}


/* ============================================================
   EVENTS
   ============================================================ */

.events-wrapper {
    width: min(1050px, 100%);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
}

.event {
    padding: 45px 40px;
    text-align: center;
    background: var(--paper);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
}

.event-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--gold);
    font-size: 0.65rem;
    letter-spacing: 2px;
    font-weight: 600;
}

.event-top span {
    font-family: var(--serif);
    font-size: 1.5rem;
    font-weight: 400;
}

.event-flower {
    margin-top: 25px;
    color: var(--rose);
    font-size: 1.3rem;
}

.event h3 {
    margin-top: 8px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 2.2rem;
    font-weight: 600;
}

.event-detail {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.event-detail > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.detail-label {
    color: var(--gold);
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.event-detail strong {
    color: var(--ink);
    font-family: var(--serif);
    font-size: 1.2rem;
    font-weight: 600;
}

.event-detail p {
    margin-top: 3px;
    color: var(--muted);
    font-size: 0.73rem;
    line-height: 1.7;
}

.event-actions {
    width: min(100%, 360px);
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.event-button {
    flex: 1;
    min-width: 0;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 12px;
    border: 1px solid var(--sage-deep);
    border-radius: 20px;
    background: var(--sage-deep);
    color: white;
    font-family: var(--sans);
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.6px;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    transition: 0.25s ease;
}

.event-button:hover {
    background: var(--rose-dark);
    border-color: var(--rose-dark);
    transform: translateY(-2px);
}


/* ============================================================
   LOCATION / MAP
   ============================================================ */

.map-slider {
    width: min(900px, calc(100% - 40px));
    margin: 35px auto 0;
    position: relative;
    overflow: hidden;
}

.map-track {
    display: flex;
    width: 100%;
    transition: transform 0.55s ease;
    will-change: transform;
}

.map-slide {
    min-width: 100%;
    padding: 10px 45px 55px;
}

.map-card {
    padding: 22px;
    background: var(--paper);
    border: 1px solid var(--border);
    border-radius: 24px;
    box-shadow: 0 18px 45px rgba(60, 70, 50, 0.10);
}

.map-title {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 20px;
}

.map-number {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gold-light);
    border-radius: 50%;
    color: var(--rose);
    font-family: var(--serif);
    font-size: 1.5rem;
}

.map-title small {
    display: block;
    margin-bottom: 4px;
    color: var(--sage-dark);
    font-size: 0.65rem;
    letter-spacing: 0.18em;
}

.map-title h3 {
    margin: 0;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 1.75rem;
}

.map-title p {
    margin: 5px 0 0;
    color: var(--muted);
    font-size: 0.82rem;
    line-height: 1.6;
}

.map-frame {
    overflow: hidden;
    border: 6px solid white;
    border-radius: 18px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}

.map-frame iframe {
    display: block;
    width: 100%;
    height: 360px;
    border: 0;
}

.map-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    padding: 13px 20px;
    border: 1px solid var(--sage-dark);
    border-radius: 30px;
    background: transparent;
    color: var(--sage-deep);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: 0.25s ease;
}

.map-button:hover {
    background: var(--sage-deep);
    color: white;
    transform: translateY(-2px);
}

.slider-arrow,
.map-arrow {
    position: absolute;
    top: 50%;
    z-index: 5;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 2rem;
    cursor: pointer;
    transform: translateY(-50%);
    transition: 0.25s ease;
}

.slider-prev,
.map-prev {
    left: 8px;
}

.slider-next,
.map-next {
    right: 8px;
}

.slider-arrow:hover,
.map-arrow:hover {
    background: var(--sage-deep);
    color: white;
    transform: translateY(-50%) scale(1.05);
}

.slider-dots,
.map-dots {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
}

.slider-dot,
.map-dot {
    width: 8px;
    height: 8px;
    padding: 0;
    border: 0;
    border-radius: 20px;
    background: #c9c9c9;
    cursor: pointer;
    transition: width 0.3s ease, background 0.3s ease;
}

.slider-dot.active,
.map-dot.active {
    width: 26px;
    background: var(--rose);
}


/* ============================================================
   LIVE STREAMING
   ============================================================ */

.live-section {
    position: relative;
    width: 100%;
    padding: 100px 7%;
    background: var(--cream);
    text-align: center;
    overflow: hidden;
}

.live-wrapper {
    width: min(900px, 100%);
    margin: 0 auto;
}

.live-card {
    position: relative;
    width: 100%;
    padding: 25px;
    background: var(--paper);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
}

.live-status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 18px;
    padding: 6px 14px;
    border: 1px solid rgba(184, 117, 125, .25);
    border-radius: 30px;
    color: var(--rose-dark);
    font-size: .65rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: rgba(242, 223, 224, .45);
}

.live-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--rose-dark);
    animation: livePulse 1.4s infinite;
}

@keyframes livePulse {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: .35;
        transform: scale(.75);
    }
}

.live-frame {
    position: relative;
    width: 100%;
    overflow: hidden;
    border: 6px solid white;
    background: #1f211e;
    box-shadow: 0 10px 28px rgba(0, 0, 0, .08);
    aspect-ratio: 16 / 9;
}

.live-frame iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
}

.live-content {
    width: min(650px, 100%);
    margin: 25px auto 0;
    text-align: center;
}

.live-content h3 {
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 1.8rem;
    font-weight: 600;
}

.live-content p {
    margin-top: 10px;
    color: var(--muted);
    font-size: .75rem;
    line-height: 1.8;
}

.live-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 190px;
    margin-top: 20px;
    padding: 12px 22px;
    border: 1px solid var(--sage-deep);
    border-radius: 25px;
    background: var(--sage-deep);
    color: white;
    font-size: .65rem;
    font-weight: 600;
    letter-spacing: .8px;
    text-transform: uppercase;
    transition: .25s ease;
}

.live-button:hover {
    background: var(--rose-dark);
    border-color: var(--rose-dark);
    transform: translateY(-2px);
}


/* ============================================================
   LOVE STORY
   ============================================================ */

.story {
    width: min(1000px, 100%);
    margin: auto;
    position: relative;
}

.story::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--gold-light);
    transform: translateX(-50%);
}

.story-item {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 70px 1fr;
    align-items: center;
    min-height: 300px;
}

.story-year {
    padding: 20px;
    color: var(--rose-dark);
    font-family: var(--serif);
    font-size: 2.5rem;
    text-align: right;
}

.story-item:nth-child(even) .story-year {
    grid-column: 3;
    text-align: left;
}

.story-dot {
    grid-column: 2;
    grid-row: 1;
    width: 18px;
    height: 18px;
    margin: auto;
    background: var(--paper);
    border: 2px solid var(--rose);
    border-radius: 50%;
    z-index: 2;
}

.story-content {
    padding: 25px;
}

.story-item:nth-child(even) .story-content {
    grid-column: 1;
    grid-row: 1;
    text-align: right;
}

.story-image {
    width: 220px;
    height: 270px;
    overflow: hidden;
    margin-bottom: 18px;
    border: 6px solid white;
    box-shadow: var(--shadow);
}

.story-item:nth-child(odd) .story-image {
    margin-left: auto;
}

.story-item:nth-child(even) .story-image {
    margin-left: 0;
}

.story-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.story-image:hover img {
    transform: scale(1.05);
}

.story-label {
    color: var(--gold);
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 2px;
}

.story-content h3 {
    margin-top: 5px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 1.9rem;
}

.story-content p {
    margin-top: 7px;
    color: var(--muted);
    font-size: 0.75rem;
    line-height: 1.8;
}


/* ============================================================
   VIDEO
   ============================================================ */

.video-section {
    position: relative;
    width: 100%;
    background: var(--cream);
    text-align: center;
}

.video-wrapper {
    width: min(900px, calc(100% - 40px));
    margin: 0 auto;
}

.video-card {
    position: relative;
    width: 100%;
    padding: 25px 45px;
    background: var(--paper);
    border: 1px solid var(--border);
    border-radius: 24px;
    box-shadow: 0 18px 45px rgba(60, 70, 50, 0.10);
}

.video-frame {
    overflow: hidden;
    border: 6px solid white;
    border-radius: 18px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}

.wedding-video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    object-fit: cover;
    background: #1f211e;
}

.video-caption {
    width: min(600px, 100%);
    margin: 22px auto 0;
    padding: 0 10px;
    color: var(--muted);
    font-family: var(--serif);
    font-size: 1.05rem;
    font-style: italic;
    line-height: 1.7;
    text-align: center;
}


/* ============================================================
   GALLERY
   ============================================================ */

.gallery-section {
    position: relative;
    width: 100%;
    padding: 70px 7% 100px;
    background: var(--cream);
    overflow: hidden;
}

.gallery-heading {
    margin-top: 0;
    margin-bottom: 45px;
}

.gallery-slider-wrapper {
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
}

.gallery-grid {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 0 10px;
}

.gallery-item {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--paper);
    border: 6px solid white;
    box-shadow: 0 12px 30px rgba(80, 65, 55, 0.10);
    cursor: pointer;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.gallery-item::after {
    content: "";
    position: absolute;
    inset: 5px;
    z-index: 2;
    border: 1px solid rgba(185, 147, 88, 0.28);
    pointer-events: none;
    transition: 0.35s ease;
}

.gallery-item img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease, filter 0.4s ease;
}

.gallery-item:hover {
    transform: translateY(-5px) rotate(0deg);
    box-shadow: 0 18px 40px rgba(80, 65, 55, 0.15);
}

.gallery-item:hover img {
    transform: scale(1.06);
}

.gallery-item:hover::after {
    inset: 8px;
    border-color: rgba(217, 160, 165, 0.55);
}

.gallery-item:nth-child(1) {
    transform: rotate(-1deg);
}

.gallery-item:nth-child(2) {
    transform: rotate(0.7deg);
}

.gallery-item:nth-child(3) {
    transform: rotate(-0.5deg);
}

.gallery-item:nth-child(4) {
    transform: rotate(0.8deg);
}

.gallery-item:nth-child(5) {
    transform: rotate(-0.7deg);
}

.gallery-item:nth-child(6) {
    transform: rotate(1deg);
}

.gallery-item:nth-child(1):hover,
.gallery-item:nth-child(2):hover,
.gallery-item:nth-child(3):hover,
.gallery-item:nth-child(4):hover,
.gallery-item:nth-child(5):hover,
.gallery-item:nth-child(6):hover {
    transform: translateY(-5px) rotate(0deg);
}

.gallery-modal {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px;
    background: rgba(20, 20, 20, 0.90);
    backdrop-filter: blur(8px);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.gallery-modal.active {
    opacity: 1;
    visibility: visible;
}

.gallery-modal-content {
    position: relative;
    width: auto;
    max-width: min(1000px, 90vw);
    max-height: 90vh;
    padding: 8px;
    background: white;
    border: none;
    border-radius: 8px;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.gallery-modal-content img {
    display: block;
    width: auto;
    height: auto;
    max-width: calc(90vw - 16px);
    max-height: calc(90vh - 16px);
    object-fit: contain;
    border-radius: 3px;
}

.gallery-modal-close {
    position: absolute;
    top: -48px;
    right: 0;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: white;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    transition: transform 0.2s ease, color 0.2s ease;
}

.gallery-modal-close:hover {
    color: var(--rose-light);
    transform: scale(1.1);
}

.gallery-arrow,
.gallery-dots {
    display: none;
}


/* ============================================================
   PRAYER
   ============================================================ */

.prayer-card {
    width: min(900px, 100%);
    margin: auto;
    padding: 55px 50px;
    text-align: center;
    background: var(--paper);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
}

.arabic {
    color: var(--sage-deep);
    font-family: "Times New Roman", serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    line-height: 2;
    direction: rtl;
}

.prayer-divider {
    margin: 20px 0;
    color: var(--rose);
    font-size: 1.1rem;
}

.translation {
    color: var(--muted);
    font-family: var(--serif);
    font-size: 1.35rem;
    font-style: italic;
    line-height: 1.5;
}

.prayer-source {
    margin-top: 15px;
    color: var(--gold);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1px;
}


/* ============================================================
   GIFT / AMPLOP DIGITAL & KIRIM KADO
   ============================================================ */

.gift-intro {
    width: min(600px, 100%);
    margin: -25px auto 40px;
    color: var(--muted);
    font-size: 0.75rem;
    line-height: 1.9;
    text-align: center;
}

.gift-wrapper {
    width: min(800px, 100%);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
    align-items: stretch;
}

.gift-card {
    padding: 35px 25px;
    text-align: center;
    background: var(--paper);
    border: 1px solid var(--border);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.gift-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(80, 102, 81, 0.08);
}

.gift-icon {
    width: 42px;
    height: 42px;
    margin: 32px auto 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--gold);
    border-radius: 50%;

    color: var(--rose-dark);
    font-family: var(--serif);
    font-size: 1.5rem;
}

.gift-bank {
    margin: 0 0 15px;
    color: var(--gold);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 2px;
}

.gift-account {
    margin: 15px 0 8px;
    color: var(--rose-dark);
    font-family: var(--serif);
    font-size: 2rem;
    letter-spacing: 2px;
    overflow-wrap: anywhere;
}

.gift-name {
    margin: 0;
    color: var(--muted);
    font-size: 0.75rem;
}

.gift-button {
    margin-top: 22px;
    padding: 11px 18px;
    border: 1px solid var(--sage-deep);
    border-radius: 15px;
    background: transparent;
    color: var(--sage-deep);
    cursor: pointer;
    font-family: inherit;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: 0.25s ease;
}

.gift-button:hover {
    background: var(--sage-deep);
    color: white;
}

/* Detail penerima kado */

.gift-delivery-card {
    text-align: left;
}

.gift-delivery-card .gift-icon,
.gift-delivery-card .gift-bank {
    text-align: center;
}

.gift-detail {
    margin-top: 18px;
    padding-bottom: 13px;
    border-bottom: 1px solid var(--border);
}

.gift-detail:last-of-type {
    border-bottom: none;
}

.gift-label {
    display: block;
    margin-bottom: 6px;
    color: var(--gold);
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.gift-value {
    margin: 0;
    color: var(--sage-deep);
    font-size: 0.78rem;
    line-height: 1.8;
    overflow-wrap: anywhere;
}

.gift-address {
    white-space: normal;
}

.gift-delivery-card .gift-button {
    display: block;
    margin: 22px auto 0;
}

/* Tampilan HP */

@media (max-width: 600px) {
    .gift-intro {
        margin: -15px auto 28px;
        padding: 0 8px;
        font-size: 0.72rem;
    }

    .gift-wrapper {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .gift-card {
        padding: 28px 22px;
    }

    .gift-account {
        font-size: 1.7rem;
    }

    .gift-delivery-card {
        text-align: left;
    }
}

@media (prefers-reduced-motion: reduce) {
    .gift-card,
    .gift-button {
        transition: none;
    }

    .gift-card:hover {
        transform: none;
    }
}



/* ============================================================
   RSVP & GUESTBOOK — FINAL RESPONSIVE DESIGN
   Tema: Rustic Floral — Cream, Sage, Rose, Gold
   ============================================================ */

/* ------------------------------------------------------------
   1. CONTAINER UTAMA
   ------------------------------------------------------------ */

.rsvp-container {
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
    gap: 28px;
}

/* ------------------------------------------------------------
   2. BOX UTAMA
   Kedua box sejajar dengan tinggi konsisten di desktop
   ------------------------------------------------------------ */

.rsvp-box {
    width: 100%;
    height: 540px;
    min-width: 0;
    min-height: 0;
    padding: 30px 26px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;

    background: var(--paper);
    border: 1px solid var(--border);
    border-radius: 0;
    box-shadow: var(--shadow);
}

/* ------------------------------------------------------------
   3. JUDUL BOX
   ------------------------------------------------------------ */

.rsvp-box-heading {
    flex-shrink: 0;
    margin: 0 0 22px;
    text-align: center;
}

.rsvp-box-icon {
    width: 42px;
    height: 42px;
    margin: 0 auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    border: 1px solid var(--gold-light);
    border-radius: 50%;
    color: var(--rose-dark);
    font-family: var(--serif);
    font-size: 1.45rem;
}

.rsvp-box-heading h3 {
    margin: 0;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.3;
    overflow-wrap: anywhere;
}

.rsvp-box-heading p {
    max-width: 340px;
    margin: 8px auto 0;
    color: var(--muted);
    font-family: var(--sans);
    font-size: 0.74rem;
    font-weight: 400;
    line-height: 1.75;
}

/* ------------------------------------------------------------
   4. FORM RSVP
   ------------------------------------------------------------ */

.rsvp-form-box .rsvp-form {
    width: 100%;
    max-width: none;
    min-height: 0;
    margin: 0;
    padding: 0;

    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0;

    background: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;

    box-sizing: border-box;
}

.rsvp-form-box .form-group {
    width: 100%;
    min-width: 0;
    margin: 0 0 15px;
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.rsvp-form-box .rsvp-form label {
    color: var(--sage-deep);
    font-family: var(--sans);
    font-size: 0.74rem;
    font-weight: 600;
    line-height: 1.5;
}

.rsvp-form-box .rsvp-form input,
.rsvp-form-box .rsvp-form select,
.rsvp-form-box .rsvp-form textarea {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    padding: 11px 13px;
    box-sizing: border-box;

    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--border);
    border-radius: 0;
    outline: none;

    font-family: var(--sans);
    font-size: 0.78rem;
    font-weight: 400;
    line-height: 1.6;

    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.rsvp-form-box .rsvp-form input,
.rsvp-form-box .rsvp-form select {
    min-height: 44px;
}

.rsvp-form-box .rsvp-form textarea {
    min-height: 90px;
    flex: 1;
    resize: vertical;
}

.rsvp-form-box .rsvp-form input::placeholder,
.rsvp-form-box .rsvp-form textarea::placeholder {
    color: var(--muted);
    opacity: 0.75;
}

.rsvp-form-box .rsvp-form input:focus,
.rsvp-form-box .rsvp-form select:focus,
.rsvp-form-box .rsvp-form textarea:focus {
    border-color: var(--sage-dark);
    background: #fffdf9;
    box-shadow: 0 0 0 3px rgba(112, 131, 111, 0.1);
}

/* ------------------------------------------------------------
   5. TOMBOL KIRIM
   ------------------------------------------------------------ */

.rsvp-form-box .rsvp-button {
    width: 100%;
    min-height: 44px;
    flex-shrink: 0;
    margin-top: auto;
    padding: 11px 18px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    border: 1px solid var(--sage-deep);
    border-radius: 24px;
    background: var(--sage-deep);
    color: white;

    font-family: var(--sans);
    font-size: 0.67rem;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;

    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
}

.rsvp-form-box .rsvp-button:hover {
    background: var(--rose-dark);
    border-color: var(--rose-dark);
}

.rsvp-form-box .rsvp-button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
}

/* Pesan status formulir */

.rsvp-form-box .form-status {
    flex-shrink: 0;
    margin: 9px 0 0;
    color: var(--muted);
    font-family: var(--sans);
    font-size: 0.72rem;
    line-height: 1.6;
    overflow-wrap: anywhere;
}

/* ------------------------------------------------------------
   6. BOX RIWAYAT UCAPAN
   ------------------------------------------------------------ */

.guestbook-box {
    min-height: 0;
}

.guestbook-box .rsvp-box-heading {
    margin-bottom: 16px;
}

/* Area daftar ucapan mengambil ruang tersisa */

.guestbook-scroll-container {
    width: 100%;
    min-width: 0;
    min-height: 0;
    flex: 1;

    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;

    padding: 2px 8px 2px 2px;
    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: var(--sage-dark) var(--cream-dark);
}

.guestbook-scroll-container::-webkit-scrollbar {
    width: 5px;
}

.guestbook-scroll-container::-webkit-scrollbar-track {
    background: var(--cream-dark);
    border-radius: 10px;
}

.guestbook-scroll-container::-webkit-scrollbar-thumb {
    background: var(--sage-dark);
    border-radius: 10px;
}

/* Daftar ucapan */

.guestbook-scroll-container #guestbookHistory,
#guestbookHistory {
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 12px;

    box-sizing: border-box;
}

/* ------------------------------------------------------------
   7. KARTU UCAPAN TAMU
   ------------------------------------------------------------ */

#guestbookHistory .guestbook-message {
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 17px;
    flex-shrink: 0;

    background: var(--paper);
    border: 1px solid var(--border);
    border-radius: 0;
    box-shadow: none;

    overflow-wrap: anywhere;
    box-sizing: border-box;

    transition: border-color 0.2s ease;
}

#guestbookHistory .guestbook-message:hover {
    border-color: var(--gold-light);
}

#guestbookHistory .guestbook-message h3 {
    margin: 0 0 7px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
    overflow-wrap: anywhere;
}

#guestbookHistory .guestbook-message p {
    margin: 0 0 8px;
    color: var(--muted);
    font-family: var(--sans);
    font-size: 0.73rem;
    font-weight: 400;
    line-height: 1.75;

    white-space: pre-wrap;
    overflow-wrap: anywhere;
}

#guestbookHistory .guestbook-message p:last-of-type {
    margin-bottom: 0;
}

#guestbookHistory .guestbook-message small {
    display: block;
    margin-top: 11px;
    padding-top: 9px;

    color: var(--gold);
    border-top: 1px solid var(--border);

    font-family: var(--sans);
    font-size: 0.63rem;
    line-height: 1.6;
    overflow-wrap: anywhere;
}

/* Pesan kosong atau status loading */

#guestbookHistory:empty {
    display: none;
}

.guestbook-scroll-container #guestbookHistory > p,
#guestbookHistory > p {
    margin: 0;
    padding: 20px 10px;

    color: var(--muted);
    font-family: var(--serif);
    font-size: 0.95rem;
    font-style: italic;
    line-height: 1.8;
    text-align: center;

    overflow-wrap: anywhere;
}

/* ------------------------------------------------------------
   8. TOMBOL MUAT UCAPAN BERIKUTNYA
   ------------------------------------------------------------ */

.guestbook-box #loadMoreMessages,
#loadMoreMessages {
    width: 100%;
    max-width: 240px;
    min-height: 41px;
    flex-shrink: 0;
    margin: 13px auto 0;
    padding: 10px 15px;

    display: block;
    box-sizing: border-box;

    color: var(--sage-deep);
    background: transparent;
    border: 1px solid var(--sage-deep);
    border-radius: 24px;

    font-family: var(--sans);
    font-size: 0.66rem;
    font-weight: 600;
    letter-spacing: 0.4px;

    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
}

#loadMoreMessages:hover {
    color: white;
    background: var(--sage-deep);
}

#loadMoreMessages[hidden] {
    display: none !important;
}

/* ------------------------------------------------------------
   9. TABLET
   ------------------------------------------------------------ */

@media (min-width: 769px) and (max-width: 1000px) {
    .rsvp-container {
        gap: 18px;
    }

    .rsvp-box {
        height: 550px;
        padding: 26px 20px;
    }

    .rsvp-box-heading h3 {
        font-size: 1.65rem;
    }

    .rsvp-form-box .form-group {
        margin-bottom: 13px;
    }

    #guestbookHistory .guestbook-message {
        padding: 14px;
    }
}

/* ------------------------------------------------------------
   10. MOBILE
   ------------------------------------------------------------ */

@media (max-width: 768px) {
    .rsvp-container {
        grid-template-columns: minmax(0, 1fr);
        gap: 20px;
    }

    .rsvp-box {
        height: auto;
        min-height: 0;
        padding: 27px 23px;
        overflow: visible;
    }

    .rsvp-box-heading {
        margin-bottom: 21px;
    }

    .rsvp-box-heading h3 {
        font-size: 1.8rem;
    }

    .rsvp-form-box .rsvp-form {
        flex: initial;
    }

    .rsvp-form-box .rsvp-form textarea {
        min-height: 115px;
        flex: initial;
    }

    .rsvp-form-box .rsvp-button {
        margin-top: 3px;
    }

    .guestbook-box {
        height: 470px;
        overflow: hidden;
    }

    .guestbook-box .rsvp-box-heading {
        margin-bottom: 15px;
    }

    .guestbook-scroll-container {
        flex: 1;
        min-height: 0;
        max-height: none;
    }

    .guestbook-box #loadMoreMessages {
        margin-top: 12px;
    }
}

/* ------------------------------------------------------------
   11. SMALL MOBILE
   ------------------------------------------------------------ */

@media (max-width: 480px) {
    .rsvp-container {
        gap: 17px;
    }

    .rsvp-box {
        padding: 23px 17px;
    }

    .rsvp-box-heading {
        margin-bottom: 19px;
    }

    .rsvp-box-icon {
        width: 39px;
        height: 39px;
        margin-bottom: 11px;
    }

    .rsvp-box-heading h3 {
        font-size: 1.6rem;
    }

    .rsvp-box-heading p {
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .rsvp-form-box .form-group {
        margin-bottom: 15px;
        gap: 7px;
    }

    .rsvp-form-box .rsvp-form label {
        font-size: 0.73rem;
    }

    .rsvp-form-box .rsvp-form input,
    .rsvp-form-box .rsvp-form select,
    .rsvp-form-box .rsvp-form textarea {
        padding: 11px 12px;
        font-size: 16px;
    }

    .rsvp-form-box .rsvp-form textarea {
        min-height: 110px;
    }

    .rsvp-form-box .rsvp-button {
        min-height: 45px;
        font-size: 0.65rem;
    }

    .guestbook-box {
        height: 430px;
        padding: 22px 17px;
    }

    .guestbook-scroll-container {
        padding-right: 6px;
    }

    .guestbook-scroll-container #guestbookHistory,
    #guestbookHistory {
        gap: 10px;
    }

    #guestbookHistory .guestbook-message {
        padding: 14px 12px;
    }

    #guestbookHistory .guestbook-message h3 {
        font-size: 1.15rem;
    }

    #guestbookHistory .guestbook-message p {
        font-size: 0.72rem;
        line-height: 1.7;
    }

    #guestbookHistory .guestbook-message small {
        font-size: 0.62rem;
    }

    .guestbook-box #loadMoreMessages,
    #loadMoreMessages {
        max-width: 100%;
        min-height: 41px;
        font-size: 0.65rem;
    }
}

/* ------------------------------------------------------------
   12. AKSESIBILITAS
   ------------------------------------------------------------ */

@media (prefers-reduced-motion: reduce) {
    .rsvp-form-box .rsvp-form input,
    .rsvp-form-box .rsvp-form select,
    .rsvp-form-box .rsvp-form textarea,
    .rsvp-form-box .rsvp-button,
    #guestbookHistory .guestbook-message,
    #loadMoreMessages {
        transition: none;
    }
}



/* ============================================================
   FOOTER
   ============================================================ */

.footer {
    position: relative;
    padding: 70px 20px 90px;
    text-align: center;
    background: var(--cream-dark);
}

.footer > * {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.footer-flower {
    color: var(--rose);
    font-size: 1.5rem;
}

.footer-small {
    margin-top: 12px;
    color: var(--gold);
    font-family: var(--serif);
    font-size: 1.2rem;
    font-style: italic;
}

.footer h2 {
    margin-top: 2px;
    color: var(--sage-deep);
    font-family: var(--serif);
    font-size: 3rem;
    font-weight: 500;
}

.footer p {
    color: var(--muted);
    font-size: 0.7rem;
}

.footer-line {
    width: 70px;
    height: 1px;
    margin: 20px auto;
    background: var(--gold-light);
}

.footer small {
    color: var(--muted);
    font-size: 0.62rem;
}


/* ============================================================
   MOBILE NAV
   ============================================================ */

.mobile-nav {
    display: none;
}


/* ============================================================
   TABLET RESPONSIVE
   ============================================================ */

@media (max-width: 900px) {

    .nav-links {
        gap: 16px;
    }

    .nav-links a {
        font-size: 0.6rem;
    }

    .section {
        padding: 90px 5%;
    }

    .couple-wrapper {
        gap: 20px;
    }

    .person-image {
        width: 200px;
        height: 270px;
    }

    .events-wrapper {
        gap: 20px;
    }

    .event {
        padding: 35px 25px;
    }

    .gallery-section {
        padding-left: 5%;
        padding-right: 5%;
    }

    .gallery-grid {
        gap: 18px;
    }
}


/* ============================================================
   MOBILE RESPONSIVE
   ============================================================ */

@media (max-width: 700px) {

    body {
        padding-bottom: 65px;
    }

    .site-header {
        display: none;
    }

    .section,
    .quote-section,
    .countdown-section,
    .couple-section,
    .story-section,
    .events-section,
    .gallery-section,
    .prayer-section,
    .location-section,
    .gift-section,
    .rsvp-section,
    .video-section {
        width: 100%;
        min-height: auto;
        display: block;
        padding: 58px 20px;
    }

    .section-heading {
        width: 100%;
        margin-bottom: 25px;
    }

    .section-heading p {
        margin-top: 10px;
        line-height: 1.65;
    }

    .section-eyebrow {
        font-size: 1.2rem;
    }

    .section-heading h2 {
        font-size: 2.4rem;
    }

    .couple-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .couple-heart {
        width: 55px;
        height: 55px;
        margin: 0 auto;
        font-size: 1.6rem;
        transform: rotate(90deg);
    }

    .person-image {
        width: 180px;
        height: 240px;
    }

    .person h3 {
        font-size: 1.8rem;
    }

    .countdown-wrapper {
        width: 100%;
        max-width: 360px;
        margin: 18px auto 0;
        padding-top: 25px;
    }

    .countdown {
        grid-template-columns: repeat(2, 1fr);
        gap: 1px;
    }

    .count-item {
        padding: 22px 6px;
    }

    .count-item strong {
        font-size: 2.5rem;
    }

    .count-item span {
        font-size: 0.55rem;
    }

    .events-wrapper {
        width: 100%;
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .event {
        padding: 32px 24px;
    }

    .event-actions {
        flex-direction: column;
        gap: 8px;
    }

    .event-detail {
        margin-top: 22px;
        gap: 17px;
    }

    .event-button {
        width: 100%;
    }

    .gallery-slide,
    .map-slide {
        padding: 5px 25px 35px;
    }

    .gallery-card,
    .map-card,
    .video-card {
        padding: 6px;
        border-radius: 11px;
    }

    .map-frame iframe {
        height: 280px;
    }

    .slider-arrow,
    .map-arrow {
        width: 36px;
        height: 36px;
        font-size: 1.5rem;
    }

    .slider-prev,
    .map-prev {
        left: -5px;
    }

    .slider-next,
    .map-next {
        right: -5px;
    }

    .story::before {
        left: 20px;
        transform: none;
    }

    .story-item,
    .story-item:nth-child(even) {
        grid-template-columns: 40px 1fr;
        grid-template-rows: auto auto;
        gap: 10px;
        min-height: 0;
        margin-bottom: 25px;
    }

    .story-dot {
        grid-column: 1;
        grid-row: 1;
        margin: 5px 0 0 11px;
    }

    .story-year,
    .story-item:nth-child(even) .story-year {
        grid-column: 2;
        grid-row: 1;
        padding: 0;
        text-align: left;
        font-size: 1.8rem;
    }

    .story-content,
    .story-item:nth-child(even) .story-content {
        grid-column: 2;
        grid-row: 2;
        padding: 18px 10px;
        text-align: left;
    }

    .story-image,
    .story-item:nth-child(odd) .story-image,
    .story-item:nth-child(even) .story-image {
        width: 100%;
        max-width: 280px;
        height: 200px;
        margin: 12px 0;
    }

    .gift-wrapper {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .gift-card {
        padding: 30px 20px;
    }

    .rsvp-form {
        padding: 25px 20px;
    }

    .prayer-card {
        padding: 35px 20px;
    }

    .arabic {
        font-size: 1.35rem;
    }

    .translation,
    .quote-intro {
        font-size: 1.15rem;
    }

    .video-section {
        padding: 52px 10px 58px;
    }

    .video-wrapper {
        width: 100%;
        max-width: none;
    }

    .video-card {
        width: 100%;
        padding: 0;
        border-radius: 12px;
    }

    .video-frame {
        width: 100%;
        border-width: 4px;
        border-radius: 12px;
    }

    .wedding-video {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
    }

    .video-caption {
        width: 100%;
        margin-top: 14px;
        padding: 0 10px;
        text-align: center;
        font-size: 0.95rem;
    }

    .gallery-section {
        padding: 52px 20px 58px;
    }

    .gallery-heading {
        margin-top: 20px;
    }

    .gallery-slider-wrapper {
        width: 100%;
        overflow: hidden;
        padding-bottom: 25px;
    }

    .gallery-grid.gallery-track {
        display: flex;
        width: 100%;
        gap: 0;
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .gallery-item.gallery-slide {
        min-width: 100%;
        flex-shrink: 0;
        aspect-ratio: auto;
        padding: 0 5px;
        border: none;
        box-shadow: none;
        transform: none !important;
        background: transparent;
    }

    .gallery-item.gallery-slide img {
        display: block;
        width: 100%;
        height: 360px;
        object-fit: cover;
        border-radius: 12px;
        border: 6px solid white;
        box-shadow: 0 12px 30px rgba(80, 65, 55, 0.12);
    }

    .gallery-item.gallery-slide::after {
        display: none;
    }

    .gallery-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        width: 38px;
        height: 38px;
        transform: translateY(-50%);
        border: 1px solid rgba(185, 147, 88, 0.25);
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.92);
        color: var(--sage-deep);
        font-family: var(--serif);
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 5;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
        transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
    }

    .gallery-prev {
        left: 10px;
    }

    .gallery-next {
        right: 10px;
    }

    .gallery-arrow:hover {
        background: var(--sage-deep);
        color: white;
        transform: translateY(-50%) scale(1.05);
    }

    .gallery-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-top: 15px;
    }

    .gallery-dot {
        width: 8px;
        height: 8px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: #ccc;
        cursor: pointer;
        transition: width 0.3s ease, background 0.3s ease;
    }

    .gallery-dot.active {
        width: 22px;
        border-radius: 5px;
        background: var(--rose);
    }

    .gallery-modal {
        padding: 20px;
    }

    .gallery-modal-content {
        width: 100%;
        max-width: 95vw;
        max-height: 85vh;
        padding: 6px;
        border-radius: 8px;
    }

    .gallery-modal-content img {
        width: auto;
        max-width: calc(95vw - 12px);
        max-height: calc(80vh - 12px);
        object-fit: contain;
        border-radius: 4px;
    }

    .gallery-modal-close {
        top: -42px;
        right: 0;
        font-size: 1.8rem;
    }

    .live-section {
        padding: 80px 10px 90px;
    }

    .live-wrapper {
        width: 100%;
    }

    .live-card {
        width: 100%;
        padding: 15px;
        border-radius: 14px;
    }

    .live-status {
        margin-bottom: 14px;
        font-size: .58rem;
    }

    .live-frame {
        width: 100%;
        border-width: 4px;
        border-radius: 10px;
    }

    .live-content {
        width: 100%;
        padding: 0 5px;
    }

    .live-content h3 {
        font-size: 1.5rem;
    }

    .live-content p {
        font-size: .68rem;
    }

    .live-button {
        width: 100%;
        max-width: 250px;
    }
}


/* ============================================================
   SMALL MOBILE
   ============================================================ */

@media (max-width: 400px) {

    .opening-card {
        padding: 45px 20px 35px;
    }

    .opening-card h1 {
        font-size: 3.2rem;
    }

    .hero-names {
        font-size: 3.8rem;
    }

    .gallery-section {
        padding-left: 15px;
        padding-right: 15px;
    }

    .gallery-item.gallery-slide img {
        height: 320px;
    }

    .gallery-arrow {
        width: 34px;
        height: 34px;
        font-size: 1.3rem;
    }

    .gallery-prev {
        left: 7px;
    }

    .gallery-next {
        right: 7px;
    }
}

/* =========================================================
   FLOATING NAVBAR — MOBILE
   ========================================================= */

.mobile-nav {
    display: none;
}

@media (max-width: 768px) {
    .mobile-nav {
        position: fixed;
        left: 50%;
        bottom: calc(18px + env(safe-area-inset-bottom));
        transform: translateX(-50%);
        z-index: 2000;

        width: calc(100% - 32px);
        max-width: 420px;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 4px;

        padding: 9px 8px;

        background: rgba(255, 253, 249, 0.96);
        border: 1px solid rgba(185, 147, 88, 0.25);
        border-radius: 24px;

        box-shadow: 0 8px 28px rgba(70, 55, 45, 0.16);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
    }

    .mobile-nav a {
        flex: 1;
        min-width: 0;
        min-height: 48px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;

        color: var(--muted);
        text-decoration: none;
        border-radius: 16px;

        transition:
            color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
    }

    .mobile-nav a span {
        font-family: var(--serif);
        font-size: 1.25rem;
        line-height: 1;
    }

    .mobile-nav a small {
        font-family: var(--sans, sans-serif);
        font-size: 0.58rem;
        line-height: 1.2;
        white-space: nowrap;
    }

    .mobile-nav a.active {
        color: var(--sage-deep);
        background: rgba(223, 232, 223, 0.75);
    }

    .mobile-nav a:hover {
        color: var(--rose-dark);
    }

    .mobile-nav a:active {
        transform: scale(0.94);
    }

    /* Beri ruang agar navbar tidak menutupi konten terakhir */
    body {
        padding-bottom: 95px;
    }

    /* Sembunyikan navbar desktop di HP jika diperlukan */
    .site-header .nav-links {
        display: none;
    }
}




https://lh3.googleusercontent.com/gg/AJWXcNfYMmRBAK0UnEhmUJAPbpHqYdN5yCFwK76Lyzc9MB1xLzTSJ_G-BsiTr4TQQg5VaGu2lz2jhMjJgEmR3dSuHzo7M4TSjotMOXOoKQUb0nMd3GYO89x1yOXM_DVFYaETk70nGo05UXshfzOx8uurvTBDkunAxiTpYvBhpypmyBmwR2yivWkbA_nM7Lrt27ijWMIquWegICET3p4NtlhYr15MzknNcTXS8bKTT2ALBdfGpubsM3GC3Li8wtglqbaQnTdkhaf_klujlLOtHmw86fefmWMoPg0YlPfwhq9DrPVl4vmKjS2MrcLb-Ebc_-mHlhJu5IheHYTqwCP6O_xwPCes=s1600
https://lh3.googleusercontent.com/gg/AJWXcNdQ26HLX5KM5Lf87Fue4XXxPyv8DrVhc2ghRn3Mlyz_vQusVNw1XcW-Iv4KF2Z29-H2XMptKO0vCmeX2t0jNBKxz_NQ2bW6CY7fUzgc4yoTkOpZKUD6FU23rO7XbgNgeUUYBcFqK9eaqsG7A9jb8FWB2sOEa7gSFUacbvgT1TFdf9J9rsTss_f3Wd6XSBEoV9ezCcCCaPI5TbsISi-6ueta7muvh-lLebujPsjN-Kih5Am9WOhPkcnpIhiX92wt-z6D_4CbPJNM9OpR73EfDVRr7cgpkWV7HCIlQ88oxFRa642EJM5cYE5T3vJ_y-7U8zI0iV9ztC_hClA1k9T4aHvm=s1600
https://lh3.googleusercontent.com/gg/AJWXcNcUBdn-99ke6S_cT7kCwcZI71UZ8zIakTL16CY2rqWa8MDvYuqI8xN5D4sdPXeopAXMYIL3pVhEFX-SBmJh9CLuxCA37AO3XO6uz8UvN5ddnvhXrxFQa3kakx7lqkHUaxFULLDc3YkD6V3ziIBeVZC3o-qXvfk9XfPPiaaAm7QovngZXWwyWh0tUAxWQdpjszOnAdpZsbJXR28_YcbEL305p5vYUV9pd4akDMMEBLjVrkKFuYPtD4UM1pBYbS8x9-CWM8IqMTIiiHtYMlP4ED3KX5D9meuhz0iiBWZheNwcUXolh_qm4PNqqlcSqf_JFGLBqJ7Fy1Aykwh_JDR_Jlk=s1600
https://lh3.googleusercontent.com/gg/AJWXcNdM14qtDnepdRfwKcZOvE0U_Z_OTHHP-rGFgY1Ix4aLi4nvsN9lCgu4hWuW3U2rW92eM_aYJtCa9XnHxaTpnO3tbf1l3KipFUyNUPbK1RHP2cnUAas_uNOxO7xtRnF2N2s7_QZWE5O0Aq9u-IMgI4dw9QXu5k-MMm0BRdI7_e-AB1Da60g8yt-dX4UvpmglvhVMZiZZ2PQrUoXvMZsLLQ11vaYl-iBRvxKh8-sM-BTOnfuRm0lHErXjnhBxXhcGxVXQY-TMuHixveDqj_BnXiJelAJn1Eu3GjWsObwdnztkZp7yujolsTVwzECDjsX3yYQ1bJLx0OByhGGxqn2nP1_o=s1600
https://lh3.googleusercontent.com/gg/AJWXcNeM0bmYkTFwxwqPyRllqrxLz0HDXYH16cb9ON3p-zY9PuPdzvJwVov8h4EsOp-Gg4dTPJ_CkgCb44jINV7O2btVzkNmg02GDcRNwnmI7dEYNM1fCBsDLTBW2QrMm6ImhlXM2QRTNlkeeGQRR3NW4_4Qn9kWy81yT9wwHQAA_BDnU_I6CxEfBkZcIxrIKRvludoZQaSpxfT0CV0CY1EeiT867E44QZoyhEzacdAANpa0062zqZC_BQb9Xg_32v-u1sIGRd1gAGeotY84-kd1-y4Xsb2G4KW4uLgeT8euiSg_nzk6WBg30hJ2dKbiEk5ayRuoP9ZNOZXQFsmwnFLcyhGW=s1600
https://lh3.googleusercontent.com/gg/AJWXcNe_HZtrNT5PJGcLG1aAJnx9ImVvE8hS4OtYeT-SAEjEjxkk4z6vTSXdOP6f-Tyg8oA_8NR3P4UJoMgvbPXGyw9Y290vot6Q_mjrm96Bjco-tAFKkfYr15E9xiLFdkxzlP2vTCqvDTZXdP5vVDPqxp2_55DAo4c0bSiGf-RQvfTwoto7A9NAu68ABCcnfCXBsH1ij5EtWPUMg10W6akTlmQnGJHIGEdheJVAl7aIf5WVQ_wMIz6n0W2l_NXBU8Hd6CzBnIVKfHakbbSn7jAT3QHbc9G88nXHNxEr4Or4QNRVjGuSnt4mAdnXjI1O6R47eS-hTJDTVKvKdDEIdixckQ5b=s1600
https://lh3.googleusercontent.com/gg/AJWXcNdxoOpA60zMss0GRCsAECrgVhIqs_khstNzKr4FDPlJB-rMJoG3ABWmHEN78fl5mfj_6kpauNAUFasa0x4dZBmCvYRUFM5CQAhGG6Y2CMXVj8jvWHW764yOQV1bUxTru42Dy6fjah7vT1YiXh9mu3ZK8JhRX-TS3G8Z7VhqBiXjbjngTWKXNGVOcNRa8mCEglK4uP3wwlmfwNVnXAwSvP-82xDQkSOE9B8HhOofZg7KH9XZmvDCSphLM9NKnIGimu4ZHU6_XyndB4m5n0RZbKoPo_nbH-u2ZbeYu8an2idFbi8HZ32YEvvjXIDBuOhp_tRmSsDCz1fySWYbgeOCBzI=s1600
https://lh3.googleusercontent.com/gg/AJWXcNfnna3StdyWwZ91FV_UOVjUXtQo1HwT1OlpWM1tt7gYt2L_Ue8bA5eZ2lBmLJOb7-VV_DwRJUA7VYw30KkDzXprYhpKLVzmJQEHjSjzJhyZJx1_OAVNiEIVFd0zNJFWk11F81JABy-hsEXxxxhGMW2MtvgABjtvjYwR4fFaDCxRXWHtI4QXamWWEGJ0YDwxFKSjvdMaWBZm52D5PXy2vop0ygEdS3fFUSMwjaB45D1Olh7Zk8Fjp8hdckr5Lvc4uj4O-gUvnMuILoZFu43oaDenLvob3Pb_KBmEc4GhzviQIO6sYezL3sU1ZPFNtopAM_x7c6ppxI4dg62j43aDpm2_=s1600
https://lh3.googleusercontent.com/gg/AJWXcNfXR5LZn2dR4V9FpGe4BlTR1S_3ILyNs5B4pmT83Rnug8UMA6cpusNbf8PIWZiJkVEhcJcHJq4US6wCWi4vhMVilfvSeGtFzl32P_I4e61UadgZvUFDCo_tRh1ylLkwdZRWvxbQXZ-EAhsbH-KEjx_4EcQm_4NkI3jtec-o1B3NdXMaXI3wK-p1lmW7NxlRXOwSOrYRqzamV-ERoWJ8hTggHyVqFQHJh5EGh6_7QrNhjI0zGdrLIsSVLZeDd6pfb8v0k0pHLsa2PpD-lHzP-qDGN5hmx9v_xUxsJjj9xXpSPa_OJV335HOy7GgthbFzwtjfVVy1pKe4jAE-e6adiXM=s1600
https://lh3.googleusercontent.com/gg/AJWXcNdfNt6Xh17Y-ongEqTuLilf-CEl9OQHBjgh5_AnfQN80q_RK9YZpIfe-PoTot5Eb41ndds6B23Rb-ebvM3Cf0HMEoMhswcTgi3oyrLU9q3_D0nZy7cFh_rjMuSv3pKPZNz-WycB1Is0cVIK59L6Achp4fNEhJNaFPXHF7me54ovfy4MrC4ePrbV52LKfOeXL_cMlgf0Jcp2DNIxFAlqYVZDWKaxW3kCEQXHJ7w0Yv3eeD0qzrGn-40rJTSWsQA3FiKyUjg01_Ce76xPmf6sREzNUnxTJqKVYCnQLKosrk9Y2ddhUTSIXypl1e2z-WN22CxUNeBGRySnO83iNGXh8x2T=s1600
https://lh3.googleusercontent.com/gg/AJWXcNfHwbYFWW7nH4L-zZLYZh6ZUEW6QCmBSLbzh62E4U-yRzXXO1jw5UWCP8Q5IZXDAdRSIOwLR1UsDLLACyuQIWLe3caFszC4A7RiI6M8GlimU30_WWVUrLd5IrbqGevqKDyDonlzBZtkenaiORBhMvZgyLfzCuplzvHtxb7SX-rNoYAnv2f_Uiu8RIcYPhR6ZGNnBMasNnqLUQSLzZTiac8bf46PGC6wDzRRYr2VTizyOsN7hZET88HwVPsqGZvh4AFYlZPnPi3SML1vNa9O-dDvM7IjCeLptRHSdSnSONzs6NVYvnjQDQ4eg3uWSe4xtRUNdOHvpXp_Lag6jxEev-bE=s1600
https://lh3.googleusercontent.com/gg/AJWXcNeO7LNpQ4tdGK6GvmoirA7achkJ4ty68BR--Yl-boVvCcY22Gmfc7Xe_m8bVB-jv6tiHqmgRR8phSW0w5ale99k_r_h8nhL8Yfl1sguJwviOfOyD5MOgIJPEZmNxtlMN7lpyPEk4abythKGQPQCGn2URmkmrb_wuD_1gUXHrYanZYLZEEISmosbQW69jz9FCgwJLqIIEYisTuPgOEsjSIb45qKkM0ILeKd2ADwhhbxfdpVCvzWlRrDnqI-c6C3qeuT6bYHryYiC3j_6f6rXj1Bd_cXJHatubryUU-klEx2fDfvIC67SpETNi_HfK-qNJ6AbZYHrq9AHYQ8oT42llfSN=s1600
Python
import pypdf
reader = pypdf.PdfReader('extracted/rustic_floral-main/docs/PRD_Wedding_Invitation_Rustic_Floral.pdf')
for i, page in enumerate(reader.pages):
    print(f"--- PAGE {i+1} ---")
    print(page.extract_text())

Code output
--- PAGE 1 ---
PRODUCT REQUIREMENT DOCUMENT
Digital Wedding Invitation
RUSTIC FLORAL
Responsive Web • Mobile • Tablet • Desktop
1. Informasi Produk
Item Requirement / Detail
Nama Produk Digital Wedding Invitation — Rustic Floral
Platform Responsive Web — Mobile, Tablet, Desktop
Target Utama Tamu undangan pernikahan
Desain Rustic Floral, romantic, warm, elegant
Fokus UI/UX Visual storytelling, floral decoration, typography hierarchy,
responsive layout, dan kemudahan penggunaan
Primary Device Smartphone
Secondary Device Tablet dan Desktop
2. Latar Belakang
Produk merupakan undangan pernikahan digital berbasis web dengan konsep rustic floral yang
menggabungkan informasi acara, profil pasangan, lokasi, galeri foto, countdown, musik, digital gift,
serta buku ucapan dalam satu halaman interaktif.
Konsep Rustic Floral digunakan untuk memberikan kesan hangat, natural, romantis, dan intimate,
dengan penggunaan elemen bunga sebagai dekorasi visual tanpa membuat tampilan terlalu penuh.
Website tetap mengutamakan keterbacaan informasi dan kemudahan navigasi.
Tujuan
1. Memudahkan tamu mendapatkan informasi pernikahan.
2. Menampilkan informasi acara dengan visual yang menarik dan romantis.
3. Memberikan pengalaman undangan digital yang responsif.
4. Memudahkan tamu menemukan lokasi acara.
5. Memudahkan tamu menyimpan jadwal ke Google Calendar.
6. Menampilkan dokumentasi pasangan melalui galeri.
7. Menyediakan RSVP dan buku ucapan.
8. Menyediakan informasi digital gift.
3. Konsep Visual Rustic Floral
3.1 Visual Direction
 Rustic
--- PAGE 2 ---
 Floral
 Romantic
 Warm
 Elegant
 Natural
 Soft vintage
Elemen floral digunakan sebagai decorative accent, bukan sebagai elemen utama yang menutupi
konten.
3.2 Color Palette
Warna Penggunaan Contoh
Cream / Ivory Background utama #F7F3EC
Warm White Card dan content section #FBF9F4
Sage Green Aksen floral dan decorative
element #60765A
Dusty Rose Aksen romantis #BD777B
Muted Lavender Secondary accent #B7A9C7
Soft Gold Detail dekoratif #B79A68
Dark Brown / Deep Gray Heading dan body text #3F3A35
4. Typography
Elemen Font Penggunaan
Heading / Nama Cormorant Garamond Nama pasangan, judul section,
quote, ayat/doa
Body Text Montserrat Informasi acara, alamat, button,
form, navigation
 Nama pasangan menjadi visual hierarchy utama.
 Heading menggunakan serif.
 Body menggunakan sans-serif.
 Tidak menggunakan terlalu banyak jenis font.
 Ukuran font menyesuaikan breakpoint.
5. Target Pengguna
Kategori Detail
Primary User Tamu undangan yang mengakses website
melalui smartphone.
Secondary User Tamu yang menggunakan tablet atau desktop.
User Needs
Informasi cepat, navigasi sederhana, tampilan
nyaman, tombol mudah ditekan, informasi acara
jelas, akses lokasi mudah, dan RSVP sederhana.
--- PAGE 3 ---
6. Struktur Halaman
Opening / Cover → Hero → Navigation → Couple Profile → Wedding Schedule → Location → Add
to Calendar → Countdown → Our Memories / Gallery → Love Story → Doa & Harapan → Live
Streaming → Digital Gift → RSVP / Guest Book → Footer
7. Struktur & Fitur Produk
7.1 Opening / Cover
Decorative floral background, nama pasangan, The Wedding Invitation Of, nama tamu, tanggal
pernikahan, dan tombol Open Invitation. Setelah tombol ditekan, opening ditutup, musik dapat mulai
dimainkan jika diizinkan browser, dan pengguna masuk ke halaman utama.
7.2 Hero Section
Foto pasangan, nama pasangan, wedding date, short invitation message, floral decoration, dan rustic
background.
7.3 Navigation
Mempelai, Acara, Countdown, Kisah, Doa, Hadiah, RSVP. Mobile menggunakan hamburger/compact
navigation; desktop menggunakan horizontal navbar.
7.4 Couple Profile
Foto, nama lengkap, gelar jika diperlukan, deskripsi singkat, dan social media. Desktop dapat
menggunakan dua kolom; mobile vertical.
7.5 Wedding Schedule
Informasi akad dan resepsi: nama acara, hari/tanggal, waktu, venue, dan alamat. Visual menggunakan
timeline/card rustic floral.
7.6 Location
Nama venue, alamat lengkap, Google Maps preview, tombol Google Maps, dan tombol Waze.
7.7 Add to Calendar
Button Add to Google Calendar dengan event title, date, start/end time, location, dan description.
7.8 Countdown
Menampilkan days, hours, minutes, seconds menuju tanggal dan waktu pernikahan.
7.9 Background Music
Kontrol play/pause minimal dengan indikator musik yang tidak mengganggu konten.
7.10 Our Memories / Gallery
Gallery foto responsive berbasis grid dan lightbox untuk melihat foto dalam ukuran lebih besar.
--- PAGE 4 ---
7.11 Love Story
Timeline perjalanan pasangan, misalnya First Meet, First Date, Growing Together, The Proposal, dan
Our Wedding.
7.12 Doa & Harapan
Ayat, kutipan, doa pernikahan, dan harapan pasangan dengan typography serif dan decorative divider.
7.13 Live Streaming
Tanggal, waktu, platform, dan tombol Watch Live jika tersedia.
7.14 Digital Gift
Nama bank, nama pemilik rekening, nomor rekening, tombol copy, dan QRIS.
7.15 RSVP / Guest Book
Nama, status kehadiran, pesan/ucapan, submit, serta daftar ucapan.
7.16 Footer
Nama pasangan, tanggal pernikahan, ucapan terima kasih, dan decorative floral element.
8. Responsive Requirements
Device Requirement
Mobile
Baseline sekitar 390px; mobile-first; tidak
horizontal overflow; touch target nyaman; font
terbaca; foto proporsional; navigation sederhana.
Tablet Penyesuaian spacing, font, image size, grid, dan
card.
Desktop
Baseline sekitar 1440px; content tidak terlalu
melebar; whitespace lebih luas; gallery dan
couple profile memanfaatkan ruang secara
seimbang.
Spacing menggunakan sistem berbasis kelipatan 8px. Typography dan line-height menyesuaikan
breakpoint.
9. Functional Requirements
ID Requirement
FR-01 User dapat membuka undangan.
FR-02 User dapat melihat profil kedua mempelai.
FR-03 User dapat melihat jadwal acara.
FR-04 User dapat membuka lokasi melalui Google
Maps/Waze.
FR-05 User dapat menyimpan jadwal ke Google
Calendar.
FR-06 Countdown menampilkan waktu menuju acara.
FR-07 User dapat play/pause background music.
--- PAGE 5 ---
FR-08 User dapat melihat gallery.
FR-09 User dapat membuka foto dalam lightbox.
FR-10 User dapat mengakses live streaming.
FR-11 User dapat melihat rekening/QRIS.
FR-12 User dapat menyalin nomor rekening.
FR-13 User dapat mengisi RSVP.
FR-14 User dapat mengirim ucapan.
FR-15 User dapat melihat daftar ucapan.
10. Non-Functional Requirements
Aspek Requirement
Responsiveness Tampilan dapat digunakan dengan baik pada
mobile, tablet, dan desktop.
Usability Informasi utama dan CTA mudah ditemukan dan
dipahami.
Consistency Typography, spacing, button, card, form,
navigation, dan gallery konsisten.
Accessibility Kontras teks memadai dan elemen interaktif
memiliki area sentuh nyaman.
Performance Gambar/media dioptimalkan agar loading tetap
wajar.
Compatibility Diuji pada browser modern dan ukuran layar
utama.
11. User Flow
Flow 1 — Membuka Undangan
Opening → Open Invitation → Hero → Couple → Schedule → Location → Gallery → Love Story →
Doa → Digital Gift → RSVP → Footer
Flow 2 — Location
Location → Google Maps / Waze → External Navigation
Flow 3 — Calendar
Add to Calendar → Google Calendar → Event Details → Save
Flow 4 — RSVP
Guest Book → Name → Attendance → Message → Submit → Message Displayed
--- PAGE 6 ---
12. Design System
12.1 Decorative Elements
 Bunga
 Floral corner
 Thin gold line
 Botanical illustration
 Paper texture
 Vintage frame
 Small floral divider
12.2 Yang Dihindari
 Floral terlalu ramai
 Warna neon
 Gradient berat
 Shadow berlebihan
 Animasi berlebihan
 Terlalu banyak font
 Layout terlalu padat
13. Animation & Interaction
Animasi bersifat subtle untuk menjaga kesan elegan dan romantic.
 Fade in
 Fade up
 Soft scale
 Floral reveal
 Smooth scrolling
 Lightbox transition
 Countdown transition
Animasi seperti bounce, flash, rotation berlebihan, dan parallax berat tidak digunakan.
14. Acceptance Criteria
ID Acceptance Criteria
AC-01 Semua section utama tersedia.
AC-02 Tema visual konsisten dengan Rustic Floral.
AC-03 Website tidak mengalami horizontal overflow.
AC-04 Layout nyaman pada mobile, tablet, dan desktop.
AC-05 Navigation dapat berpindah ke section yang
sesuai.
--- PAGE 7 ---
AC-06 Google Maps/Waze dapat dibuka.
AC-07 Add to Calendar menghasilkan event dengan
data yang sesuai.
AC-08 Countdown menampilkan waktu yang benar.
AC-09 Gallery dapat menampilkan foto dengan baik.
AC-10 Lightbox dapat digunakan.
AC-11 Music dapat play/pause.
AC-12 Digital Gift menampilkan informasi
rekening/QRIS.
AC-13 Copy rekening dapat digunakan.
AC-14 RSVP dapat diisi dan dikirim.
AC-15 Guest Book dapat menampilkan ucapan.
AC-16 Tidak terdapat layout yang rusak pada
breakpoint utama.
15. Deliverables
Kategori Deliverables
UI/UX
Mobile wireframe, tablet wireframe, desktop
wireframe, high-fidelity design, responsive
design, design system, dan prototype.
Design System
Color palette, typography, spacing, grid, button,
card, form, navigation, gallery, dan decorative
floral elements.
Prototype Opening, Open Invitation, navigation, Location,
Calendar, Gallery, dan Guest Book.
16. Data yang Dibutuhkan Sebelum Implementasi
Kategori Data
Couple Nama lengkap pria/wanita, foto, gelar jika ada,
dan Instagram/social media.
Wedding Hari, tanggal, waktu akad, waktu resepsi, venue,
alamat, Google Maps link, Waze link.
Media Gallery photos, video jika tersedia, live
streaming link.
Digital Gift Nama bank, nomor rekening, nama pemilik
rekening, QRIS.
Guest Book RSVP system, database ucapan, attendance
status.
Music Music file/link dan artist/title jika diperlukan.
--- PAGE 8 ---
17. Prioritas Pengembangan
Priority Features
Priority 1 — Core
Opening, Hero, Couple Profile, Wedding
Schedule, Location, Navigation, Responsive
Layout.
Priority 2 — Interaction Countdown, Google Calendar, Gallery,
Lightbox, Background Music, Smooth Scroll.
Priority 3 — Additional Love Story, Doa & Harapan, Live Streaming,
Digital Gift, RSVP, Guest Book.

Python
import shutil
import os

# Hapus folder sementara hasil ekstraksi sebelumnya
if os.path.exists('extracted'):
    shutil.rmtree('extracted')

# 1. Buat file config.js
config_js_content = """/* ============================================================
   SKEMA DATA KONFIGURASI KLIEN TERSENTRALISASI (SINGLE SOURCE OF TRUTH)
   File: assets/js/config.js
   Minggu 10 — Template Tagging & Placeholder Variable
   ============================================================ */

const WEDDING_CONFIG = {
    // Metadata Dokumen & Identitas Singkat
    meta: {
        title: "Undangan Pernikahan — Andi & Sari",
        description: "Undangan Pernikahan Andi Prasetyo & Sari Wulandari",
        inisialPria: "A",
        inisialWanita: "S",
        namaPasangan: "Andi & Sari",
        tanggalSingkat: "21 Februari 2027"
    },

    // Konfigurasi Musik Latar
    musik: {
        src: "assets/music/wedding-song.mp3"
    },

    // Layar Pembuka (Opening Screen)
    opening: {
        label: "The Wedding Of",
        sapaan: "Kepada Yth.",
        tamuDefault: "Bapak/Ibu/Saudara/i",
        tanggal: "MINGGU, 21 FEBRUARI 2027",
        tombolBuka: "Buka Undangan"
    },

    // Bagian Hero / Sampul Utama
    hero: {
        eyebrow: "The Wedding Invitation Of",
        pesan: "Dengan penuh kebahagiaan, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.",
        hari: "MINGGU",
        tanggal: "21",
        bulan: "FEBRUARI",
        tahun: "2027"
    },

    // 1. Detail Mempelai Pria & Wanita
    mempelai: {
        pria: {
            label: "The Groom",
            namaPanggilan: "Andi",
            namaLengkap: "Andi Prasetyo, S.T.",
            silsilah: "Putra dari",
            orangTua: "Bapak H. Ahmad & Ibu Hj. Fatimah",
            foto: "assets/images/man.jpg",
            fotoAlt: "Andi Prasetyo, S.T."
        },
        wanita: {
            label: "The Bride",
            namaPanggilan: "Sari",
            namaLengkap: "Sari Wulandari, S.Pd.",
            silsilah: "Putri dari",
            orangTua: "Bapak H. Budi & Ibu Hj. Rahayu",
            foto: "assets/images/woman.jpg",
            fotoAlt: "Sari Wulandari, S.Pd."
        }
    },

    // 2 & 3. Detail Waktu, Lokasi Acara & Countdown
    acara: {
        tanggalCountdown: "2027-02-21T08:00:00+07:00",
        akad: {
            nomor: "01",
            label: "AKAD NIKAH",
            judul: "Akad Nikah",
            tanggal: "Minggu, 21 Februari 2027",
            waktu: "08.00 — 10.00 WIB",
            tempat: "Masjid Jami' Al-Ikhlas",
            alamat: "Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan",
            googleMapsUrl: "https://maps.google.com/?q=Masjid+Jami'+Al-Ikhlas+Jl.+Raya+Ragunan+No.+11A+Jati+Padang",
            embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7362024147047!2d106.8286915!3d-6.2983804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2307bdcdd03%3A0x6b9bfd3b48f654b1!2sMasjid%20Jami'%20Al-Ikhlas!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            ics: {
                uid: "andi-sari-wedding-2027@rezwanjaya.com",
                dtstamp: "20261021T000000Z",
                dtstart: "20270221T010000Z",
                dtend: "20270221T030000Z",
                summary: "Akad Nikah Andi & Sari",
                location: "Masjid Jami' Al-Ikhlas, Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan",
                description: "Akad Nikah Andi Prasetyo, S.T. & Sari Wulandari, S.Pd.",
                filename: "andi-sari-akad.ics"
            }
        },
        resepsi: {
            nomor: "02",
            label: "RESEPSI",
            judul: "Resepsi Pernikahan",
            tanggal: "Minggu, 21 Februari 2027",
            waktu: "14.00 — 16.00 WIB",
            tempat: "Gedung Pertemuan PERTAMINA",
            alamat: "Jl. Cemp. Putih Tengah XX B No. 20B, Kota Jakarta Pusat",
            googleMapsUrl: "https://maps.google.com/?q=Gedung+Pertemuan+PERTAMINA",
            embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2737668615796!2d106.8329618!3d-6.2275811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ebd03c9233%3A0x3344692eb3f57262!2sGedung%20Pertemuan%20Pertamina!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Andi+%26+Sari&dates=20270221T070000Z/20270221T090000Z&details=Resepsi+Pernikahan+Andi+Prasetyo+%26+Sari+Wulandari&location=Gedung+Pertemuan+PERTAMINA"
        }
    },

    // 4. Live Streaming
    live: {
        status: "LIVE",
        judul: "Saksikan Pernikahan Kami Secara Live",
        deskripsi: "Bagi keluarga dan sahabat yang tidak dapat hadir secara langsung, kami mengundang Anda untuk menyaksikan momen bahagia ini melalui live streaming.",
        embedUrl: "https://www.youtube.com/embed/YOUR_LIVE_VIDEO_ID",
        youtubeUrl: "https://www.youtube.com/",
        labelTombol: "Tonton di YouTube"
    },

    // 5. Kisah Cinta (Love Story)
    story: {
        kisah1: {
            nomor: "01",
            label: "AWAL PERTEMUAN",
            judul: "Pertama Bertemu",
            cerita: "Kami pertama kali bertemu di bangku kuliah saat mengikuti kegiatan organisasi kampus. Dari sebuah pertemuan sederhana, perlahan tumbuh cerita yang begitu berarti.",
            foto: "assets/images/story-1.jpg",
            alt: "Awal pertemuan Andi dan Sari"
        },
        kisah2: {
            nomor: "02",
            label: "KOMITMEN",
            judul: "Berkomitmen",
            cerita: "Setelah melalui berbagai cerita bersama, kami memutuskan untuk melangkah lebih jauh, saling mendukung dan tumbuh bersama.",
            foto: "assets/images/story-2.jpg",
            alt: "Kisah komitmen Andi dan Sari"
        },
        kisah3: {
            nomor: "03",
            label: "MENUJU PERNIKAHAN",
            judul: "Lamaran & Pernikahan",
            cerita: "Dengan restu kedua keluarga, kami memantapkan hati untuk mengikat janji suci dan memulai perjalanan baru sebagai satu keluarga.",
            foto: "assets/images/story-3.jpg",
            alt: "Lamaran Andi dan Sari"
        },
        kisah4: {
            nomor: "04",
            label: "PERNIKAHAN",
            judul: "Pernikahan",
            cerita: "Hari di mana janji suci diucapkan di hadapan Tuhan dan para saksi, mengawali kehidupan bahtera rumah tangga yang penuh kehangatan.",
            foto: "assets/images/story-4.jpg",
            alt: "Pernikahan Andi dan Sari"
        }
    },

    // 6. Galeri Foto & Video
    galeri: {
        videoEmbedUrl: "https://www.youtube.com/embed/CglBdEdY2T4",
        videoCaption: "Sebuah cerita, sebuah perjalanan, dan sebuah momen yang akan selalu kami kenang.",
        foto1: "assets/images/foto1.jpg",
        foto2: "assets/images/foto2.jpg",
        foto3: "assets/images/foto3.jpg",
        foto4: "assets/images/foto4.jpg",
        foto5: "assets/images/foto5.jpg",
        foto6: "assets/images/foto6.jpg"
    },

    // 7. Kutipan / Ayat Doa Pernikahan
    quote: {
        arab: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        kutipan: "“Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan yang menjadi penyejuk hati...”",
        sumber: "— QS. Al-Furqan: 74 —"
    },

    // 8. Informasi Rekening, QRIS & Pengiriman Kado
    amplop: {
        pengantar: "Doa restu Anda merupakan hadiah terindah. Namun jika ingin memberi hadiah, Anda dapat menggunakan fitur di bawah ini:",
        bank: "BANK BCA",
        noRek: "1234 5678 90",
        qrisUrl: "",
        rekening1: {
            bank: "BANK BCA",
            noRek: "1234 5678 90",
            atasNama: "a.n. Andi Prasetyo"
        },
        rekening2: {
            bank: "BANK BCA",
            noRek: "4567 5678 21",
            atasNama: "a.n. Sari Wulandari"
        },
        kado: {
            judul: "KIRIM KADO",
            penerima: "Andi Prasetyo",
            telepon: "0812-3456-7890",
            alamat: "Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan"
        }
    },

    // 9. Konfigurasi RSVP & Buku Tamu
    rsvp: {
        deskripsi: "Bagikan konfirmasi kehadiran serta doa terbaik untuk Andi & Sari.",
        scriptUrl: "https://script.google.com/macros/s/AKfycby0ijLbTlRvzkjtySPbHRTmf0CxJhSezpaPzvY8mIDeP53kLFg50IM91dqGvsj4U7befw/exec"
    },

    // 10. Footer
    footer: {
        salam: "With love",
        namaPasangan: "Andi & Sari",
        tanggal: "21 Februari 2027"
    }
};

// Pastikan objek konfigurasi tersedia pada global scope (window)
window.WEDDING_CONFIG = WEDDING_CONFIG;
"""

with open("config.js", "w", encoding="utf-8") as f:
    f.write(config_js_content)

# 2. Buat file index.html dengan Atribut Semantik data-template & Boundary Annotations
index_html_content = """<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" data-template-content="meta.description" content="Undangan Pernikahan Andi Prasetyo & Sari Wulandari">
    <title data-template="meta.title">Undangan Pernikahan — Andi & Sari</title>

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <div class="rustic-bg-ornaments">
        <div class="floral-corner floral-corner-left">
            <span class="leaf leaf-1">❧</span>
            <span class="leaf leaf-2">❦</span>
            <span class="flower flower-1">✿</span>
            <span class="flower flower-2">❀</span>
        </div>

        <div class="floral-corner floral-corner-right">
            <span class="leaf leaf-3">❧</span>
            <span class="leaf leaf-4">❦</span>
            <span class="flower flower-3">❁</span>
            <span class="flower flower-4">✿</span>
        </div>

        <div class="floating-botanical botanical-1">❦</div>
        <div class="floating-botanical botanical-2">❧</div>
        <div class="floating-botanical botanical-3">✿</div>
    </div>

    <!-- ============================================ -->
    <!-- TEMPLATE TAGGING BOUNDARY MARKER             -->
    <!-- AREA INI MENGGUNAKAN DYNAMIC INJECTION CONFIG -->
    <!-- ============================================ -->
    <div id="template-root">

        <!-- BACKGROUND MUSIC -->
        <audio id="weddingMusic" loop preload="auto">
            <source data-template-src="musik.src" src="assets/music/wedding-song.mp3" type="audio/mpeg">
            Browser Anda tidak mendukung audio HTML5.
        </audio>

        <!-- MUSIC CONTROL -->
        <button
            type="button"
            class="music-control"
            id="musicControl"
            aria-label="Putar musik"
            aria-pressed="false">
            <span class="music-icon">♫</span>
            <span class="music-waves">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </button>

        <!-- OPENING SCREEN -->
        <div class="opening-screen" id="openingScreen">
            <div class="opening-card dynamic-container">
                <div class="opening-floral">❀</div>
                <div class="opening-label" data-template="opening.label">The Wedding Of</div>
                <h1>
                    <span class="couple-first" data-template="mempelai.pria.namaPanggilan">Andi</span>
                    <span>&amp;</span>
                    <span class="couple-second" data-template="mempelai.wanita.namaPanggilan">Sari</span>
                </h1>
                <div class="opening-line"></div>
                <p class="opening-to">
                    <span data-template="opening.sapaan">Kepada Yth.</span><br>
                    <span id="guestNameDisplay" data-template="opening.tamuDefault">Bapak/Ibu/Saudara/i</span>
                </p>
                <div class="opening-date" data-template="opening.tanggal">MINGGU, 21 FEBRUARI 2027</div>
                <button type="button" class="open-button" id="openInvitation" data-template="opening.tombolBuka">Buka Undangan</button>
            </div>
        </div>

        <!-- HEADER -->
        <header class="site-header" id="siteHeader">
            <a href="#hero" class="brand">
                <b data-template="meta.inisialPria">A</b><span>&amp;</span><b data-template="meta.inisialWanita">S</b>
            </a>
            <nav class="nav-links">
                <a href="#couple">Mempelai</a>
                <a href="#events">Acara</a>
                <a href="#location">Lokasi</a>
                <a href="#countdown">Countdown</a>
                <a href="#story">Kisah</a>
                <a href="#gallery">Gallery</a>
                <a href="#wedding-quote">Doa</a>
                <a href="#gift">Hadiah</a>
                <a href="#rsvp">RSVP</a>
            </nav>
        </header>

        <main>

            <!-- HERO / COVER -->
            <section class="hero" id="hero" data-template-section="hero">
                <div class="hero-flower hero-flower-left">❀</div>
                <div class="hero-flower hero-flower-right">✿</div>
                <div class="hero-content dynamic-container">
                    <p class="hero-eyebrow" data-template="hero.eyebrow">The Wedding Invitation Of</p>
                    <h1 class="hero-names">
                        <strong class="hero-name-text" data-template="mempelai.pria.namaPanggilan">Andi</strong>
                        <span>&amp;</span>
                        <strong class="hero-name-text" data-template="mempelai.wanita.namaPanggilan">Sari</strong>
                    </h1>
                    <div class="hero-divider">
                        <span></span>❀<span></span>
                    </div>
                    <p class="hero-message" data-template="hero.pesan">
                        Dengan penuh kebahagiaan, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.
                    </p>
                    <div class="hero-date">
                        <span data-template="hero.hari">MINGGU</span>
                        <strong data-template="hero.tanggal">21</strong>
                        <span data-template="hero.bulan">FEBRUARI</span>
                        <span data-template="hero.tahun">2027</span>
                    </div>
                    <a href="#couple" class="scroll-down">
                        <span>Scroll untuk melihat undangan</span>
                        <b>↓</b>
                    </a>
                </div>
            </section>

            <!-- 1. MEMPELAI (#couple) -->
            <section class="section couple-section" id="couple" data-template-section="mempelai">
                <div class="section-heading">
                    <p class="section-eyebrow">Kami Yang Berbahagia</p>
                    <h2>Mempelai</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <div class="couple-wrapper dynamic-container">
                    <!-- Mempelai Pria -->
                    <div class="person">
                        <div class="person-image">
                            <!-- Injeksi Sumber Gambar -->
                            <img data-template-src="mempelai.pria.foto" data-template-alt="mempelai.pria.fotoAlt" src="assets/images/man.jpg" alt="Andi Prasetyo, S.T.">
                        </div>
                        <p class="person-label" data-template="mempelai.pria.label">The Groom</p>
                        <!-- Injeksi Teks -->
                        <h3 data-template="mempelai.pria.namaLengkap">Andi Prasetyo, S.T.</h3>
                        <p class="person-family">
                            <span data-template="mempelai.pria.silsilah">Putra dari</span><br>
                            <span data-template="mempelai.pria.orangTua">Bapak H. Ahmad &amp; Ibu Hj. Fatimah</span>
                        </p>
                    </div>

                    <div class="couple-heart"><span>♡</span></div>

                    <!-- Mempelai Wanita -->
                    <div class="person">
                        <div class="person-image">
                            <!-- Injeksi Sumber Gambar -->
                            <img data-template-src="mempelai.wanita.foto" data-template-alt="mempelai.wanita.fotoAlt" src="assets/images/woman.jpg" alt="Sari Wulandari, S.Pd.">
                        </div>
                        <p class="person-label" data-template="mempelai.wanita.label">The Bride</p>
                        <!-- Injeksi Teks -->
                        <h3 data-template="mempelai.wanita.namaLengkap">Sari Wulandari, S.Pd.</h3>
                        <p class="person-family">
                            <span data-template="mempelai.wanita.silsilah">Putri dari</span><br>
                            <span data-template="mempelai.wanita.orangTua">Bapak H. Budi &amp; Ibu Hj. Rahayu</span>
                        </p>
                    </div>
                </div>
            </section>

            <!-- 2. RANGKAIAN ACARA (#events) -->
            <section class="section events-section" id="events" data-template-section="acara">
                <div class="section-heading">
                    <p class="section-eyebrow">Rangkaian Pernikahan</p>
                    <h2>Acara Utama</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <div class="events-wrapper dynamic-container">
                    <!-- AKAD NIKAH -->
                    <article class="event" data-template-section="acara.akad">
                        <div class="event-top">
                            <span data-template="acara.akad.nomor">01</span>
                            <p data-template="acara.akad.label">AKAD NIKAH</p>
                        </div>
                        <div class="event-flower">❀</div>
                        <h3 data-template="acara.akad.judul">Akad Nikah</h3>
                        <div class="event-detail">
                            <div>
                                <span class="detail-label">Hari &amp; Tanggal</span>
                                <strong data-template="acara.akad.tanggal">Minggu, 21 Februari 2027</strong>
                            </div>
                            <div>
                                <span class="detail-label">Waktu</span>
                                <strong data-template="acara.akad.waktu">08.00 — 10.00 WIB</strong>
                            </div>
                            <div>
                                <span class="detail-label">Tempat</span>
                                <strong data-template="acara.akad.tempat">Masjid Jami' Al-Ikhlas</strong>
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;" data-template="acara.akad.alamat">
                                    Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan
                                </p>
                            </div>
                        </div>
                        <div class="event-actions" style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
                            <!-- Injeksi Tautan -->
                            <a data-template-href="acara.akad.googleMapsUrl" href="https://maps.google.com/?q=Masjid+Jami'+Al-Ikhlas+Jl.+Raya+Ragunan+No.+11A+Jati+Padang" target="_blank" rel="noopener noreferrer" class="event-button">🗺️ Lokasi Akad</a>
                            <button type="button" class="event-button" id="calendarButton">📅 Save The Date</button>
                        </div>
                    </article>

                    <!-- RESEPSI -->
                    <article class="event" data-template-section="acara.resepsi">
                        <div class="event-top">
                            <span data-template="acara.resepsi.nomor">02</span>
                            <p data-template="acara.resepsi.label">RESEPSI</p>
                        </div>
                        <div class="event-flower">❀</div>
                        <h3 data-template="acara.resepsi.judul">Resepsi Pernikahan</h3>
                        <div class="event-detail">
                            <div>
                                <span class="detail-label">Hari &amp; Tanggal</span>
                                <strong data-template="acara.resepsi.tanggal">Minggu, 21 Februari 2027</strong>
                            </div>
                            <div>
                                <span class="detail-label">Waktu</span>
                                <strong data-template="acara.resepsi.waktu">14.00 — 16.00 WIB</strong>
                            </div>
                            <div>
                                <span class="detail-label">Tempat</span>
                                <strong data-template="acara.resepsi.tempat">Gedung Pertemuan PERTAMINA</strong>
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;" data-template="acara.resepsi.alamat">
                                    Jl. Cemp. Putih Tengah XX B No. 20B, Kota Jakarta Pusat
                                </p>
                            </div>
                        </div>
                        <div class="event-actions" style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
                            <!-- Injeksi Tautan -->
                            <a data-template-href="acara.resepsi.googleMapsUrl" href="https://maps.google.com/?q=Gedung+Pertemuan+PERTAMINA" target="_blank" rel="noopener noreferrer" class="event-button">🗺️ Lokasi Resepsi</a>
                            <a data-template-href="acara.resepsi.calendarUrl" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Andi+%26+Sari&dates=20270221T070000Z/20270221T090000Z&details=Resepsi+Pernikahan+Andi+Prasetyo+%26+Sari+Wulandari&location=Gedung+Pertemuan+PERTAMINA" target="_blank" rel="noopener noreferrer" class="event-button">📅 Save The Date</a>
                        </div>
                    </article>
                </div>
            </section>

            <!-- 3. LOKASI & COUNTDOWN -->
            <section class="section location-section" id="location" data-template-section="acara">
                <div class="section-heading">
                    <p class="section-eyebrow">Lokasi Acara</p>
                    <h2>Peta Lokasi Acara</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <!-- MAP SLIDER -->
                <div class="map-slider dynamic-container" id="mapSlider">
                    <div class="map-track">
                        <!-- MAP AKAD -->
                        <div class="map-slide active">
                            <div class="map-card">
                                <div class="map-title">
                                    <span class="map-number" data-template="acara.akad.nomor">01</span>
                                    <div>
                                        <small data-template="acara.akad.label">AKAD NIKAH</small>
                                        <h3 data-template="acara.akad.tempat">Masjid Jami' Al-Ikhlas</h3>
                                        <p data-template="acara.akad.alamat">Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan</p>
                                    </div>
                                </div>
                                <div class="map-frame">
                                    <iframe
                                        data-template-src="acara.akad.embedMapUrl"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7362024147047!2d106.8286915!3d-6.2983804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2307bdcdd03%3A0x6b9bfd3b48f654b1!2sMasjid%20Jami&#39;%20Al-Ikhlas!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                                        width="100%"
                                        height="360"
                                        style="border:0;"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                                <a data-template-href="acara.akad.googleMapsUrl"
                                    href="https://maps.google.com/?q=Masjid+Jami'+Al-Ikhlas+Jl.+Raya+Ragunan+No.+11A+Jati+Padang"
                                    target="_blank" rel="noopener noreferrer" class="map-button">
                                    Buka Google Maps
                                </a>
                            </div>
                        </div>

                        <!-- MAP RESEPSI -->
                        <div class="map-slide">
                            <div class="map-card">
                                <div class="map-title">
                                    <span class="map-number" data-template="acara.resepsi.nomor">02</span>
                                    <div>
                                        <small data-template="acara.resepsi.label">RESEPSI</small>
                                        <h3 data-template="acara.resepsi.tempat">Gedung Pertemuan PERTAMINA</h3>
                                        <p data-template="acara.resepsi.alamat">Jl. Cemp. Putih Tengah XX B No. 20B, Kota Jakarta Pusat</p>
                                    </div>
                                </div>
                                <div class="map-frame">
                                    <iframe
                                        data-template-src="acara.resepsi.embedMapUrl"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2737668615796!2d106.8329618!3d-6.2275811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ebd03c9233%3A0x3344692eb3f57262!2sGedung%20Pertemuan%20Pertamina!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                                        width="100%"
                                        height="360"
                                        style="border:0;"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                                <a data-template-href="acara.resepsi.googleMapsUrl"
                                    href="https://maps.google.com/?q=Gedung+Pertemuan+PERTAMINA"
                                    target="_blank" rel="noopener noreferrer" class="map-button">
                                    Buka Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- TOMBOL SLIDER -->
                    <button type="button" class="map-arrow map-prev" id="mapPrev" aria-label="Lokasi sebelumnya">‹</button>
                    <button type="button" class="map-arrow map-next" id="mapNext" aria-label="Lokasi berikutnya">›</button>

                    <!-- DOT INDICATOR -->
                    <div class="map-dots">
                        <button type="button" class="map-dot active" data-slide="0" aria-label="Lihat lokasi akad"></button>
                        <button type="button" class="map-dot" data-slide="1" aria-label="Lihat lokasi resepsi"></button>
                    </div>
                </div>

                <!-- COUNTDOWN -->
                <div class="countdown-wrapper" id="countdown" data-template-section="acara.tanggalCountdown">
                    <div class="section-heading countdown-heading">
                        <p class="section-eyebrow">Menuju Hari Bahagia</p>
                        <h2>Countdown</h2>
                        <div class="heading-flower">✿</div>
                    </div>

                    <div class="countdown">
                        <div class="count-item">
                            <strong id="days">000</strong>
                            <span>HARI</span>
                        </div>
                        <div class="count-item">
                            <strong id="hours">00</strong>
                            <span>JAM</span>
                        </div>
                        <div class="count-item">
                            <strong id="minutes">00</strong>
                            <span>MENIT</span>
                        </div>
                        <div class="count-item">
                            <strong id="seconds">00</strong>
                            <span>DETIK</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 4. LIVE STREAMING -->
            <section class="section live-section" id="live" data-template-section="live.embedUrl">
                <div class="section-heading">
                    <p class="section-eyebrow">Saksikan Bersama</p>
                    <h2>Live Streaming</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <div class="live-wrapper dynamic-container">
                    <div class="live-card">
                        <div class="live-status">
                            <span class="live-dot"></span>
                            <span data-template="live.status">LIVE</span>
                        </div>

                        <div class="live-frame">
                            <iframe
                                data-template-src="live.embedUrl"
                                src="https://www.youtube.com/embed/YOUR_LIVE_VIDEO_ID"
                                title="Live Streaming Pernikahan"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>

                        <div class="live-content">
                            <h3 data-template="live.judul">Saksikan Pernikahan Kami Secara Live</h3>
                            <p data-template="live.deskripsi">
                                Bagi keluarga dan sahabat yang tidak dapat hadir secara langsung, kami mengundang Anda untuk menyaksikan momen bahagia ini melalui live streaming.
                            </p>
                            <a
                                data-template-href="live.youtubeUrl"
                                data-template="live.labelTombol"
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="live-button">
                                Tonton di YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 5. LOVE STORY -->
            <section class="section story-section" id="story" data-template-section="story">
                <div class="section-heading">
                    <p class="section-eyebrow">Kisah Kami</p>
                    <h2>Love Story</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <div class="story dynamic-container">
                    <div class="story-item" data-template-section="story.kisah1">
                        <div class="story-year" data-template="story.kisah1.nomor">01</div>
                        <div class="story-dot"></div>
                        <div class="story-content">
                            <div class="story-image">
                                <img data-template-src="story.kisah1.foto" data-template-alt="story.kisah1.alt" src="assets/images/story-1.jpg" alt="Awal pertemuan Andi dan Sari">
                            </div>
                            <div class="story-text">
                                <span class="story-label" data-template="story.kisah1.label">AWAL PERTEMUAN</span>
                                <h3 data-template="story.kisah1.judul">Pertama Bertemu</h3>
                                <p data-template="story.kisah1.cerita">
                                    Kami pertama kali bertemu di bangku kuliah saat mengikuti kegiatan organisasi kampus. Dari sebuah pertemuan sederhana, perlahan tumbuh cerita yang begitu berarti.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="story-item" data-template-section="story.kisah2">
                        <div class="story-year" data-template="story.kisah2.nomor">02</div>
                        <div class="story-dot"></div>
                        <div class="story-content">
                            <div class="story-image">
                                <img data-template-src="story.kisah2.foto" data-template-alt="story.kisah2.alt" src="assets/images/story-2.jpg" alt="Kisah komitmen Andi dan Sari">
                            </div>
                            <div class="story-text">
                                <span class="story-label" data-template="story.kisah2.label">KOMITMEN</span>
                                <h3 data-template="story.kisah2.judul">Berkomitmen</h3>
                                <p data-template="story.kisah2.cerita">
                                    Setelah melalui berbagai cerita bersama, kami memutuskan untuk melangkah lebih jauh, saling mendukung dan tumbuh bersama.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="story-item" data-template-section="story.kisah3">
                        <div class="story-year" data-template="story.kisah3.nomor">03</div>
                        <div class="story-dot"></div>
                        <div class="story-content">
                            <div class="story-image">
                                <img data-template-src="story.kisah3.foto" data-template-alt="story.kisah3.alt" src="assets/images/story-3.jpg" alt="Lamaran Andi dan Sari">
                            </div>
                            <div class="story-text">
                                <span class="story-label" data-template="story.kisah3.label">MENUJU PERNIKAHAN</span>
                                <h3 data-template="story.kisah3.judul">Lamaran &amp; Pernikahan</h3>
                                <p data-template="story.kisah3.cerita">
                                    Dengan restu kedua keluarga, kami memantapkan hati untuk mengikat janji suci dan memulai perjalanan baru sebagai satu keluarga.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="story-item" data-template-section="story.kisah4">
                        <div class="story-year" data-template="story.kisah4.nomor">04</div>
                        <div class="story-dot"></div>
                        <div class="story-content">
                            <div class="story-image">
                                <img data-template-src="story.kisah4.foto" data-template-alt="story.kisah4.alt" src="assets/images/story-4.jpg" alt="Pernikahan Andi dan Sari">
                            </div>
                            <div class="story-text">
                                <span class="story-label" data-template="story.kisah4.label">PERNIKAHAN</span>
                                <h3 data-template="story.kisah4.judul">Pernikahan</h3>
                                <p data-template="story.kisah4.cerita">
                                    Hari di mana janji suci diucapkan di hadapan Tuhan dan para saksi, mengawali kehidupan bahtera rumah tangga yang penuh kehangatan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 6. GALLERY & VIDEO -->
            <section class="section gallery-section" id="gallery" data-template-section="galeri">
                <div class="section-heading" data-template-section="galeri.videoEmbedUrl">
                    <p class="section-eyebrow">Our Moments</p>
                    <h2>Wedding Video</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <div class="video-wrapper dynamic-container" data-template-section="galeri.videoEmbedUrl">
                    <div class="video-card">
                        <iframe
                            class="wedding-video"
                            data-template-src="galeri.videoEmbedUrl"
                            src="https://www.youtube.com/embed/CglBdEdY2T4"
                            title="Wedding Video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <p class="video-caption" data-template="galeri.videoCaption">
                        Sebuah cerita, sebuah perjalanan, dan sebuah momen yang akan selalu kami kenang.
                    </p>
                </div>

                <div class="section-heading gallery-heading">
                    <p class="section-eyebrow">Memories</p>
                    <h2>Our Gallery</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <!-- CONTAINER GALERI (Desktop: Grid, Mobile: Slider) -->
                <div class="gallery-slider-wrapper dynamic-container" id="gallerySlider">
                    <div class="gallery-grid gallery-track">
                        <div class="gallery-item gallery-slide">
                            <img data-template-src="galeri.foto1" src="assets/images/foto1.jpg" alt="Foto Galeri 1">
                        </div>
                        <div class="gallery-item gallery-slide">
                            <img data-template-src="galeri.foto2" src="assets/images/foto2.jpg" alt="Foto Galeri 2">
                        </div>
                        <div class="gallery-item gallery-slide">
                            <img data-template-src="galeri.foto3" src="assets/images/foto3.jpg" alt="Foto Galeri 3">
                        </div>
                        <div class="gallery-item gallery-slide">
                            <img data-template-src="galeri.foto4" src="assets/images/foto4.jpg" alt="Foto Galeri 4">
                        </div>
                        <div class="gallery-item gallery-slide">
                            <img data-template-src="galeri.foto5" src="assets/images/foto5.jpg" alt="Foto Galeri 5">
                        </div>
                        <div class="gallery-item gallery-slide">
                            <img data-template-src="galeri.foto6" src="assets/images/foto6.jpg" alt="Foto Galeri 6">
                        </div>
                    </div>

                    <!-- Control Slider khusus Mobile -->
                    <button type="button" class="gallery-arrow gallery-prev" id="galleryPrev" aria-label="Foto sebelumnya">‹</button>
                    <button type="button" class="gallery-arrow gallery-next" id="galleryNext" aria-label="Foto berikutnya">›</button>

                    <div class="gallery-dots" id="galleryDots"></div>
                </div>

                <!-- Modal Lightbox Foto -->
                <div id="galleryModal" class="gallery-modal" aria-hidden="true">
                    <div class="gallery-modal-content">
                        <button type="button" class="gallery-modal-close" id="galleryModalClose">&times;</button>
                        <img id="galleryModalImg" src="" alt="Preview Photo">
                    </div>
                </div>
            </section>

            <!-- 7. DOA & HARAPAN (#wedding-quote) -->
            <section class="section prayer-section" id="wedding-quote" data-template-section="quote.kutipan">
                <div class="section-heading">
                    <p class="section-eyebrow">Doa &amp; Harapan</p>
                    <h2>Sebuah Doa Untuk Kami</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <div class="prayer-card dynamic-container">
                    <div class="arabic" data-template="quote.arab">
                        رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
                    </div>
                    <div class="prayer-divider">❀</div>
                    <div class="translation" data-template="quote.kutipan">
                        “Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan yang menjadi penyejuk hati...”
                    </div>
                    <div class="prayer-source" data-template="quote.sumber">— QS. Al-Furqan: 74 —</div>
                </div>
            </section>

            <!-- 8. AMPLOP DIGITAL / HADIAH (#gift) -->
            <section class="section gift-section" id="gift" data-template-section="amplop">
                <div class="section-heading">
                    <p class="section-eyebrow">Tanda Kasih</p>
                    <h2>Amplop Digital</h2>
                    <div class="heading-flower">✿</div>
                </div>

                <p class="gift-intro" data-template="amplop.pengantar">
                    Doa restu Anda merupakan hadiah terindah. Namun jika ingin memberi hadiah,
                    Anda dapat menggunakan fitur di bawah ini:
                </p>

                <div class="gift-wrapper dynamic-container">

                    <!-- KARTU REKENING BANK -->
                    <div class="gift-card">
                        <div data-template-section="amplop.rekening1.noRek">
                            <p class="gift-bank" data-template="amplop.rekening1.bank">BANK BCA</p>
                            <p class="gift-account" id="accountBCA" data-template="amplop.rekening1.noRek">1234 5678 90</p>
                            <p class="gift-name" data-template="amplop.rekening1.atasNama">a.n. Andi Prasetyo</p>
                            <button
                                type="button"
                                class="gift-button"
                                onclick="salinRekening('accountBCA')">
                                Salin Rekening
                            </button>
                        </div>

                        <div data-template-section="amplop.rekening2.noRek">
                            <div class="gift-icon">♡</div>
                            <p class="gift-bank" data-template="amplop.rekening2.bank">BANK BCA</p>
                            <p class="gift-account" id="accountBCA2" data-template="amplop.rekening2.noRek">4567 5678 21</p>
                            <p class="gift-name" data-template="amplop.rekening2.atasNama">a.n. Sari Wulandari</p>
                            <button
                                type="button"
                                class="gift-button"
                                onclick="salinRekening('accountBCA2')">
                                Salin Rekening
                            </button>
                        </div>
                    </div>

                    <!-- KARTU KIRIM KADO -->
                    <div class="gift-card gift-delivery-card" data-template-section="amplop.kado.alamat">
                        <div class="gift-icon">♡</div>
                        <p class="gift-bank" data-template="amplop.kado.judul">KIRIM KADO</p>

                        <div class="gift-detail">
                            <span class="gift-label">Nama Penerima</span>
                            <p class="gift-value" id="giftRecipient" data-template="amplop.kado.penerima">
                                Andi Prasetyo
                            </p>
                        </div>

                        <div class="gift-detail">
                            <span class="gift-label">Nomor HP</span>
                            <p class="gift-value" id="giftPhone" data-template="amplop.kado.telepon">
                                0812-3456-7890
                            </p>
                        </div>

                        <div class="gift-detail">
                            <span class="gift-label">Alamat Penerima</span>
                            <p class="gift-value gift-address" id="giftAddress" data-template="amplop.kado.alamat">
                                Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan
                            </p>
                        </div>

                        <button
                            type="button"
                            class="gift-button"
                            onclick="salinAlamatKado()">
                            Salin Alamat Kado
                        </button>
                    </div>

                </div>
            </section>

            <!-- 9. RSVP & KIRIM UCAPAN -->
            <section class="section rsvp-section" id="rsvp" data-template-section="rsvp">
                <div class="section-heading">
                    <p class="section-eyebrow">Kehadiran &amp; Doa</p>
                    <h2>RSVP &amp; Kirim Ucapan</h2>
                    <div class="heading-flower">✿</div>
                    <p data-template="rsvp.deskripsi">Bagikan konfirmasi kehadiran serta doa terbaik untuk Andi &amp; Sari.</p>
                </div>

                <!-- DUA BOX DALAM SATU SECTION -->
                <div class="rsvp-container">

                    <!-- BOX 1: FORM KIRIM UCAPAN -->
                    <div class="rsvp-box rsvp-form-box">
                        <div class="rsvp-box-heading">
                            <span class="rsvp-box-icon">♡</span>
                            <h3>Kirim Ucapan &amp; Doa</h3>
                            <p>Sampaikan doa dan harapan terbaik Anda.</p>
                        </div>

                        <form class="rsvp-form" id="rsvpForm">
                            <div class="form-group">
                                <label for="guestName">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="guestName"
                                    placeholder="Nama Lengkap Anda"
                                    required
                                >
                            </div>

                            <div class="form-group">
                                <label for="attendance">Konfirmasi Kehadiran</label>
                                <select id="attendance" required>
                                    <option value="">Pilih konfirmasi</option>
                                    <option value="Hadir">Hadir</option>
                                    <option value="Tidak Hadir">Tidak Hadir</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="message">Ucapan &amp; Doa</label>
                                <textarea
                                    id="message"
                                    placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" class="rsvp-button">
                                ♡ Kirim Ucapan
                            </button>

                            <p class="form-status" id="formStatus" aria-live="polite"></p>
                        </form>
                    </div>

                    <!-- BOX 2: RIWAYAT UCAPAN -->
                    <div class="rsvp-box guestbook-box" id="guestbook">
                        <div class="rsvp-box-heading">
                            <span class="rsvp-box-icon">❀</span>
                            <h3>Ucapan &amp; Doa dari Tamu</h3>
                            <p>Doa dan ucapan hangat dari keluarga serta sahabat.</p>
                        </div>

                        <!-- HANYA AREA INI YANG BISA DI-SCROLL -->
                        <div class="guestbook-scroll-container">
                            <div id="guestbookHistory" aria-live="polite">
                                <p>Memuat ucapan dan doa...</p>
                            </div>
                        </div>

                        <button type="button" id="loadMoreMessages" hidden>
                            Lihat Ucapan Lainnya
                        </button>
                    </div>

                </div>
            </section>

        </main>

        <footer class="footer">
            <div class="footer-flower">❀</div>
            <p class="footer-small" data-template="footer.salam">With love</p>
            <h2 data-template="footer.namaPasangan">Andi &amp; Sari</h2>
            <p data-template="footer.tanggal">21 Februari 2027</p>
        </footer>

    </div>
    <!-- ============================================ -->
    <!-- END TEMPLATE TAGGING BOUNDARY MARKER         -->
    <!-- ============================================ -->

    <!-- NAVBAR MOBILE -->
    <nav class="mobile-nav" aria-label="Navigasi undangan">
        <a href="#hero" class="active">
            <span>⌂</span>
            <small>Home</small>
        </a>
        <a href="#couple">
            <span>♡</span>
            <small>Mempelai</small>
        </a>
        <a href="#events">
            <span>♧</span>
            <small>Acara</small>
        </a>
        <a href="#gallery">
            <span>▧</span>
            <small>Galeri</small>
        </a>
        <a href="#gift">
            <span>♧</span>
            <small>Hadiah</small>
        </a>
    </nav>

    <!-- Muat Konfigurasi Data Klien Terpusat sebelum Mesin Templating & Script Utama -->
    <script src="assets/js/config.js"></script>
    <script src="assets/js/script.js"></script>
</body>

</html>
"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(index_html_content)

# 3. Buat file script.js yang memuat Mesin Injeksi Data (Templating Engine) & fitur interaktif
script_js_content = """/* ============================================================
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
            ].join("\\r\\n");

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

        const nomorRekening = accountElement.textContent.trim().replace(/\\s+/g, "");

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
            `Nama Penerima: ${nama}\\n` +
            `Nomor HP: ${hp}\\n` +
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
"""

with open("script.js", "w", encoding="utf-8") as f:
    f.write(script_js_content)

# 4. Buat file style.css dari file asli ditambah helper untuk fallback & elemen dinamis
import zipfile
with zipfile.ZipFile('rustic_floral-main (1).zip', 'r') as z:
    orig_css = z.read('rustic_floral-main/assets/css/style.css').decode('utf-8')

additional_css = """

/* =========================================================
   MINGGU 10 — TEMPLATE ENGINE & FALLBACK HANDLING HELPERS
   ========================================================= */

[hidden],
.is-empty-fallback {
    display: none !important;
}

.brand b {
    font-weight: 500;
}

.hero-names .hero-name-text {
    font-weight: 500;
    color: var(--sage-deep);
}
"""

with open("style.css", "w", encoding="utf-8") as f:
    f.write(orig_css + additional_css)

print("Semua 4 berkas berhasil dibuat.")

Code output
Semua 4 berkas berhasil dibuat.

Python
import re
import json

# Update index.html agar menggunakan <b class="couple-name-text"> pada h1 sehingga selector CSS `h1 span` hanya mengenai simbol `&`
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace(
    """                <h1>
                    <span class="couple-first" data-template="mempelai.pria.namaPanggilan">Andi</span>
                    <span>&amp;</span>
                    <span class="couple-second" data-template="mempelai.wanita.namaPanggilan">Sari</span>
                </h1>""",
    """                <h1>
                    <b class="couple-name-text" data-template="mempelai.pria.namaPanggilan">Andi</b>
                    <span>&amp;</span>
                    <b class="couple-name-text" data-template="mempelai.wanita.namaPanggilan">Sari</b>
                </h1>"""
)

html = html.replace(
    """                    <h1 class="hero-names">
                        <strong class="hero-name-text" data-template="mempelai.pria.namaPanggilan">Andi</strong>
                        <span>&amp;</span>
                        <strong class="hero-name-text" data-template="mempelai.wanita.namaPanggilan">Sari</strong>
                    </h1>""",
    """                    <h1 class="hero-names">
                        <b class="couple-name-text" data-template="mempelai.pria.namaPanggilan">Andi</b>
                        <span>&amp;</span>
                        <b class="couple-name-text" data-template="mempelai.wanita.namaPanggilan">Sari</b>
                    </h1>"""
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

css = css.replace(
    """.brand b {
    font-weight: 500;
}

.hero-names .hero-name-text {
    font-weight: 500;
    color: var(--sage-deep);
}""",
    """.brand b,
.couple-name-text {
    font-weight: inherit;
    color: inherit;
}"""
)

with open("style.css", "w", encoding="utf-8") as f:
    f.write(css)

# Verifikasi semua atribut data-template* pada index.html
attrs = re.findall(r'data-template(?:-[a-z]+)?="([^"]+)"', html)
print(f"Total atribut data-template* yang ditemukan di index.html: {len(attrs)}")
for a in sorted(set(attrs)):
    print(" -", a)

Code output
Total atribut data-template* yang ditemukan di index.html: 139
 - acara
 - acara.akad
 - acara.akad.alamat
 - acara.akad.embedMapUrl
 - acara.akad.googleMapsUrl
 - acara.akad.judul
 - acara.akad.label
 - acara.akad.nomor
 - acara.akad.tanggal
 - acara.akad.tempat
 - acara.akad.waktu
 - acara.resepsi
 - acara.resepsi.alamat
 - acara.resepsi.calendarUrl
 - acara.resepsi.embedMapUrl
 - acara.resepsi.googleMapsUrl
 - acara.resepsi.judul
 - acara.resepsi.label
 - acara.resepsi.nomor
 - acara.resepsi.tanggal
 - acara.resepsi.tempat
 - acara.resepsi.waktu
 - acara.tanggalCountdown
 - amplop
 - amplop.kado.alamat
 - amplop.kado.judul
 - amplop.kado.penerima
 - amplop.kado.telepon
 - amplop.pengantar
 - amplop.rekening1.atasNama
 - amplop.rekening1.bank
 - amplop.rekening1.noRek
 - amplop.rekening2.atasNama
 - amplop.rekening2.bank
 - amplop.rekening2.noRek
 - footer.namaPasangan
 - footer.salam
 - footer.tanggal
 - galeri
 - galeri.foto1
 - galeri.foto2
 - galeri.foto3
 - galeri.foto4
 - galeri.foto5
 - galeri.foto6
 - galeri.videoCaption
 - galeri.videoEmbedUrl
 - hero
 - hero.bulan
 - hero.eyebrow
 - hero.hari
 - hero.pesan
 - hero.tahun
 - hero.tanggal
 - live.deskripsi
 - live.embedUrl
 - live.judul
 - live.labelTombol
 - live.status
 - live.youtubeUrl
 - mempelai
 - mempelai.pria.foto
 - mempelai.pria.fotoAlt
 - mempelai.pria.label
 - mempelai.pria.namaLengkap
 - mempelai.pria.namaPanggilan
 - mempelai.pria.orangTua
 - mempelai.pria.silsilah
 - mempelai.wanita.foto
 - mempelai.wanita.fotoAlt
 - mempelai.wanita.label
 - mempelai.wanita.namaLengkap
 - mempelai.wanita.namaPanggilan
 - mempelai.wanita.orangTua
 - mempelai.wanita.silsilah
 - meta.description
 - meta.inisialPria
 - meta.inisialWanita
 - meta.title
 - musik.src
 - opening.label
 - opening.sapaan
 - opening.tamuDefault
 - opening.tanggal
 - opening.tombolBuka
 - quote.arab
 - quote.kutipan
 - quote.sumber
 - rsvp
 - rsvp.deskripsi
 - story
 - story.kisah1
 - story.kisah1.alt
 - story.kisah1.cerita
 - story.kisah1.foto
 - story.kisah1.judul
 - story.kisah1.label
 - story.kisah1.nomor
 - story.kisah2
 - story.kisah2.alt
 - story.kisah2.cerita
 - story.kisah2.foto
 - story.kisah2.judul
 - story.kisah2.label
 - story.kisah2.nomor
 - story.kisah3
 - story.kisah3.alt
 - story.kisah3.cerita
 - story.kisah3.foto
 - story.kisah3.judul
 - story.kisah3.label
 - story.kisah3.nomor
 - story.kisah4
 - story.kisah4.alt
 - story.kisah4.cerita
 - story.kisah4.foto
 - story.kisah4.judul
 - story.kisah4.label
 - story.kisah4.nomor

Berkas index.html, style.css, script.js, dan config.js Anda telah siap

HTML icon
index
 HTML 
CSS icon
style
 CSS 
JS icon
script
 JS 
JS icon
config
 JS 
Berikut adalah rincian penerapan ketiga konsep utama pada proyek Rustic Floral Wedding Invitation:   
ZIP

1. Skema Data Konfigurasi Klien Tersentralisasi (config.js)
Seluruh data statis yang sebelumnya tertanam (hardcoded) di dalam index.html dan script.js telah diekstraksi ke dalam objek WEDDING_CONFIG sebagai Single Source of Truth dan didaftarkan ke global scope (window.WEDDING_CONFIG):   
ZIP

meta & musik: Menyimpan judul halaman, deskripsi meta, inisial pasangan pada navbar (A & S), serta jalur berkas musik latar (assets/music/wedding-song.mp3).   
ZIP

opening & hero: Menyimpan label sambutan, nama tamu default, pesan undangan, dan rincian tanggal tampilan sampul.   
ZIP

mempelai: Memisahkan properti bersarang (nested object) untuk mempelai pria dan wanita yang mencakup nama panggilan, nama lengkap beserta gelar, silsilah keluarga, nama orang tua, dan jalur foto (assets/images/man.jpg & assets/images/woman.jpg).   
ZIP

acara: Memuat waktu target hitung mundur (tanggalCountdown) serta objek bersarang akad dan resepsi (nomor urut, judul, tanggal, waktu, nama tempat, alamat lengkap, tautan Google Maps, URL embed peta, tautan Google Calendar, hingga parameter kalender .ics).   
ZIP

live, story, galeri, quote, amplop, rsvp, & footer: Mengelompokkan tautan live streaming YouTube, 4 tahapan kisah cinta (Love Story), 6 foto galeri beserta video pernikahan, ayat doa pernikahan (QS. Al-Furqan: 74), rincian nomor rekening BCA kedua mempelai beserta alamat pengiriman kado, serta URL endpoint Google Apps Script untuk buku tamu.   
ZIP

2. Formulasi Pola Tagging Penanda Variabel (index.html)
Dokumen index.html telah dilengkapi penanda batas template (HTML Template Boundary Annotations) serta atribut semantik data-template* tanpa mengubah hierarki visual maupun class CSS bawaan:   
ZIP

Injeksi Teks (data-template): Digunakan pada elemen tipografi seperti <h3 data-template="mempelai.pria.namaLengkap">, <strong data-template="acara.akad.tanggal">, hingga <div class="translation" data-template="quote.kutipan">.   
ZIP

Injeksi Sumber Media (data-template-src): Diterapkan pada elemen <img data-template-src="mempelai.pria.foto">, <iframe data-template-src="acara.akad.embedMapUrl">, <iframe data-template-src="galeri.videoEmbedUrl">, dan <source data-template-src="musik.src">.   
ZIP

Injeksi Tautan (data-template-href): Diterapkan pada tombol aksi eksternal seperti <a data-template-href="acara.akad.googleMapsUrl"> dan <a data-template-href="acara.resepsi.calendarUrl">.   
ZIP

Penanda Seksi untuk Fallback (data-template-section): Ditambahkan pada kontainer seksi atau kartu (seperti data-template-section="live.embedUrl" dan data-template-section="amplop.kado.alamat") agar seksi otomatis disembunyikan apabila datanya dikosongkan pada config.js.

Perbaikan Struktural HTML: Memperbaiki tag penutup </section> ganda, duplikasi pembuka <section id="story">, duplikasi id="accountBCA" pada kartu rekening kedua (diubah menjadi id="accountBCA2"), serta menyesuaikan tautan navigasi mobile (#hero dan #events).   
ZIP

3. Konstruksi Mesin Injeksi Data JavaScript (script.js)
Pada bagian awal script.js, telah ditambahkan mesin templating berbasis Vanilla JavaScript yang dijalankan otomatis saat DOMContentLoaded:

Fungsi Helper getNestedValue(obj, path): Membaca properti objek bersarang menggunakan metode .split('.').reduce(...) untuk mengambil nilai dari window.WEDDING_CONFIG.

Fungsi runTemplateEngine():

Memverifikasi keberadaan window.WEDDING_CONFIG di global scope.

Memeriksa setiap elemen [data-template-section] menggunakan fungsi isEmptyConfigValue() dan menyembunyikan seksi secara otomatis (Fallback Value Handling) jika nilai konfigurasi kosong, null, atau false.

Memindai seluruh elemen [data-template], [data-template-src], [data-template-href], [data-template-alt], dan [data-template-content] untuk menyuntikkan data secara otomatis ke dalam DOM.

Mendukung parameter URL ?to=Nama+Tamu untuk menampilkan nama tamu undangan secara dinamis pada layar pembuka.

Integrasi Modul Interaktif: Fitur Countdown, pengunduhan kalender .ics (Save The Date), penyalinan masing-masing nomor rekening (salinRekening('accountBCA') & salinRekening('accountBCA2')), serta endpoint RSVP telah terhubung langsung dengan data pada WEDDING_CONFIG.   
ZIP

Penempatan Berkas pada Struktur Folder Proyek
Pastikan keempat berkas ditempatkan sesuai struktur direktori proyek berikut agar pemuatan aset berjalan lancar:   
ZIP

Plaintext
rustic_floral-main/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        ├── config.js
        └── script.js
Merancang Skema Data Konfigurasi Klien Tersentralisasi
Menyusun berkas konfigurasi terpisah (assets/js/config.js atau wedding-data.json) sebagai single source of truth yang menampung seluruh variabel dinamis klien (seperti data mempelai, waktu, lokasi, dan nomor rekening).

2. Formulasi Pola Tagging Penanda Variabel

Menerapkan sintaks penandaan variabel dinamis pada dokumen HTML5 menggunakan atribut semantik (seperti data-template, data-template-src, dan data-template-href) atau format Mustache-style.

3. Konstruksi Mesin Injeksi Data JavaScript

Mengembangkan fungsi templating engine mandiri berbasis Vanilla JS untuk memindai atribut semantik, membaca properti bersarang (nested properties), dan mengganti placeholder dengan data konfigurasi secara otomatis ke dalam DOM.

4. Pengelolaan Version Control & Dokumentasi Kendala

Mengelola riwayat commit repositori Git secara terstruktur sesuai standar Conventional Commits serta mendokumentasikan analisis kendala teknis beserta solusinya pada berkas README.



dari 4 ini, fungsi, kelebihan, kekurangan masing-masing penerapan ini apa?

Analisis fungsi, kelebihan, serta kekurangan dari keempat pilar penerapan pada modul Template Tagging & Placeholder Variable memetakan peran teknis setiap komponen beserta konsekuensi arsitekturnya:   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

1. Merancang Skema Data Konfigurasi Klien Tersentralisasi (config.js / wedding-data.json)
Fungsi Utama:

Bertindak sebagai Single Source of Truth (pusat data acuan tunggal) yang menampung seluruh variabel dinamis klien—meliputi profil mempelai, waktu dan lokasi acara, informasi rekening/QRIS, hingga kutipan doa—dalam satu berkas terpisah di luar dokumen HTML.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Kelebihan:

Efisiensi Produksi & Kustomisasi Massal: Pengelola toko cukup memperbarui satu berkas config.js untuk memperbarui seluruh isi halaman secara otomatis tanpa perlu mencari dan mengganti teks di puluhan baris HTML.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Pencegahan Duplikasi Data Naskah: Informasi yang tampil berulang kali di berbagai bagian halaman (seperti nama panggilan mempelai atau tanggal pernikahan pada layar pembuka, hero, dan footer) cukup ditulis satu kali sehingga konsistensi data selalu terjaga[cite: 1, 31, 33].

Struktur Objek Terstandar: Pengelompokan data menggunakan skema objek bersarang (nested object) membuat struktur data menjadi aman, rapi, dan seragam untuk digunakan kembali pada pesanan klien berikutnya.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Kekurangan:

Titik Kegagalan Tunggal (Single Point of Failure pada Sintaks): Apabila terdapat satu kesalahan sintaks kecil di dalam config.js (seperti kurang tanda koma ,, kurung kurawal }, atau tanda kutip "), seluruh objek WEDDING_CONFIG akan gagal dimuat oleh browser dan mengakibatkan seluruh data dinamis tidak tampil.

Data Terekspos di Sisi Klien (Publicly Accessible): Karena WEDDING_CONFIG dimuat pada global scope (window.WEDDING_CONFIG)[cite: 1, 31], seluruh datanya dapat dilihat oleh publik melalui Chrome DevTools, sehingga tidak aman jika digunakan untuk menyimpan data rahasia seperti API Key privat atau kredensial admin.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

2. Formulasi Pola Tagging Penanda Variabel (data-template, data-template-src, data-template-href)
Fungsi Utama:

Menjadi penanda lokasi (placeholder) pada elemen-elemen HTML5 sekaligus membatasi area dinamis menggunakan HTML Template Boundary Annotations agar dapat dikenali dan dimanipulasi oleh JavaScript.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Kelebihan:

Validitas Standar HTML5: Penggunaan atribut data semantik (data-template, data-template-src, data-template-href) direkomendasikan karena valid secara standar spesifikasi HTML5 dan mempermudah pemilihan elemen DOM (query selector) via JavaScript.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Prevensi Error (Zero Structural Regression): Pemisahan penanda variabel dari struktur desain mencegah admin non-teknis menghapus tag penutup HTML atau merusak kelas CSS secara tidak sengaja saat mengubah data.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Kemudahan Pemeliharaan (Maintainability): Penambahan komentar penanda struktur (Code Annotations) di awal dan akhir area injeksi memudahkan tim pengembang memetakan batas area dinamis di dalam index.html.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Tampilan Awal Lebih Bersih dibanding Mustache-style: Penggunaan atribut data-template mencegah munculnya teks kurung kurawal mentah seperti {{ data }} di layar pengguna apabila skrip mengalami keterlambatan pemuatan[cite: 1, 33].

Kekurangan:

Kurang Fleksibel untuk Data Berjumlah Dinamis (Dynamic Array Looping): Pola penandaan atribut per elemen sangat ideal untuk struktur yang jumlah itemnya tetap, namun kurang praktis jika jumlah item berubah-ubah antar-klien (misalnya klien A memiliki 3 foto galeri sementara klien B memiliki 15 foto galeri) karena tetap memerlukan penyesuaian jumlah elemen di HTML.   
HTML

Tidak Ada Validasi Path Otomatis di HTML: Jika penulisan jalur properti pada atribut HTML salah ketik (contoh: menulis data-template="mempelai.pria.nama" padahal di config.js bernama mempelai.pria.namaLengkap), editor tidak akan memberikan peringatan error sintaks dan elemen tersebut hanya akan dianggap kosong[cite: 1, 29].

3. Konstruksi Mesin Injeksi Data JavaScript (Vanilla JS Templating Engine)
Fungsi Utama:

Memverifikasi ketersediaan WEDDING_CONFIG di global scope, membaca properti bersarang melalui fungsi pembantu getNestedValue(obj, path), menyuntikkan nilai ke atribut/konten elemen DOM (textContent, src, href), serta menyembunyikan elemen/seksi jika datanya kosong (Fallback Value Handling)[cite: 1, 29].

Kelebihan:

Performa Ringan Tanpa Library Tambahan: Dibangun menggunakan Vanilla JavaScript murni tanpa ketergantungan pada framework eksternal, sehingga ukuran berkas tetap kecil dan waktu eksekusi DOM Hydration sangat cepat.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Integritas Data (Fallback Value Handling): Mesin secara otomatis menangani kondisi data kosong dengan menyembunyikan seksi atau komponen terkait apabila suatu properti tidak tersedia di config.js (misalnya ketika klien tidak menggunakan fitur Live Streaming atau Kirim Kado)[cite: 1, 29, 33].

Keamanan Injeksi Teks: Penggunaan properti textContent saat menyuntikkan teks mencegah eksekusi tag HTML berbahaya (Cross-Site Scripting / XSS) jika dibandingkan dengan penggunaan innerHTML[cite: 1, 29].

Kekurangan:

Keterbatasan SEO & Social Media Preview (Client-Side Rendering): Karena proses injeksi data baru berjalan di browser setelah dokumen dimuat (DOMContentLoaded), bot crawler (seperti pemindai pratinjau tautan WhatsApp) yang tidak mengeksekusi JavaScript hanya akan membaca teks default yang tertulis di dalam tag <head> pada index.html.   
JS
+ 1

Bersifat Satu Arah (Non-Reactive): Mesin hanya menyuntikkan data satu kali saat inisialisasi halaman; jika nilai di dalam window.WEDDING_CONFIG diubah saat halaman sedang berjalan, tampilan DOM tidak akan berubah otomatis kecuali fungsi mesin injeksi dipanggil ulang[cite: 1, 29].

4. Pengelolaan Version Control & Dokumentasi Kendala (Git & README.md)
Fungsi Utama:

Mengelola riwayat perubahan kode sumber menggunakan aturan Conventional Commits pada repositori Git serta mendokumentasikan analisis kendala teknis beserta solusinya di dalam berkas README.md.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Kelebihan:

Kemudahan Penelusuran & Code Review: Riwayat commit yang rapi dan terstandar mempermudah peninjauan kode (Code Review) pada sesi evaluasi serta memudahkan pelacakan perubahan di setiap tahapan fitur.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Keamanan Rollback: Jika perubahan pada mesin templating atau struktur HTML menimbulkan kesalahan konsol, pengembang dapat dengan mudah mengembalikan kode ke versi commit sebelumnya yang stabil.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Dokumentasi Solusi Teknis (Knowledge Base): Pencatatan kendala teknis dan solusinya pada README.md menjadi referensi berharga ketika tim menemukan masalah serupa di masa mendatang.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Kekurangan:

Tambahan Waktu Administratif (Workflow Overhead): Pengembang perlu meluangkan waktu ekstra dan disiplin tinggi untuk memecah perubahan kode menjadi commit yang terstruktur serta menyusun dokumentasi tertulis di README.md sebelum batas waktu pengumpulan.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Risiko Dokumentasi Tidak Sinkron: Apabila terjadi perubahan logika kode secara mendadak namun pengembang lupa memperbarui catatan di README.md, informasi dokumentasi dapat menjadi usang (outdated).

Ringkasan Perbandingan Keempat Penerapan
Komponen Penerapan	Peran Inti dalam Arsitektur	Keunggulan Utama	Tantangan / Batasan Utama
1. Skema Data (config.js)

 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Lapisan Data (Single Source of Truth) 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Kustomisasi massal cepat & bebas duplikasi naskah 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Rawan blank jika ada typo sintaks JS/JSON; data bersifat publik di browser
2. Pola Tagging (index.html)

 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Lapisan Representasi & Pemetaan DOM 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Valid HTML5, zero structural regression, & mudah dipelihara 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Kurang fleksibel untuk jumlah list yang berubah-ubah tanpa ubah HTML 
HTML

3. Mesin Injeksi (script.js)[cite: 1, 29]	
Lapisan Penghubung (DOM Hydration) 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Ringan (Vanilla JS), mendukung nested path & fallback data kosong[cite: 1, 29]	Tidak ramah crawler non-JS (seperti preview WA) & tidak reaktif otomatis
4. Git & Dokumentasi (README.md)

 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Tata Kelola Rekayasa Kode Sumber 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Riwayat perubahan rapi, mudah diaudit, & terdokumentasi 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Membutuhkan disiplin penulisan commit dan pembaruan dokumen rutin 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Apakah Anda juga ingin dibuatkan draf isi README.md (lengkap dengan analisis kendala teknis & solusinya) serta daftar pesan Conventional Commits untuk melengkapi tugas Minggu 10 ini?   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

dari 4 aspek itu, untuk keperluan web undangan digital per masing-masing aspek jika dinilai dari 1-100 tingkat keperluannya, kira2 berapa?

Berikut adalah penilaian tingkat keperluan (skala 1–100) untuk masing-masing aspek dalam konteks produksi dan operasional Website Undangan Pernikahan Digital, baik ditinjau dari kebutuhan bisnis nyata (mass customization) maupun bobot evaluasi teknis pada modul:   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Aspek Penerapan	Skor Keperluan (1–100)	Tingkat Urgensi Produksi	Bobot pada Rubrik Modul
1. Skema Data Konfigurasi Tersentralisasi (config.js)	98 / 100	Sangat Krusial (Mandatory)	
Bagian dari Abstraksi Data (40%) 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

2. Konstruksi Mesin Injeksi Data JS (Templating Engine)	95 / 100	Sangat Krusial (Core Engine)	
Fungsionalitas Injeksi Data (40%) 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

3. Formulasi Pola Tagging Penanda Variabel (data-template)	92 / 100	Tinggi (Structural Safety)	
Bagian dari Kerapihan Tagging (40%) 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

4. Version Control & Dokumentasi (Git & README.md)	75 / 100	Menengah–Tinggi (Team Governance)	
Kedisiplinan & Git Versioning (20%) 
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Rincian Alasan Penilaian per Aspek
1. Merancang Skema Data Konfigurasi Klien Tersentralisasi — Skor: 98 / 100
Alasan Penilaian: Layanan web undangan digital memiliki pola bisnis satu desain template untuk puluhan hingga ratusan klien berbeda. Setiap klien memiliki struktur kebutuhan data yang sama (profil mempelai pria/wanita, jadwal akad & resepsi, titik peta Google Maps, galeri foto, kutipan ayat/doa, dan nomor rekening amplop digital)[cite: 1, 11].

Dampak Praktis: Tanpa berkas config.js sebagai Single Source of Truth, admin atau pengembang harus mencari dan mengubah nama mempelai serta tanggal acara di belasan titik HTML secara manual (mulai dari title, opening screen, hero, couple, save the date, hingga footer)[cite: 1, 33]. Memisahkan data ke satu berkas konfigurasi memangkas waktu pengerjaan per pesanan secara drastis dan menghilangkan risiko ada nama mempelai lama yang tertinggal.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

2. Konstruksi Mesin Injeksi Data JavaScript (Templating Engine) — Skor: 95 / 100
Alasan Penilaian: Berkas config.js tidak akan berguna tanpa mesin pembaca yang menyuntikkan nilai properti bersarang (getNestedValue) ke dalam dokumen HTML secara otomatis[cite: 1, 29].

Dampak Praktis: Nilai tambah tertinggi dari mesin injeksi ini pada bisnis undangan digital adalah fitur Fallback Value Handling (penanganan data kosong)[cite: 1, 29]. Dalam praktiknya, tidak semua klien memiliki data yang lengkap—ada pasangan yang tidak menggunakan fitur Live Streaming, tidak menyertakan video prewedding, atau hanya mencantumkan satu nomor rekening tanpa alamat kirim kado. Mesin injeksi memastikan seksi yang datanya dikosongkan otomatis disembunyikan tanpa merusak tata letak halaman[cite: 1, 29].   
PDF
+ 2

3. Formulasi Pola Tagging Penanda Variabel (data-template) — Skor: 92 / 100
Alasan Penilaian: Pola penandaan atribut semantik (data-template, data-template-src, data-template-href) beserta HTML Template Boundary Annotations berfungsi menjaga keamanan struktur desain (Zero Structural Regression).   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Dampak Praktis: Desain undangan bertema Rustic Floral memiliki banyak elemen dekoratif, slider peta/galeri, dan struktur grid CSS yang sensitif terhadap perubahan tag HTML. Dengan menanamkan atribut data-template pada elemen HTML5, struktur tampilan benar-benar terkunci dari kesalahan hapus tag penutup atau class CSS. Skornya berada sedikit di bawah dua aspek pertama (92 poin) karena secara teknis pengembang masih bisa memilih gaya penandaan alternatif (seperti Mustache-style {{ data }}), meskipun atribut data-template jauh lebih rapi dan valid secara standar HTML5.   
PDF
+ 3

4. Pengelolaan Version Control & Dokumentasi (Git & README.md) — Skor: 75 / 100
Alasan Penilaian: Dari sudut pandang pengguna akhir (tamu undangan yang membuka tautan di smartphone), website undangan sebenarnya tetap dapat tampil dan berfungsi penuh meskipun kode sumbernya tidak dikelola menggunakan Git atau tidak memiliki README.md. Hal ini sejalan dengan rubrik penilaian modul yang memberikan porsi 20% pada aspek ini, sementara 80% sisanya berfokus pada mesin templating dan abstraksi data.   
PDF
+ 1

Dampak Praktis: Meskipun tidak berdampak langsung pada tampilan ke tamu undangan, skor 75 / 100 tetap diberikan karena dalam operasional tim pengembang (khususnya saat mengelola banyak katalog template dan kolaborasi magang), Git dan dokumentasi kendala sangat dibutuhkan untuk melacak riwayat perubahan master template, melakukan code review, serta melakukan rollback cepat apabila pembaruan kode merusak fitur yang sudah berjalan.   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable

Untuk tahap implementasi selanjutnya, apakah Anda ingin menguji simulasi kondisi data kosong (fallback testing) pada config.js atau menyiapkan dokumentasi kendala teknis pada README.md sesuai syarat pengumpulan tugas Minggu 10?   
10 Modul Pembelajaran - Template Tagging & Placeholder Variable





Gemini is AI and can make mistakes.

Calculating importance scores for wedding invitation features
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
script.js
Displaying script.js.
