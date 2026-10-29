# Nalar Lestari — GitHub Pages

Ekspor website https://nalar-lestari.satotojagad.chatgpt.site/ pada 29 Oktober 2026.
Sumber: versi Sites 3, commit ff08a83ac9bb4eb853c37f7c2230d00810a7b097.
Tampilan, konten, data historis, foto, dan interaksi dipertahankan.
Paket ini belum dipublikasikan ke GitHub dan tidak mengubah website asal.

## Publikasi paling mudah

1. Ekstrak ZIP. Buka folder `nalar-lestari-github-pages`.
2. Buat repository GitHub bernama misalnya `nalar-lestari`. Pilih **Public**
   jika menggunakan GitHub Free.
3. Unggah **isi folder**, bukan ZIP atau folder pembungkusnya. Pastikan
   `index.html`, `app.js`, `style.css`, dan folder `assets` berada di akar repository.
   Sertakan semua subfolder halaman dan `.nojekyll` (buat lewat Add file jika
   file tersembunyi tidak ikut unggahan).
4. Commit ke branch `main`.
5. Buka **Settings → Pages → Build and deployment**.
6. Pilih **Deploy from a branch**, branch **main**, folder **/(root)**, lalu **Save**.
7. Tunggu proses deployment. Lihat status di **Actions** dan buka URL yang
   ditampilkan di Settings → Pages, biasanya `https://USERNAME.github.io/nalar-lestari/`.

Pengunjung tidak perlu akun ChatGPT atau login GitHub untuk membuka website publik.
Tidak perlu npm install, framework, build command, API key, atau backend.
Tautan dan JSON otomatis mengikuti lokasi app.js: nama repository boleh diganti.
Untuk user site `USERNAME.github.io` atau custom domain, kode yang sama dapat digunakan.
Custom domain perlu dikonfigurasi di Settings → Pages dan DNS penyedia domain;
ZIP ini tidak menyertakan CNAME karena domain belum diberikan.

Panduan resmi:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Menjalankan lokal

Dari folder yang memuat index.html, jalankan:

```sh
python -m http.server 8000
```

Buka http://localhost:8000/ . Jangan membuka index.html dengan klik ganda/file://:
modul JavaScript dan fetch JSON membutuhkan HTTP. Ini server berkas lokal untuk
preview, bukan backend produksi. GitHub Pages menyediakan layanan berkas tersebut.

## Isi paket dan pembaruan

| File/folder | Fungsi / cara mengubah |
| --- | --- |
| index.html | Kerangka beranda, navigasi, footer |
| app.js | Semua konten halaman, routing, pencarian, filter, grafik, dan interaksi |
| style.css | Warna, tipografi, layout, dan responsivitas |
| assets/ | Dua foto WebP yang digunakan website |
| research-data.json | Referensi, timeline, data historis, analisis, observasi, dan revisi |
| media.json | Isi youtube_id dengan ID video 11 karakter; null mempertahankan placeholder |
| observation-template.json | Format awal untuk catatan observasi |
| wawasan/, kajian/, media/, tentang/ | index.html untuk akses langsung dan refresh subhalaman |
| scripts/sync-routes.py | Memperbarui kerangka subhalaman setelah index.html utama diedit |
| LICENSE | MIT untuk kode asli milik pengguna |
| THIRD_PARTY_NOTICES.md | Ketentuan foto, font, dan referensi |
| AUDIT.md | Audit portabilitas dan ketergantungan |

Setelah mengubah kerangka index.html utama, jalankan `python scripts/sync-routes.py`.
Perubahan teks pada app.js, gaya CSS, gambar, atau JSON tidak perlu langkah build.
Untuk menambah halaman baru, tambahkan routing dan konten di app.js, lalu tambahkan
rutenya di scripts/sync-routes.py dan jalankan script tersebut.

Tambahkan observasi ke array observations pada research-data.json. Pertahankan
struktur contoh, sumber, tanggal, status verifikasi, kaitan bukti, dan revisi.
Gunakan beach persis `Pantai Baru` atau `Pantai Pandansimo`. Renderer yang ada
mendukung foto dengan URL HTTPS. Koordinat belum memiliki lapisan peta aktif.
Data historis 2013 tetap historis; jangan menggantinya dengan angka lapangan tanpa label.

## Batasan yang dipertahankan

- JavaScript harus aktif. JSON dimuat dari hosting yang sama.
- Google Fonts memerlukan internet; foto sudah berada dalam paket.
- YouTube privacy-enhanced embed memerlukan internet jika video diaktifkan.
- Belum ada CMS/admin, database, login, atau sistem unggah langsung.
- Konten lapangan dan video yang belum tersedia tetap berupa placeholder asli.
- Referensi daring tetap berupa tautan; akses sumber tergantung situs penerbit.

## Lisensi

Kode asli milik pengguna: MIT, lihat LICENSE. Foto, font, merek, dan sumber
penelitian tidak termasuk MIT; lihat THIRD_PARTY_NOTICES.md.
