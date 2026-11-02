# Nalar Lestari — paket GitHub Pages

Paket ini adalah salinan kode website Nalar Lestari yang diterbitkan pada
2 November 2026, dengan penyesuaian tautan untuk GitHub Pages. Beranda,
Wawasan, Green Building, Zero Waste, Tentang Kami, kajian Pantai Baru
Pandansimo, karya mobilitas, serta alamat lama `/kajian/` dan `/media/`
disertakan. Tampilan, narasi, foto, dan fitur yang telah ada dipertahankan.

## Menerbitkan lewat GitHub

1. Ekstrak ZIP di komputer. Buka folder hasil ekstraksi sampai Anda melihat
   `index.html`, `app.js`, `style.css`, dan folder `assets` pada tingkat yang
   sama.
2. Buat repository **baru** di GitHub, misalnya `nalar-lestari`. Gunakan
   repository ini jika Anda ingin mempertahankan website lain yang sudah ada
   di repository `username.github.io`. Untuk GitHub Free, pilih **Public**.
3. Buka repository tersebut, pilih **Add file → Upload files**, lalu unggah
   **isi** folder hasil ekstraksi, termasuk semua subfolder, ke akar repository.
   Jangan memasukkan folder pembungkus tambahan. Pastikan `index.html` langsung
   terlihat di halaman utama repository. Unggah juga `.nojekyll` bila terlihat.
   Isi file dan foto yang ada dalam repository publik dapat diunduh orang lain.
4. Pilih **Commit changes**. Setelah unggahan selesai, buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**, lalu pilih
   branch **main** dan folder **/(root)**. Klik **Save**.
6. Tunggu proses terbit, lalu buka alamat yang muncul pada halaman Pages.
   Biasanya alamat repository proyek adalah
   `https://USERNAME.github.io/nalar-lestari/`. Jika repository bernama
   `USERNAME.github.io`, alamatnya adalah `https://USERNAME.github.io/`.
   URL khusus bergantung pada nama akun, repository, dan pengaturan GitHub Anda.

Tautan dan aset di paket ini menyesuaikan diri dengan kedua bentuk alamat
tersebut. Berkas `.nojekyll` adalah file kosong opsional
yang menyatakan bahwa website dikirim langsung tanpa proses Jekyll. Situs ini
tidak memiliki folder berawalan garis bawah yang memerlukan file tersebut.

Jika drag-and-drop folder tidak mempertahankan susunannya, unggah dengan Git
atau GitHub Desktop agar struktur folder tetap utuh. Dokumentasi resmi:
[Konfigurasi sumber GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Memperbarui kemudian

Ubah file yang diperlukan, lalu unggah atau commit file yang berubah ke branch
yang sama. GitHub Pages akan menerbitkan kembali dari branch tersebut; Anda
tidak perlu menghapus repository. Simpan cadangan jika sebelumnya ada file
lain dengan nama yang sama.

## Menjalankan di komputer

Website memakai JavaScript modules dan memuat berkas JSON, sehingga membuka
`index.html` langsung dengan `file://` dapat dibatasi browser. Untuk meninjau
di komputer yang memiliki Python 3, buka terminal pada folder yang berisi
`index.html`, lalu jalankan:

```bash
python -m http.server 8000
```

Buka `http://localhost:8000/`. Di Windows, `py -m http.server 8000` dapat dipakai
jika `python` tidak ditemukan. Server kecil ini hanya untuk pratinjau lokal;
GitHub Pages melayani berkas statis secara langsung dan tidak menjalankan Python.

## Struktur penting

- `index.html` dan subfolder halaman: pintu masuk setiap alamat.
- `app.js` dan `style.css`: navigasi, isi halaman, gaya, dan interaksi bersama.
- `pandansimo-field.js` dan `research-data.json`: isi kajian, sumber, cerita
  lapangan, serta pembanding citra. Perubahan isi harus tetap menjaga sumber,
  atribusi, dan batas data historis.
- `catalogue.json`: daftar isi Wawasan dan Kerja Kami.
- `wawasan/green-building/page.js` dan `page.css`: isi serta interaksi Green Building.
- `media.json`: konfigurasi video; saat ini `youtube_id` bernilai `null` sehingga
  pesan persiapan video tetap ditampilkan.
- `assets/`: foto dan ilustrasi yang digunakan halaman. Lihat `HAK_ASET.md`.

## Ketergantungan dan fungsi

- HTML, CSS, JavaScript, data JSON, serta gambar yang diperlukan situs sudah
  ada dalam paket. Tidak ada backend, database, API berbayar, kredensial, atau
  layanan khusus ChatGPT Sites yang diperlukan untuk menjalankan website.
- Tampilan font Fraunces dan Poppins diambil dari Google Fonts. Koneksi internet
  diperlukan untuk memuatnya; bila gagal, browser memakai font cadangan.
  Tautan ke sumber eksternal juga memerlukan internet.
- Video YouTube, jika ID nanti diisi, menggunakan `youtube-nocookie.com` dan
  memerlukan koneksi serta mengikuti ketentuan YouTube. Saat ini belum ada ID.
- Tombol salin audit Green Building menggunakan clipboard browser pada konteks
  aman seperti HTTPS; jika tidak tersedia, teks dapat disalin secara manual.
- Grafik, filter topik, pilihan tahun citra, simulasi, dan kalkulator berjalan
  di browser. Situs memerlukan JavaScript aktif.

## Lisensi dan privasi

Kode milik Nalar Lestari menggunakan lisensi MIT dalam `LICENSE`. Aset dan isi
pihak ketiga memiliki ketentuan tersendiri, termasuk citra Google Earth yang
penggunaan webnya dibatasi pada konteks nonkomersial tertentu. Lihat
`HAK_ASET.md` sebelum mempublikasikan atau menggunakan ulang aset. Paket tidak
menyertakan kredensial Sites, riwayat Git, atau data pribadi tambahan di luar
materi yang sudah ditampilkan di website.
