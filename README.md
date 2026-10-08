# 🌸 KAGERŌ (陽炎)

> "Her hikaye bir iz bırakır."

KAGERŌ, anime çizgi roman ve webtoon yayınlayan bir platformdur. İlk serimiz **"幽霊花 — Hayalet Çiçekler"** ile yayın hayatına başlıyoruz.

## 🎯 Seri Hakkında

**Hayalet Çiçekler**, karanlık fantezi ve psikolojik gerilim türünde bir anime çizgi romanıdır. 5 ark, 50 bölümden oluşur.

## 🧭 Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa |
| `chapters.html` | Bölüm arşivi |
| `reader.html` | Bölüm okuyucu (`?chapter=N` ile açılır) |
| `characters.html` | Karakterler |
| `world.html` | Dünya / evren bilgileri |
| `shop.html` | Mağaza |
| `community.html` | Topluluk |

## 🗂️ Klasör Yapısı

```
css/style.css        Tüm site stilleri (tek kaynak)
js/main.js           Genel davranışlar (menü, tema, animasyon)
js/i18n.js           Dil desteği (TR / EN / JP)
js/chapters.js       Türkçe bölüm verisi (50 bölüm)
js/chapters-en.js    İngilizce çeviri (şu an 1. ve 49. bölüm)
js/chapters-jp.js    Japonca çeviri (şu an 1. ve 49. bölüm)
js/shop.js           Mağaza mantığı
assets/              Logo, ikon, karakter ve arka plan SVG'leri
social/              Sosyal medya kart şablonları
sw.js                Service worker (offline önbellek)
manifest.json        PWA ayarları
```

## 🌐 Dil Desteği

Okuyucu, seçili dilde çeviri yoksa Türkçe metne düşer. Yeni bir bölüm çevirmek için `chapters-en.js` ya da `chapters-jp.js` dosyasına `CHAPTERS_EN[N]` / `CHAPTERS_JP[N]` girişi eklemek yeterlidir.

## 🚀 Yerelde Çalıştırma

Herhangi bir derleme adımı yoktur. Statik dosyalardan oluşur:

```bash
python3 -m http.server 8000
```

Ardından tarayıcıda `http://localhost:8000` adresini aç.

## 📦 Yayınlama (GitHub Pages)

1. Dosyaları repoya gönder.
2. Repo ayarlarında **Settings → Pages** bölümüne gir.
3. Kaynak olarak ana dalı (`main`) ve kök dizini (`/`) seç.

**Önemli:** CSS ya da JS dosyalarında değişiklik yaptıktan sonra `sw.js` içindeki `CACHE_NAME` değerini artır (örn. `kagero-v1.0.5` → `kagero-v1.0.6`). Aksi halde ziyaretçilerin tarayıcısında eski dosyalar kalabilir.

## 🛠️ Bilinen Eksikler

- İngilizce ve Japonca çeviriler yalnızca 1. ve 49. bölümü kapsıyor.
- `chapters.js` tek dosya (~187 KB), tüm bölümler her sayfada yükleniyor.
- Google Fonts dış bağlantısına bağımlı.

## 📄 Lisans

Bkz. [LICENSE](LICENSE).
