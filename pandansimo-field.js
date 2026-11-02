/** Lapisan editorial kunjungan lapangan; data dan riwayat berada di research-data.json. */
const siteAsset=path=>new URL(String(path).replace(/^\/+/,''),import.meta.url).href;
export const imageryFrames = [
  {year:2013, url:siteAsset("/assets/citra-pandansimo/2013.jpg"), credit:'Google Earth · Image © 2026 CNES / Airbus'},
  {year:2016, url:siteAsset("/assets/citra-pandansimo/2016.jpg"), credit:'Google Earth · Image © 2026 Maxar Technologies'},
  {year:2019, url:siteAsset("/assets/citra-pandansimo/2019.jpg"), credit:'Google Earth · Image © 2026 Maxar Technologies'},
  {year:2021, url:siteAsset("/assets/citra-pandansimo/2021.jpg"), credit:'Google Earth · Image © 2026 Maxar Technologies'},
  {year:2024, url:siteAsset("/assets/citra-pandansimo/2024.jpg"), credit:'Google Earth · Image © 2026 Airbus'}
];

export function landUseSection() {
  return `<section id="perubahan-lahan" class="land-section">
    <span class="section-number">03 / PERUBAHAN KAWASAN</span>
    <div class="land-heading"><div><h2>Bagaimana kawasan terlihat berubah?</h2><p class="intro">Bandingkan pemandangan Pantai Baru Pandansimo yang diberi label tahun 2013 hingga 2024.</p></div><span class="land-period">2013 <span aria-hidden="true">→</span> 2024</span></div>
    <p>Pilih tahun untuk membandingkannya dengan gambar berlabel 2013. Lima gambar mewakili sebagian seri yang disiapkan tim; citra 2025 belum tersedia dalam bahan yang diterima.</p>
    <div class="imagery-browser"><div class="imagery-controls"><div><span class="eyebrow">PILIH TAHUN PEMBANDING</span><p>Tahun acuan tetap 2013.</p></div><div id="citra-years" class="imagery-years" role="group" aria-label="Pilih tahun citra pembanding">${imageryFrames.map(f=>`<button type="button" data-citra-year="${f.year}" aria-pressed="${f.year===2024}">${f.year}</button>`).join('')}</div></div>
      <div class="imagery-compare">
        <figure class="imagery-card"><div class="imagery-card-top"><span>GAMBAR ACUAN</span><strong>2013</strong></div><img src="${imageryFrames[0].url}" alt="Citra Google Earth berlabel 2013 yang menampilkan Pantai Baru Pandansimo" width="1536" height="1152" loading="lazy"><figcaption>${imageryFrames[0].credit}</figcaption></figure>
        <figure class="imagery-card"><div class="imagery-card-top"><span>GAMBAR PEMBANDING</span><strong id="citra-current-year">2024</strong></div><img id="citra-current-image" src="${imageryFrames.at(-1).url}" alt="Citra Google Earth berlabel 2024 yang menampilkan Pantai Baru Pandansimo" width="1536" height="1152" loading="lazy"><figcaption id="citra-current-credit">${imageryFrames.at(-1).credit}</figcaption></figure>
      </div><p id="citra-status" class="imagery-status" aria-live="polite">Menampilkan gambar berlabel 2013 dan 2024.</p>
    </div>
    <div class="land-insights"><div><span>01</span><strong>Jalan & bangunan</strong><p>Sejumlah struktur terlihat berbeda; ruas besar tampak di kiri atas gambar berlabel 2024.</p></div><div><span>02</span><strong>Bidang pertanian</strong><p>Petak-petak di bagian atas gambar tetap terlihat dengan warna dan tutupan yang bervariasi.</p></div><div><span>03</span><strong>Zona pesisir</strong><p>Vegetasi, pantai, dan kondisi ombak terlihat berbeda pada tiap gambar.</p></div></div>
    <p class="field-note"><strong>Batas pembacaan.</strong> Tahun mengikuti label pada gambar yang diberikan tim; tanggal perekaman terperinci belum tersedia. Tahun pada pemberitahuan hak cipta gambar bukan tanggal perekamannya. Perbedaan musim, pencahayaan, resolusi, dan pasang surut memengaruhi tampilan. Ini belum merupakan pengukuran luas, dan perbedaan garis pantai belum membuktikan abrasi atau akresi. Ringkasan tim yang semula membahas 2013–2025 memerlukan citra 2025 untuk diperlihatkan di sini.</p>
  </section>`;
}

export function setupLandUse() {
  const controls = document.getElementById('citra-years');
  if (!controls) return;
  controls.onclick = event => {
    const frame = imageryFrames.find(f => String(f.year) === event.target?.dataset?.citraYear);
    if (!frame) return;
    const image = document.getElementById('citra-current-image');
    image.src = frame.url;
    image.alt = `Citra Google Earth berlabel ${frame.year} yang menampilkan Pantai Baru Pandansimo`;
    document.getElementById('citra-current-year').textContent = frame.year;
    document.getElementById('citra-current-credit').textContent = frame.credit;
    document.getElementById('citra-status').textContent = `Menampilkan gambar berlabel 2013 dan ${frame.year}.`;
    controls.querySelectorAll('button[data-citra-year]').forEach(button => button.setAttribute('aria-pressed', button === event.target));
  };
}

