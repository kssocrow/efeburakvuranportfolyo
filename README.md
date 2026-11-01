# Portfolyo — Efe Burak Vuran

Tek sayfalık, sunucu gerektirmeyen portfolyo sitesi. `index.html` dosyasına çift tıklayarak bilgisayarında da açabilirsin.

## Klasör yapısı

```
index.html          sayfa iskeleti + site verisi (metinler, proje listesi)
style/
  style.css         tüm tasarım (renkler, yerleşim, animasyonlar)
script/
  app.js            tüm davranış (editör, zoom, animasyonlar, oyun sistemi)
assets/             bütün görseller (gerçek dosyalar)
  hero-sahne/       hero'daki 5 katmanlı Fuji sahnesi
  hero-karga/       hero kargasının animasyon kareleri
  serit/rb1,rb2,rb3 hero altındaki pixel şerit katmanları + saksağan kareleri
  works/            örnek çalışma görselleri için ayrılmış klasörler (şimdilik boş)
  ...               düzenleyiciden yüklediğin yeni görseller de buraya düşer
```

CV butonu `assets/efe-burak-vuran-cv.pdf` dosyasını açar; PDF'ini bu adla `assets/` içine koy.

## GitHub Pages'e yükleme (ilk kez)

1. Bu klasörün **içindekileri** (`index.html`, `style`, `script`, `assets`, `README.md`) deponun köküne yükle.
   *Add file → Upload files → klasörleri sürükle → Commit changes.*
2. *Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.*

## İçerik güncelleme (düzenleme modu)

1. Siteyi `?edit` ile aç (örn. `.../index.html?edit`) veya `Ctrl/⌘ + Shift + E`.
2. Çalışma, proje, metin, sahne ve şeritleri düzenle. Değişiklikler o tarayıcıda otomatik saklanır.
3. Alttaki çubuktan **SİTE PAKETİ (ZIP)** indir.
4. ZIP'i aç; içindeki **`index.html`** ve **`assets/`** klasörünü GitHub'a yükle (aynı adlı dosyaların üzerine yazılır, klasörler birleşir).
   `style/` ve `script/` klasörlerine dokunman gerekmez.

`HTML İNDİR` düğmesi, görselleri HTML'in içine gömülü tek bir `index.html` üretir (hızlı deneme için). Düzenli yayın için **SİTE PAKETİ** önerilir.

## Tasarım / kod değişikliği

- Görünüm: `style/style.css`
- Davranış: `script/app.js`
- Bu iki dosyayı güncellediğinde (ör. yeni sürüm aldığında) GitHub'daki eskilerin üzerine yükle. Tarayıcı eskisini gösterirse `Ctrl/⌘ + Shift + R` ile yenile.
