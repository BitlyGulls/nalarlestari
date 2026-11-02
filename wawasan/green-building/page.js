/* Nalar Lestari — Green Building / edukasi interaktif. Tanpa ketergantungan eksternal. */
const main = document.querySelector('#main');
document.title = 'Green Building: Bangunan Hijau, Kehidupan yang Lebih Baik | Nalar Lestari';
const siteRoot = new URL('../../', import.meta.url);
const roots = {
  site: siteRoot.href,
  zero: new URL('wawasan/zero-waste/', siteRoot).href,
  media: new URL('kerja-kami/kawasan-bebas-kendaraan/', siteRoot).href,
  hub: new URL('wawasan/', siteRoot).href
};
const principles = [
  {id:'tapak',name:'Tapak & kawasan',short:'Lokasi yang bijak',icon:'⌖',title:'Di mana bangunan ditempatkan?',body:'Lokasi memengaruhi akses transportasi, penggunaan lahan, kondisi lingkungan, dan hubungan bangunan dengan sekitarnya. Bangunan adalah bagian dari kawasan, bukan objek yang berdiri sendiri.',try:'Amati: dapatkah kebutuhan sehari-hari dijangkau dengan berjalan kaki, bersepeda, atau transportasi umum?'},
  {id:'energi',name:'Energi',short:'Gunakan seperlunya',icon:'☀',title:'Mengurangi energi tanpa mengurangi fungsi',body:'Desain yang mengendalikan panas matahari, peralatan efisien, pencahayaan yang sesuai, dan pengelolaan operasional dapat mengurangi pemborosan. Penghematan aktual perlu dibuktikan dengan data.',try:'Coba: catat penggunaan listrik 12 bulan dan identifikasi perubahan pemakaian AC atau penerangan.'},
  {id:'air',name:'Air',short:'Cegah pemborosan',icon:'◉',title:'Air merupakan sumber daya yang perlu dikelola',body:'Pemeriksaan kebocoran, peralatan hemat air, dan pemanfaatan air hujan sesuai keamanan dan aturan setempat dapat menjadi strategi konservasi air.',try:'Coba: amati apakah meter air tetap bergerak saat seluruh keran ditutup.'},
  {id:'material',name:'Material',short:'Pikirkan siklus hidup',icon:'▧',title:'Material bukan hanya soal tampilan akhir',body:'Pilihan material perlu mempertimbangkan asal, ketahanan, pemeliharaan, limbah konstruksi, kemampuan diperbaiki, serta penggunaan kembali. Mengganti sesuatu yang masih berfungsi tidak selalu menjadi pilihan terbaik.',try:'Coba: saat renovasi, buat daftar komponen yang bisa diperbaiki atau dipakai kembali.'},
  {id:'nyaman',name:'Kesehatan & kenyamanan',short:'Manusia sebagai pusat',icon:'◌',title:'Bangunan untuk orang yang berada di dalamnya',body:'Kenyamanan termal, pencahayaan, kelembapan, kebisingan, dan kualitas udara dalam ruang menjadi pertimbangan utama. Strategi ventilasi alami harus disesuaikan dengan kondisi udara luar.',try:'Coba: identifikasi ruangan yang terlalu panas, lembap, kurang cahaya, atau memiliki bau yang menetap.'},
  {id:'kelola',name:'Pengelolaan',short:'Periksa kinerja nyata',icon:'↻',title:'Bangunan hijau tidak selesai saat konstruksi berakhir',body:'Pengoperasian, pencatatan energi dan air, pemeliharaan, serta evaluasi berkala membantu mengetahui apakah manfaat yang direncanakan benar-benar terjadi.',try:'Coba: buat jadwal sederhana untuk memeriksa sistem pendingin, kebocoran, dan catatan konsumsi.'}
];
const citations = [
  ['US EPA','Green Building: pendekatan sepanjang siklus hidup','https://www.epa.gov/smartgrowth/green-building'],
  ['Green Building Council Indonesia','GREENSHIP: enam kategori penilaian','https://gbcindonesia.org/greens/new'],
  ['GBC Indonesia','GREENSHIP untuk bangunan eksisting','https://gbcindonesia.org/greens/existing'],
  ['JDIH BPK','Permen PUPR No. 21 Tahun 2021 — Penilaian Kinerja Bangunan Gedung Hijau','https://peraturan.bpk.go.id/Details/217002/permen-pupr-no-21-tahun-2021'],
  ['ENERGY STAR / US EPA','Energy Use Intensity: prinsip penghitungan','https://www.energystar.gov/buildings/benchmark/understand-metrics/what-eui'],
  ['GBC Indonesia','Penjelasan sertifikasi GREENSHIP dan EDGE','https://gbcindonesia.org/certification']
];
main.innerHTML = `
<div class="gb-page">
  <section class="gb-hero" id="mulai" aria-labelledby="gb-title">
    <div class="gb-wrap gb-hero-inner">
      <div class="gb-hero-copy">
        <div class="gb-kicker">NALAR LESTARI / WAWASAN / GREEN BUILDING</div>
        <h1 id="gb-title">Bangunan Hijau,<br><span>Kehidupan yang Lebih Baik.</span></h1>
        <p>Rumah yang nyaman. Energi dan air yang digunakan secara bijak. Material yang dipikirkan sepanjang masa pakainya. Pelajari bagaimana desain dan pengelolaan bangunan bekerja untuk manusia dan lingkungan.</p>
        <div class="gb-actions"><a class="gb-cta" href="#kenali">Mulai menjelajah <span aria-hidden="true">↓</span></a><a class="gb-text-link" href="#simulasi">Coba laboratorium rumah</a></div>
        <p class="gb-small">Edukasi berbasis bukti · Konteks iklim tropis Indonesia · Tidak menggantikan audit profesional</p>
      </div>
      <div class="gb-hero-art" aria-label="Ilustrasi konseptual rumah tropis dengan peneduh, bukaan, vegetasi dan pengelolaan air" role="img">
        <svg class="gb-hero-svg" viewBox="0 0 630 430" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs><linearGradient id="gb-wall" x1="0" x2="1"><stop stop-color="#f8f5ea"/><stop offset="1" stop-color="#cdd8ca"/></linearGradient><linearGradient id="gb-roof-gradient" x1="0" x2="1"><stop stop-color="#385d4d"/><stop offset="1" stop-color="#709778"/></linearGradient></defs>
          <ellipse cx="323" cy="357" rx="274" ry="47" fill="#678a7440"/><circle cx="515" cy="91" r="43" fill="#f2d596"/>
          <path d="M90 260L276 153 514 249 329 353Z" fill="#bfcfba"/><path d="M169 212L304 150 458 212 313 280Z" fill="url(#gb-roof-gradient)"/><path d="M171 217L313 282 313 340 171 275Z" fill="#e8e7d9"/><path d="M313 282L456 216 456 278 313 340Z" fill="url(#gb-wall)"/><path d="M152 215L303 140 474 214 454 223 304 160 173 232Z" fill="#284e42"/>
          <path d="M218 247l62 25v41l-62-23z" fill="#76abb0" stroke="#2f6d68" stroke-width="6"/><path d="M359 282l70-31v47l-70 31z" fill="#6eaaa4" stroke="#34776c" stroke-width="6"/><path d="M381 273v44" stroke="#34776c" stroke-width="4"/>
          <path d="M200 232l91 39" stroke="#c59c58" stroke-width="9" stroke-linecap="round"/><path d="M345 275l96-44" stroke="#c59c58" stroke-width="10" stroke-linecap="round"/>
          <path d="M82 291h113" stroke="#98b8a3" stroke-width="9" stroke-linecap="round"/><path d="M112 293v-87" stroke="#6d8357" stroke-width="11"/><circle cx="110" cy="198" r="42" fill="#739c78"/><circle cx="82" cy="216" r="35" fill="#8bb78c"/><circle cx="139" cy="212" r="32" fill="#528568"/>
          <path d="M460 313c17-39 35-59 52-90" stroke="#4d8664" stroke-width="10" stroke-linecap="round"/><circle cx="513" cy="214" r="39" fill="#88b58d"/><circle cx="535" cy="225" r="32" fill="#619e7e"/><circle cx="483" cy="239" r="29" fill="#4d8869"/>
          <path d="M438 330c23-3 37-12 44-22" fill="none" stroke="#5795a4" stroke-width="6" stroke-linecap="round" stroke-dasharray="6 10"/><path d="M478 305l3 16 10-12" fill="none" stroke="#5795a4" stroke-width="5" stroke-linecap="round"/>
          <path d="M118 120c32-29 65-41 94-43" fill="none" stroke="#e8c771" stroke-width="3" stroke-dasharray="5 8"/><path d="M211 77l-13-8 1 15" fill="none" stroke="#e8c771" stroke-width="3"/>
          <g fill="#21453e" font-size="14" font-weight="600"><text x="37" y="118">Peneduh</text><text x="426" y="59">Sinar matahari</text><text x="423" y="393">Air hujan</text></g>
        </svg>
        <div class="gb-art-caption">Ilustrasi konsep — bukan simulasi kinerja bangunan</div>
      </div>
    </div>
  </section>
  <nav class="gb-sticky" aria-label="Navigasi Green Building"><div class="gb-wrap"><a href="#kenali">Kenali</a><a href="#prinsip">Prinsip</a><a href="#simulasi">Eksplorasi</a><a href="#ukur">Ukur</a><a href="#kota">Kota</a><a href="#kajian">Kajian</a><a href="#aksi">Mulai</a></div></nav>
  <section class="gb-section" id="kenali">
    <div class="gb-wrap gb-split"><div><div class="gb-kicker">01 / KENALI PERSOALAN</div><h2>Kenapa rumah bisa terasa panas, padahal jendelanya terbuka?</h2><p class="gb-lead">Tidak selalu karena penghuninya kurang hemat atau perangkat pendinginnya kurang kuat. Bangunan memiliki cara tersendiri dalam menerima, menyimpan, dan melepaskan panas.</p><p>Posisi bukaan, bentuk atap, peneduh, material, dan kondisi lingkungan sekitar memengaruhi kenyamanan. Pertanyaan sederhana seperti ini menjadi pintu masuk untuk memahami <em>green building</em> atau bangunan hijau.</p></div><aside class="gb-context"><span class="gb-overline">BANGUNAN SEBAGAI SISTEM</span><p class="gb-context-big">Rancang → Bangun → Gunakan → Rawat → Perbarui</p><p>Bangunan hijau memperhatikan dampak dan kebutuhan sumber daya sepanjang siklus hidup, bukan hanya saat gedung terlihat baru atau memiliki banyak tanaman.</p><a href="https://www.epa.gov/smartgrowth/green-building" target="_blank" rel="noopener noreferrer">Dasar konsep: US EPA ↗</a></aside></div>
  </section>
  <section class="gb-section gb-soft" id="prinsip">
    <div class="gb-wrap"><div class="gb-kicker">02 / ENAM PRINSIP</div><h2>Apa yang membuat bangunan menjadi lebih hijau?</h2><p class="gb-lead">Pilih salah satu prinsip untuk melihat fungsi, alasan rekayasa, dan hal yang dapat diamati di rumah. Adaptasi edukatif dari enam kategori GREENSHIP GBC Indonesia.</p><div class="gb-principles" role="tablist" aria-label="Enam prinsip bangunan hijau">${principles.map((p,i)=>`<button type="button" class="gb-principle" role="tab" id="gb-tab-${p.id}" aria-controls="gb-principle-panel" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-principle="${p.id}"><span class="gb-principle-icon" aria-hidden="true">${p.icon}</span><strong>${p.name}</strong><small>${p.short}</small></button>`).join('')}</div><div class="gb-detail" role="tabpanel" aria-labelledby="gb-tab-tapak" id="gb-principle-panel"><div class="gb-detail-mark">01</div><div><span class="gb-overline">PENJELASAN REKAYASA</span><h3 id="gb-detail-title"></h3><p id="gb-detail-body"></p><div class="gb-tip" id="gb-detail-try"></div></div></div></div>
  </section>
  <section class="gb-section" id="simulasi">
    <div class="gb-wrap"><div class="gb-kicker">03 / LABORATORIUM RUMAH TROPIS</div><h2>Apa yang berubah ketika desainnya berubah?</h2><p class="gb-lead">Aktifkan elemen desain untuk melihat mekanismenya. Ini adalah demonstrasi konseptual, bukan perhitungan suhu maupun penghematan energi.</p><div class="gb-lab"><div class="gb-lab-stage"><svg id="gb-house" viewBox="0 0 520 360" role="img" aria-label="Potongan konseptual rumah dengan opsi peneduh, insulasi atap dan ventilasi silang"><rect x="20" y="303" width="480" height="18" rx="8" fill="#c6d4c8"/><path d="M79 146L260 65 441 146" fill="none" stroke="#35584c" stroke-width="18" stroke-linejoin="round"/><path d="M99 154h322v150H99Z" fill="#f8f2e7" stroke="#5d7569" stroke-width="4"/><rect x="116" y="186" width="83" height="77" fill="#9dd0d0" stroke="#406f73" stroke-width="5"/><rect x="321" y="186" width="83" height="77" fill="#9dd0d0" stroke="#406f73" stroke-width="5"/><rect x="224" y="238" width="72" height="66" fill="#d5c6a4"/><path d="M90 155l170-76 171 76" fill="none" stroke="#557d61" stroke-width="7"/><g id="gb-roof-layer" opacity="0"><path d="M91 148L260 73 429 148" fill="none" stroke="#b5d7a5" stroke-width="12" stroke-linejoin="round"/></g><g id="gb-shade-layer" opacity="0"><path d="M64 122L260 33 456 122" fill="none" stroke="#bd9569" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"/><path d="M79 128l17 13m345-13-17 13" fill="none" stroke="#bd9569" stroke-width="6" stroke-linecap="round"/></g><g id="gb-heat-layer"><path d="M145 38l57 88m19-103 39 69m60-64-30 85" stroke="#e6a95b" stroke-width="5" stroke-linecap="round" stroke-dasharray="9 8"/><path d="M192 117l12 5-2-14m47-24l12 7-3-15m33 26l-1 14 11-5" fill="none" stroke="#e6a95b" stroke-width="4"/></g><g id="gb-air-layer" opacity="0"><path d="M42 231C105 217 132 258 202 250S310 204 393 225S458 248 489 228" fill="none" stroke="#469ea1" stroke-width="8" stroke-linecap="round"/><path d="M468 213l20 15-19 15" fill="none" stroke="#469ea1" stroke-width="7"/></g><g fill="#375c52" font-size="13"><text x="95" y="342">Potongan rumah ilustratif</text><text x="324" y="342">Tidak berskala</text></g></svg><p class="gb-lab-note">Elemen yang dipilih hanya menampilkan prinsip kerja; kondisi nyata bergantung pada orientasi, material, iklim, kualitas udara luar, serta perilaku pengguna.</p></div><div class="gb-lab-controls"><h3>Ubah kondisi desain</h3><label class="gb-switch"><input type="checkbox" id="gb-shade"><span><strong>Peneduh atap</strong><small>Membatasi sinar matahari langsung yang mengenai atap.</small></span></label><label class="gb-switch"><input type="checkbox" id="gb-roof"><span><strong>Insulasi atap</strong><small>Menghambat aliran panas melalui selubung atap.</small></span></label><label class="gb-switch"><input type="checkbox" id="gb-air"><span><strong>Ventilasi silang</strong><small>Memperlihatkan jalur udara bila kondisi memungkinkan.</small></span></label><div class="gb-tip" id="gb-lab-summary" aria-live="polite">Coba aktifkan salah satu pilihan untuk melihat perubahan pada ilustrasi.</div></div></div></div>
  </section>
  <section class="gb-section gb-soft" id="ukur">
    <div class="gb-wrap gb-split"><div><div class="gb-kicker">04 / UKUR KINERJA</div><h2>Dari rencana hemat energi menuju data yang bisa diperiksa.</h2><p>Desain yang baik perlu didampingi pengelolaan dan pencatatan. Salah satu indikator awal adalah intensitas penggunaan listrik tahunan, yaitu konsumsi listrik selama satu tahun dibagi luas lantai bangunan.</p><p>Hasil di bawah <strong>bukan nilai sertifikasi</strong> atau pembuktian bahwa bangunan sudah efisien; perbandingan membutuhkan fungsi bangunan dan batas pengukuran yang sesuai.</p></div><div class="gb-calculator"><h3>Kalkulator intensitas listrik</h3><label for="gb-kwh">Pemakaian listrik satu tahun (kWh)</label><input id="gb-kwh" type="number" min="0" step="1" value="6000" inputmode="decimal"><label for="gb-area">Luas lantai bangunan (m²)</label><input id="gb-area" type="number" min="1" step="1" value="100" inputmode="decimal"><div class="gb-calculation" role="status" aria-live="polite"><span>Intensitas penggunaan listrik</span><strong id="gb-eui">60</strong><small>kWh/m²/tahun</small></div><p class="gb-small">Nilai awal adalah contoh latihan, bukan data bangunan sungguhan. Menggunakan listrik saja belum mencakup sumber energi lainnya.</p><button type="button" class="gb-reset" id="gb-reset">Atur ulang contoh</button></div></div>
  </section>
  <section class="gb-section" id="kota"><div class="gb-wrap"><div class="gb-kicker">05 / DARI BANGUNAN MENUJU KOTA</div><h2>Bangunan tidak berdiri sendiri.</h2><p class="gb-lead">Pilih topik untuk melihat hubungan antara sebuah bangunan, Zero Waste, transportasi, serta pengelolaan lingkungan kota.</p><div class="gb-city"><div class="gb-city-scene" role="img" aria-label="Ilustrasi kawasan: bangunan, pohon, jalan, transportasi, dan pengelolaan air"><div class="gb-city-building">⌂</div><div class="gb-city-road"></div><div class="gb-city-tree t1">♣</div><div class="gb-city-tree t2">♣</div><div class="gb-city-bus">▣</div><div class="gb-city-water">≈ ≈</div><div class="gb-city-note">Kawasan ilustratif · Bukan peta lokasi sebenarnya</div></div><div class="gb-city-side"><div class="gb-city-buttons">${[['air','Air hujan'],['limbah','Zero Waste'],['mobilitas','Mobilitas'],['iklim','Ruang hijau']].map((p,i)=>`<button type="button" data-city="${p[0]}" aria-pressed="${i===0}">${p[1]}</button>`).join('')}</div><h3 id="gb-city-title">Air hujan dan bangunan</h3><p id="gb-city-description"></p><p class="gb-small">Koneksi sistem bersifat edukatif; dampak spesifik setiap kawasan memerlukan data setempat.</p><div class="gb-related"><a href="${roots.zero}">Baca juga: Zero Waste ↗</a><a href="${roots.media}">Baca juga: Kota untuk Manusia ↗</a></div></div></div></div></section>
  <section class="gb-section gb-soft" id="kajian"><div class="gb-wrap"><div class="gb-kicker">06 / BERBASIS BUKTI</div><h2>Standar dan data membantu kita bertanya lebih tepat.</h2><div class="gb-grid gb-grid-3"><article class="gb-card"><span class="gb-overline">REGULASI INDONESIA</span><h3>Penilaian Bangunan Gedung Hijau</h3><p>Permen PUPR Nomor 21 Tahun 2021 mengatur penilaian kinerja Bangunan Gedung Hijau. JDIH BPK mencatat statusnya berlaku per 29 Oktober 2026. Periksa persyaratan sesuai jenis proyek.</p><a href="https://peraturan.bpk.go.id/Details/217002/permen-pupr-no-21-tahun-2021" target="_blank" rel="noopener noreferrer">Lihat peraturan resmi ↗</a></article><article class="gb-card"><span class="gb-overline">SERTIFIKASI</span><h3>GREENSHIP dan EDGE</h3><p>GREENSHIP menilai beragam dimensi kinerja. EDGE berfokus pada efisiensi energi, air, dan energi terkandung material dibandingkan baseline terkait. Metode penilaian berbeda.</p><a href="https://gbcindonesia.org/certification" target="_blank" rel="noopener noreferrer">Lihat penjelasan GBCI ↗</a></article><article class="gb-card"><span class="gb-overline">PENGUKURAN</span><h3>Desain vs kinerja nyata</h3><p>Performa yang diperkirakan ketika desain perlu dibedakan dari konsumsi aktual setelah bangunan digunakan. Pengukuran, pemeliharaan, dan evaluasi tetap diperlukan.</p><a href="https://www.energystar.gov/buildings/benchmark/understand-metrics/what-eui" target="_blank" rel="noopener noreferrer">Pelajari EUI ↗</a></article></div><div class="gb-sources"><h3>Sumber dan transparansi</h3><p>Sumber dipilih dari lembaga pemerintah, badan standar atau organisasi yang mengembangkan sistem penilaian. Tautan berikut dapat digunakan untuk menelusuri klaim pada halaman ini.</p><ol>${citations.map((r)=>`<li><a href="${r[2]}" target="_blank" rel="noopener noreferrer">${r[0]} — ${r[1]} ↗</a></li>`).join('')}</ol><p class="gb-small">Diperiksa pada 29 Oktober 2026. Ilustrasi bersifat edukatif dan tidak menyatakan hasil pengukuran bangunan tertentu.</p></div></div></section>
  <section class="gb-section" id="aksi"><div class="gb-wrap gb-split"><div><div class="gb-kicker">07 / MULAI DARI BANGUNAN KITA</div><h2>Perubahan tidak harus dimulai dengan membangun ulang.</h2><p class="gb-lead">Mulai dari observasi yang sederhana, lalu pilih tindakan yang sesuai dengan kondisi bangunan dan kemampuan pengelolaannya.</p><p>Centang hal yang sudah Anda periksa. Hasilnya dapat disalin sebagai daftar tindak lanjut — bukan penilaian sertifikasi atau audit profesional.</p></div><div class="gb-audit"><h3>Audit mandiri — observasi awal</h3><div id="gb-audit-list">${[['Catatan listrik','Mencatat konsumsi listrik selama beberapa bulan.'],['Peneduh','Memeriksa jendela yang menerima panas matahari langsung.'],['Air','Memeriksa keran, pipa, dan potensi kebocoran.'],['Ventilasi','Memeriksa kenyamanan, kelembapan, dan kualitas udara.'],['Material','Menilai apa yang masih bisa diperbaiki/digunakan kembali.'],['Sampah','Meninjau pemilahan sampah dan layanan pengolahannya.']].map((t,i)=>`<label class="gb-audit-item"><input type="checkbox" data-audit="${i}"><span><strong>${t[0]}</strong><small>${t[1]}</small></span></label>`).join('')}</div><div class="gb-audit-foot"><span id="gb-audit-progress">0 dari 6 diperiksa</span><button type="button" id="gb-copy-audit">Salin catatan</button></div><p class="gb-small gb-copy-status" id="gb-copy-status" role="status" aria-live="polite"></p><div id="gb-copy-fallback" hidden><label for="gb-copy-text">Salin catatan secara manual</label><textarea id="gb-copy-text" readonly rows="8"></textarea><p class="gb-small">Pilih seluruh teks, lalu salin dengan Ctrl+C atau menu perangkat Anda.</p></div></div></div></section>
  <section class="gb-end"><div class="gb-wrap"><div class="gb-kicker">NALAR LESTARI</div><h2>Bangunan yang lebih baik dimulai dari pertanyaan yang lebih baik.</h2><p>Kenali kondisinya. Pahami cara kerjanya. Ukur dampaknya. Lakukan perbaikan yang dapat dipertanggungjawabkan.</p><strong>Berpikir Kritis, Bertindak Lestari.</strong><div class="gb-end-actions"><a href="${roots.hub}">Jelajahi wawasan lainnya ↗</a><a href="#mulai">Kembali ke atas ↑</a></div></div></section>
</div>`;