export function fieldUpdateSection(data, esc, cite) {
  const image = (photo, extra = '') => `<figure class="field-photo ${extra}"><img src="${esc(photo.url)}" alt="${esc(photo.alt)}" loading="lazy" decoding="async"><figcaption>${esc(photo.caption)} <span>· Dokumentasi Nalar Lestari</span></figcaption></figure>`;
  const fieldSummaries = {
    'lapangan-plth': 'Panel surya dan kincir angin mendukung kebutuhan energi kawasan. Menurut petugas, aliran angin dan kapasitas baterai menjadi hal yang perlu dievaluasi.',
    'lapangan-biogas': 'Menurut peternak, fasilitas biogas tidak beroperasi saat kunjungan; kotoran masih perlu dikumpulkan secara manual.',
    'lapangan-pertanian': 'Lahan yang diidentifikasi dari masterplan tampak berupa padang rumput. Kesesuaian lokasinya dengan riset NASA masih perlu diverifikasi.',
    'lapangan-pesisir': 'Pasir hitam, cemara udang, warung, dan kegiatan pengunjung membentuk ruang wisata yang diamati tim.',
    'lapangan-petilasan': 'Cerita lisan tentang pandan dan macan hidup di sekitar petilasan dan membuka peluang pembelajaran budaya.'
  };
  const fieldIndex = data.observations.map((o, i) => `<a href="#${esc(o.anchor || o.observation_id || `lapangan-${i + 1}`)}">${esc(o.category)}</a>`).join('');
  const stories = data.observations.map((o, i) => `<article class="field-story" id="${esc(o.anchor || o.observation_id || `lapangan-${i + 1}`)}">
    <div class="field-copy"><div class="field-kicker"><span>${String(i + 1).padStart(2, '0')}</span> ${esc(o.category)}</div><h3>${esc(o.title || o.zone || 'Observasi lapangan')}</h3><div class="field-source">${esc(o.evidence_source || 'Observasi tim')}</div><p class="field-summary">${esc(fieldSummaries[o.anchor] || (o.paragraphs || [o.observation_description])[0])}</p>
      ${o.highlight ? `<div class="field-stat"><strong>${esc(o.highlight)}</strong><span>${esc(o.highlight_note)}</span></div>` : ''}
      <details class="field-details"><summary>Baca catatan dan batas temuan</summary>${(o.paragraphs || [o.observation_description]).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('')}${o.caveat ? `<p class="field-caveat">${esc(o.caveat)}</p>` : ''}${o.references && o.references.length ? `<p class="field-citations">${o.references.filter(id => data.references.some(r => r[0] === id)).map(cite).join('<br>')}</p>` : ''}</details>
    </div>
    <div class="field-visuals">${(o.images || []).map((p, j) => image(p, j === 0 ? 'field-photo-main' : 'field-photo-extra')).join('')}</div>
    ${o.proposed_solution ? `<div class="field-proposal"><span class="eyebrow">Alternatif untuk dikaji</span><h4>Pengumpulan yang mengikuti pekerjaan peternak</h4><p>${esc(o.proposed_solution)}</p><div class="mini-flow" aria-label="Alur konseptual biogas"><span>Kandang</span><span>Pengumpulan</span><span>Persiapan</span><span>Digester</span><span>Pemanfaatan</span></div><small>Ilustrasi konseptual, belum merupakan desain atau jaminan kinerja.</small></div>` : ''}
  </article>`).join('');
  return `<section id="pembaruan" class="field-section"><span class="section-number">02 / TEMUAN LAPANGAN</span><h2>Apa yang kami temukan di lapangan?</h2><p class="intro">Lima cerita memperlihatkan bagaimana fasilitas, ruang, dan kehidupan masyarakat saling terhubung.</p><p class="field-lead">Tim Nalar Lestari mendokumentasikan kondisi kawasan dan berbincang dengan petugas serta peternak. Foto memperlihatkan keadaan saat kunjungan; penjelasan narasumber, interpretasi, dan usulan ditandai dalam narasi.</p><div class="field-index" role="navigation" aria-label="Pilih cerita kunjungan lapangan">${fieldIndex}</div>
    ${image({url:siteAsset("/assets/pandansimo/pesisir.jpg"),alt:'Hamparan pasir hitam, ombak, dan deretan vegetasi di pesisir Pantai Baru Pandansimo',caption:'Bentang pesisir dan vegetasi di Pantai Baru Pandansimo.'}, 'field-hero-photo')}
    <div class="field-stories">${stories}</div>
    <div class="field-method"><strong>Bagaimana membaca temuan ini?</strong><p>Foto dan pengamatan menggambarkan kondisi yang terlihat saat kunjungan. Keterangan petugas dan peternak merupakan hasil wawancara. Interpretasi dan alternatif rekayasa masih perlu diuji dengan data serta bersama pengelola dan masyarakat.</p></div>
    <details class="field-history"><summary>Riwayat pembaruan kajian</summary>${data.revisions.map(r => `<div class="revision"><span class="date">${esc(r.date)}<br>v${esc(r.version)}</span><span>${esc(r.description)}</span></div>`).join('')}</details>
  </section>`;
}
