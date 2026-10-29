# Audit portabilitas — 29 Oktober 2026

## Hasil
Website dapat diterbitkan sebagai situs statis di GitHub Pages.
Tidak ada backend, database, server-side rendering, autentikasi ChatGPT,
SDK Sites, API privat, atau environment variable yang diperlukan untuk menjalankan halaman.
Tidak ada proses build wajib. HTML, CSS, JavaScript, JSON, dan foto adalah sumber runtime.

## Penyesuaian ekspor
- Isi direktori dist sumber ditempatkan di akar paket.
- Aset, fetch JSON, dan tautan dalam app.js diselesaikan relatif terhadap import.meta.url.
- Routing menghapus prefix lokasi hosting sebelum memilih halaman.
- Kerangka HTML subhalaman memakai jalur relatif ke CSS, app.js, dan navigasi.
- Setiap rute memiliki index.html agar direct link dan refresh tidak memerlukan server rewrite.
- .nojekyll disertakan; tidak ada konfigurasi Sites, Git remote, riwayat Git,
  token akses, atau berkas autentikasi dalam ZIP.
- CSS, foto, dan dataset JSON dipertahankan byte-for-byte dari sumber saat ekspor.
- Generator data awal tidak diperlukan; JSON yang digunakan website adalah sumber aktif.

## Ketergantungan eksternal yang tetap ada
- Google Fonts untuk Plus Jakarta Sans dan Space Grotesk; fallback sans-serif tersedia.
- YouTube-nocookie hanya saat youtube_id diisi. Saat ekspor nilainya null.
- Referensi akademik, pemerintah, ZWIA, dan atribusi foto berupa tautan eksternal.
- Foto tampilan utama disertakan lokal, bukan hotlink.

## Verifikasi
- Pemeriksaan sintaks JavaScript lulus.
- Semua 8 kerangka HTML dan tautan/aset lokalnya diperiksa keberadaannya.
- Preview browser memakai prefix /nalar-lestari-github-pages/:
  beranda dan foto tampil; navigasi Wawasan bekerja; pencarian Pandansimo
  menghasilkan 1 hasil; tautan hasil membuka kajian; reload kajian berhasil;
  tombol Persentase memperbarui grafik ke 27%, 11%, 40%, dan 22%.
- Tampilan beranda dibandingkan dengan versi sumber yang tersedia.
- Belum dilakukan deployment ke GitHub; akses penerbit referensi tidak diuji ulang seluruhnya.

Lisensi dan atribusi aset: THIRD_PARTY_NOTICES.md.
