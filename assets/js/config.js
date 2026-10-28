/* ============================================ */
/* CENTRALIZED CLIENT CONFIGURATION (CONFIG.JS) */
/* SINGLE SOURCE OF TRUTH - UD. REZ WAN JAYA    */
/* ============================================ */

const WEDDING_CONFIG = {
    theme: {
        preset: "rustic-floral", // Pilihan preset: "rustic-floral" | "elegant-gold" | "rustic-pastel"
        // Biarkan customTokens kosong ({}) agar perubahan langsung di :root style.css langsung terlihat,
        // atau isi pasangan variabel CSS jika ingin meng-override dari config.js.
        customTokens: {}
    },

    meta: {
        title: "Undangan Pernikahan — Rezki & Sartika",
        description: "Undangan Pernikahan Rezki Purnajaya & Sartika Dewi",
        inisialPria: "R",
        inisialWanita: "S",
        namaPasangan: "Rezki & Sartika",
        tanggalSingkat: "21 Februari 2027"
    },

    musik: {
        src: "assets/music/wedding-song.mp3"
    },

    opening: {
        label: "The Wedding Of",
        sapaan: "Kepada Yth.",
        tamuDefault: "Bapak/Ibu/Saudara/i",
        tanggal: "MINGGU, 21 FEBRUARI 2027",
        tombolBuka: "Buka Undangan"
    },

    hero: {
        eyebrow: "The Wedding Invitation Of",
        pesan: "Dengan penuh kebahagiaan, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.",
        hari: "MINGGU",
        tanggal: "21",
        bulan: "FEBRUARI",
        tahun: "2027"
    },

    mempelai: {
        pria: {
            label: "The Groom",
            namaPanggilan: "Rezki",
            namaLengkap: "Akhmad Rezki Purnajaya",
            silsilah: "Putra dari",
            orangTua: "Bapak H. Ahmad & Ibu Hj. Fatimah",
            foto: "assets/images/man.jpg",
            fotoAlt: "Andi Prasetyo, S.T."
        },
        wanita: {
            label: "The Bride",
            namaPanggilan: "Sartika",
            namaLengkap: "Sartika Dewi Aritonang",
            silsilah: "Putri dari",
            orangTua: "Bapak H. Budi & Ibu Hj. Rahayu",
            foto: "assets/images/woman.jpg",
            fotoAlt: "Sari Wulandari, S.Pd."
        }
    },

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
            mapEmbedUrl: "https://www.google.com/maps?q=Masjid+Jami'+Al-Ikhlas+Jl.+Raya+Ragunan+No.+11A+Jati+Padang&output=embed",
            ics: {
                uid: "akad-andi-sari-2027@rezwanjaya.com",
                dtStart: "20270221T010000Z",
                dtEnd: "20270221T030000Z",
                summary: "Pernikahan Andi & Sari (Akad Nikah)",
                description: "Acara Akad Nikah Andi Prasetyo, S.T. & Sari Wulandari, S.Pd.",
                location: "Masjid Jami' Al-Ikhlas, Jl. Raya Ragunan No. 11A, Jati Padang, Pasar Minggu, Jakarta Selatan"
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
            mapEmbedUrl: "https://www.google.com/maps?q=Gedung+Pertemuan+PERTAMINA+Jakarta+Pusat&output=embed"
        }
    },

    live: {
        status: "LIVE",
        judul: "Saksikan Pernikahan Kami Secara Live",
        deskripsi: "Bagi keluarga dan sahabat yang tidak dapat hadir secara langsung, kami mengundang Anda untuk menyaksikan momen bahagia ini melalui live streaming.",
        embedUrl: "https://www.youtube.com/embed/CglBdEdY2T4",
        youtubeUrl: "https://www.youtube.com/",
        labelTombol: "Tonton di YouTube"
    },

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

    quote: {
        arab: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        kutipan: "“Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan yang menjadi penyejuk hati kami, dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.”",
        sumber: "— QS. Al-Furqan: 74 —"
    },

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

    rsvp: {
        deskripsi: "Bagikan konfirmasi kehadiran serta doa terbaik untuk Andi & Sari.",
        scriptUrl: "https://script.google.com/macros/s/AKfycby0ijLbTlRvzkjtySPbHRTmf0CxJhSezpaPzvY8mIDeP53kLFg50IM9/exec"
    },

    footer: {
        salam: "With love",
        namaPasangan: "Andi & Sari",
        tanggal: "21 Februari 2027"
    }
};

window.WEDDING_CONFIG = WEDDING_CONFIG;
