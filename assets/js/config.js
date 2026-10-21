/* ============================================================
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