const mark = (id) => document.getElementById(id);
function updatePrinciple(id){
  const p = principles.find(x=>x.id===id) || principles[0];
  const i = principles.indexOf(p);
  document.querySelectorAll('[data-principle]').forEach(b=>{const selected=b.dataset.principle===id;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;});
  mark('gb-principle-panel').setAttribute('aria-labelledby','gb-tab-'+id);
  mark('gb-detail-title').textContent = p.title;
  mark('gb-detail-body').textContent = p.body;
  mark('gb-detail-try').textContent = p.try;
  document.querySelector('.gb-detail-mark').textContent=String(i+1).padStart(2,'0');
}
updatePrinciple('tapak');
const principleButtons=[...document.querySelectorAll('[data-principle]')];
principleButtons.forEach((b,i)=>{b.addEventListener('click',()=>updatePrinciple(b.dataset.principle));b.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?principleButtons.length-1:(i+(e.key==='ArrowRight'?1:-1)+principleButtons.length)%principleButtons.length;principleButtons[n].focus();updatePrinciple(principleButtons[n].dataset.principle);});});
function lab(){
  const shade=mark('gb-shade').checked, roof=mark('gb-roof').checked,air=mark('gb-air').checked;
  mark('gb-shade-layer').setAttribute('opacity',shade?'1':'0');mark('gb-roof-layer').setAttribute('opacity',roof?'1':'0');mark('gb-air-layer').setAttribute('opacity',air?'1':'0');
  mark('gb-heat-layer').setAttribute('opacity',shade?'0.4':'1');
  const active=[shade&&'Peneduh membantu membatasi sinar matahari langsung yang mengenai atap.',roof&&'Insulasi atap menghambat perpindahan panas.',air&&'Ventilasi menggambarkan kemungkinan pergerakan udara melalui bukaan.'].filter(Boolean);
  mark('gb-lab-summary').textContent=active.length?active.join(' '):'Coba aktifkan salah satu pilihan untuk melihat perubahan pada ilustrasi.';
}
['gb-shade','gb-roof','gb-air'].forEach(id=>mark(id).addEventListener('change',lab));
function calculate(){
  const kwh=Number(mark('gb-kwh').value),area=Number(mark('gb-area').value);
  const output=mark('gb-eui');
  if(!mark('gb-kwh').value.trim()||!mark('gb-area').value.trim()||!Number.isFinite(kwh)||!Number.isFinite(area)||kwh<0||area<=0){output.textContent='—';return;}
  output.textContent=(kwh/area).toLocaleString('id-ID',{maximumFractionDigits:1});
}
['gb-kwh','gb-area'].forEach(id=>mark(id).addEventListener('input',calculate));
mark('gb-reset').addEventListener('click',()=>{mark('gb-kwh').value=6000;mark('gb-area').value=100;calculate();});calculate();
const cityExplanations={
  air:['Air hujan dan bangunan','Air dari atap menjadi bagian dari limpasan kawasan. Drainase, infiltrasi, dan penggunaan ulang harus dipertimbangkan dengan memperhatikan kondisi tanah, kualitas air, dan aturan setempat.'],
  limbah:['Bangunan dan Zero Waste','Aktivitas konstruksi, renovasi, pemeliharaan, serta penggunaan sehari-hari menghasilkan material sisa. Pencegahan, perbaikan, pemakaian ulang, dan pemilahan perlu dipikirkan sebagai sistem.'],
  mobilitas:['Lokasi bangunan memengaruhi perjalanan','Bangunan yang terhubung dengan layanan, jalur aman untuk berjalan kaki, dan angkutan umum berpotensi mengurangi ketergantungan perjalanan kendaraan pribadi. Ketersediaan pilihan setempat tetap menentukan.'],
  iklim:['Ruang hijau dan mikroklimat','Vegetasi dapat memberi peneduhan dan berkontribusi pada kondisi mikroklimat, tetapi pemilihan jenis tanaman, perawatan, ruang akar, dan kondisi tapak tetap penting.']
};
function city(id){const d=cityExplanations[id]||cityExplanations.air;mark('gb-city-title').textContent=d[0];mark('gb-city-description').textContent=d[1];document.querySelectorAll('[data-city]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.city===id)));}
document.querySelectorAll('[data-city]').forEach(b=>b.addEventListener('click',()=>city(b.dataset.city)));city('air');
function audit(){const n=document.querySelectorAll('#gb-audit-list input:checked').length;mark('gb-audit-progress').textContent=`${n} dari 6 diperiksa`;}
document.querySelectorAll('#gb-audit-list input').forEach(b=>b.addEventListener('change',audit));
mark('gb-copy-audit').addEventListener('click',async()=>{
  const lines=[...document.querySelectorAll('.gb-audit-item')].map((label,i)=>`${label.querySelector('input').checked?'[x]':'[ ]'} ${i+1}. ${label.querySelector('strong').textContent}: ${label.querySelector('small').textContent}`);
  const note='Audit Mandiri Bangunan — Nalar Lestari\nObservasi awal, bukan sertifikasi.\n\n'+lines.join('\n');
  const status=mark('gb-copy-status'), fallback=mark('gb-copy-fallback');
  try{
    if(!navigator.clipboard?.writeText)throw new Error('Clipboard tidak tersedia');
    await navigator.clipboard.writeText(note);
    fallback.hidden=true;status.textContent='Catatan berhasil disalin.';
  }catch{
    fallback.hidden=false;mark('gb-copy-text').value=note;mark('gb-copy-text').focus();mark('gb-copy-text').select();
    status.textContent='Salin teks yang dipilih secara manual.';
  }
});
