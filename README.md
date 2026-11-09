# Nalar Lestari — pembaruan GitHub Pages

Paket ini adalah versi statis Nalar Lestari yang disiapkan dari website yang
diterbitkan pada 9 November 2026. Isinya mencakup Beranda, Tentang Kami,
Wawasan, kajian Pantai Baru Pandansimo, Kawasan Bebas Kendaraan, serta artikel
baru **Dari Software Spasial Menuju Infrastruktur Berkelanjutan**. Kedua
video YouTube sudah terhubung. Alamat lama `/kajian/` dan `/media/` tetap ada.

Paket disesuaikan untuk digunakan pada repository yang sudah ada,
[`BitlyGulls/nalarlestari`](https://github.com/BitlyGulls/nalarlestari).
`index.html` berada pada tingkat utama ZIP; jangan unggah file ZIP secara
langsung ke repository.

## Cara memperbarui repository yang sudah digunakan

1. Unduh dan ekstrak ZIP. Buka folder hasil ekstraksi sampai terlihat
   `index.html`, `app.js`, `style.css`, dan folder `assets` berdampingan.
2. Buka repository `BitlyGulls/nalarlestari` di GitHub. Periksa **Settings →
   Pages** untuk memastikan branch dan folder sumber yang sedang dipakai.
   Repository ini memiliki branch utama `main` dan file website di akar
   repository. Jika Pages Anda menggunakan `main` dan `/(root)`, lanjutkan
   dengan langkah di bawah; jika sumber Pages berbeda, unggah ke sumber itu.
3. Pada halaman **Code** di branch sumber, pilih **Add file → Upload files**.
   Seret **isi folder hasil ekstraksi**, termasuk subfolder, ke halaman unggah.
   Jangan seret folder pembungkusnya sebagai satu folder tambahan: `index.html`
   harus tetap berada di akar sumber publikasi.
4. File dengan nama dan jalur yang sama akan diperbarui dan file baru akan
   ditambahkan. Jangan menghapus repository. Pertahankan file konfigurasi lain
   yang mungkin ada, seperti `CNAME` atau `.github/`; keduanya tidak disediakan
   dalam ZIP ini. Jika browser tidak mempertahankan struktur folder ketika
   diunggah, gunakan GitHub Desktop: clone repository, salin isi hasil
   ekstraksi ke folder clone, ganti file yang namanya sama, lalu commit dan push.
5. Tulis pesan commit, misalnya `Perbarui artikel software spasial dan video`,
   lalu pilih **Commit changes** pada branch sumber. Tunggu GitHub Pages selesai
   membangun website. Periksa status melalui **Actions** atau **Settings →
   Pages**, lalu buka alamat yang tercantum di pengaturan tersebut.

Untuk pembaruan minimal dari paket Nalar Lestari sebelumnya, file yang berubah
atau ditambahkan adalah `app.js`, `style.css`, `catalogue.json`, `media.json`,
`software-spasial.js`, `software-spasial.json`, dan
`kerja-kami/software-spasial/index.html`. Salin file-file ini dengan struktur
foldernya. Anda juga boleh memperbarui `README.md` dan `HAK_ASET.md`.

Dokumentasi resmi: [Memilih sumber publikasi GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Menjalankan di komputer

Website memakai modul JavaScript dan memuat data JSON, sehingga membuka
`index.html` langsung dari File Explorer dapat dibatasi browser. Dari terminal
di folder yang berisi `index.html`, jalankan:

```bash
python -m http.server 8000
```

Di Windows, `py -m http.server 8000` juga dapat dipakai. Buka
`http://localhost:8000/`. Server ini hanya untuk pratinjau lokal; GitHub Pages
menyajikan file statis tanpa Python.

## Struktur dan ketergantungan

- `index.html` dan folder halaman menyimpan pintu masuk setiap alamat.
- `app.js`, `style.css`, dan `catalogue.json` mengatur halaman dan navigasi.
- `software-spasial.js` dan `software-spasial.json` menyimpan halaman serta
  bacaan lengkap tentang Metashape, QGIS, dan GAMIT/GLOBK.
- `media.json` berisi ID video Kawasan Bebas Kendaraan. Video diskusi software
  ditautkan dalam `software-spasial.js`; keduanya memakai pemutar YouTube dan
  menyediakan tautan langsung ke YouTube.
- `pandansimo-field.js`, `research-data.json`, serta `assets/` berisi data
  kajian, foto, dan citra yang digunakan halaman. Atribusi harus dipertahankan.
- `wawasan/green-building/` menyimpan interaksi Green Building.

Website memerlukan JavaScript, tetapi tidak memerlukan server aplikasi,
database, API berbayar, akun pengunjung, atau layanan khusus ChatGPT Sites.
Font Fraunces dan Poppins dimuat dari Google Fonts dengan font cadangan. Video
YouTube, font tersebut, dan tautan eksternal memerlukan internet. Clipboard
untuk audit Green Building memerlukan konteks aman seperti HTTPS.

## Lisensi dan aset

`LICENSE` memuat lisensi MIT untuk kode milik Nalar Lestari. Lisensi itu tidak
otomatis mencakup foto, citra, ilustrasi, artikel, font, atau video pihak
ketiga. Baca `HAK_ASET.md`: citra Google Earth digunakan untuk tujuan edukasi
nonkomersial dengan atribusi; hak dan izin ilustrasi Zero Waste yang disediakan
sebelumnya masih perlu dipastikan sebelum dipublikasikan ulang. File dalam
repository publik dapat diunduh orang lain. Paket tidak menyertakan kredensial,
riwayat Git, atau data pribadi tambahan yang tidak ditampilkan di website.
