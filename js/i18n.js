/* ============================================
   KAGERŌ — i18n (Internationalization)
   Multi-language support: TR, EN, JP
   ============================================ */

const I18N = {
  tr: {
    code: 'tr',
    flag: '🇹🇷',
    name: 'Türkçe',
    site_title: 'KAGERŌ — Anime Çizgi Roman Platformu',
    nav: {
      home: 'Ana Sayfa',
      chapters: 'Bölümler',
      characters: 'Karakterler',
      world: 'Dünya',
      community: 'Topluluk',
      shop: 'Mağaza'
    },
    reader: {
      back: '← Bölüm Arşivi',
      prev: '← Önceki Bölüm',
      next: 'Sonraki Bölüm →',
      archive: 'Bölüm Arşivi →',
      page: 'Sayfa',
      comments: '💬 Yorumlar',
      comment_placeholder: 'Bu bölüm hakkında ne düşünüyorsun?',
      comment_send: 'Gönder',
      not_found: 'Bölüm Bulunamadı',
      not_found_desc: 'Bu bölüm henüz yayınlanmadı veya mevcut değil.',
      back_to_archive: 'Bölüm Arşivine Dön',
      loading: 'Yükleniyor...'
    },
    hero: {
      read_now: 'Okumaya Başla',
      read_final: 'Finali Oku',
      explore: 'Dünyayı Keşfet',
      tagline: '"Her ölüm bir iz bırakır. Ama bazıları... bazıları çiçek açar."'
    },
    footer: {
      copyright: '© 2026 KAGERŌ — Anime Çizgi Roman Platformu. Tüm hakları saklıdır.',
      slogan: 'Her hikaye bir iz bırakır.'
    },
    language_selector: {
      label: 'Dil',
      choose: 'Dil Seç'
    }
  },

  en: {
    code: 'en',
    flag: '🇬🇧',
    name: 'English',
    site_title: 'KAGERŌ — Anime Manga Platform',
    nav: {
      home: 'Home',
      chapters: 'Chapters',
      characters: 'Characters',
      world: 'World',
      community: 'Community',
      shop: 'Shop'
    },
    reader: {
      back: '← Chapter Archive',
      prev: '← Previous Chapter',
      next: 'Next Chapter →',
      archive: 'Chapter Archive →',
      page: 'Page',
      comments: '💬 Comments',
      comment_placeholder: 'What do you think about this chapter?',
      comment_send: 'Send',
      not_found: 'Chapter Not Found',
      not_found_desc: 'This chapter has not been published yet or does not exist.',
      back_to_archive: 'Back to Chapter Archive',
      loading: 'Loading...'
    },
    hero: {
      read_now: 'Start Reading',
      read_final: 'Read Final',
      explore: 'Explore the World',
      tagline: '"Every death leaves a trace. But some... some bloom into flowers."'
    },
    footer: {
      copyright: '© 2026 KAGERŌ — Anime Manga Platform. All rights reserved.',
      slogan: 'Every story leaves a trace.'
    },
    language_selector: {
      label: 'Language',
      choose: 'Choose Language'
    }
  },

  jp: {
    code: 'jp',
    flag: '🇯🇵',
    name: '日本語',
    site_title: 'KAGERŌ — アニメ漫画プラットフォーム',
    nav: {
      home: 'ホーム',
      chapters: 'チャプター',
      characters: 'キャラクター',
      world: '世界観',
      community: 'コミュニティ',
      shop: 'ショップ'
    },
    reader: {
      back: '← チャプター一覧',
      prev: '← 前のチャプター',
      next: '次のチャプター →',
      archive: 'チャプター一覧 →',
      page: 'ページ',
      comments: '💬 コメント',
      comment_placeholder: 'このチャプターについてどう思いますか？',
      comment_send: '送信',
      not_found: 'チャプターが見つかりません',
      not_found_desc: 'このチャプターはまだ公開されていないか、存在しません。',
      back_to_archive: 'チャプター一覧へ戻る',
      loading: '読み込み中...'
    },
    hero: {
      read_now: '読み始める',
      read_final: '最終話を読む',
      explore: '世界を探索',
      tagline: '「すべての死は痕跡を残す。しかし、あるものは…花を咲かせる。」'
    },
    footer: {
      copyright: '© 2026 KAGERŌ — アニメ漫画プラットフォーム. All rights reserved.',
      slogan: 'すべての物語は痕跡を残す。'
    },
    language_selector: {
      label: '言語',
      choose: '言語を選択'
    }
  }
};

/* ============================================
   Dil Yöneticisi
   ============================================ */

class LanguageManager {
  constructor() {
    this.currentLang = this._detectLang();
    this.availableLangs = ['tr', 'en', 'jp'];
    this._init();
  }

  _detectLang() {
    // 1. URL parametresi (?lang=en)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && I18N[urlLang]) return urlLang;

    // 2. localStorage
    try {
      const saved = localStorage.getItem('kagero_lang');
      if (saved && I18N[saved]) return saved;
    } catch (e) {}

    // 3. Tarayıcı dili
    const browserLang = navigator.language.substring(0, 2);
    if (browserLang === 'tr') return 'tr';
    if (browserLang === 'ja') return 'jp';
    if (browserLang === 'en') return 'en';

    // 4. Varsayılan
    return 'tr';
  }

  _init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.applyLanguage(this.currentLang);
      this._injectSelector();
    });
  }

  applyLanguage(lang) {
    if (!I18N[lang]) return;

    this.currentLang = lang;
    const dict = I18N[lang];

    // HTML lang attribute
    document.documentElement.lang = lang === 'jp' ? 'ja' : lang;

    // Sayfa başlığı
    const titleEl = document.querySelector('title');
    if (titleEl) titleEl.textContent = dict.site_title;

    // Navbar linkleri
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const navKeys = ['home', 'chapters', 'characters', 'world', 'community', 'shop'];
    navLinks.forEach((link, i) => {
      if (navKeys[i]) link.textContent = dict.nav[navKeys[i]];
    });

    // Reader string'leri (varsa)
    this._updateReaderStrings(dict);

    // Footer
    const footerLinks = document.querySelectorAll('footer .footer-links a');
    footerLinks.forEach((link, i) => {
      if (navKeys[i]) link.textContent = dict.nav[navKeys[i]];
    });

    // localStorage'a kaydet
    try {
      localStorage.setItem('kagero_lang', lang);
    } catch (e) {}

    // Dil butonunu güncelle
    this._updateSelectorUI();

    // Özel event tetikle (chapters.js dinleyebilir)
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { lang: lang, dict: dict } 
    }));
  }

  _updateReaderStrings(dict) {
    // Reader topbar
    const backBtn = document.querySelector('.back-btn');
    if (backBtn && dict.reader) backBtn.textContent = dict.reader.back;

    // Reader nav
    const navBtns = document.querySelectorAll('.reader-nav .nav-btn');
    navBtns.forEach(btn => {
      if (btn.classList.contains('disabled')) {
        btn.textContent = dict.reader.prev;
      } else if (btn.href && btn.href.includes('reader.html')) {
        // İçeriğe göre karar ver — basit yaklaşım
        if (btn.textContent.includes('Önceki') || btn.textContent.includes('Previous') || btn.textContent.includes('前の')) {
          btn.textContent = dict.reader.prev;
        } else if (btn.textContent.includes('Sonraki') || btn.textContent.includes('Next') || btn.textContent.includes('次')) {
          btn.textContent = dict.reader.next;
        } else {
          btn.textContent = dict.reader.archive;
        }
      }
    });

    // Yorumlar
    const commentsTitle = document.querySelector('.comments-title');
    if (commentsTitle) commentsTitle.textContent = dict.reader.comments;

    const commentInput = document.querySelector('.comment-input');
    if (commentInput) commentInput.placeholder = dict.reader.comment_placeholder;

    const commentSubmit = document.querySelector('.comment-submit');
    if (commentSubmit) commentSubmit.textContent = dict.reader.comment_send;
  }

  _injectSelector() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Zaten varsa atla
    if (document.getElementById('langSelector')) return;

    // Navbar'a dil seçici ekle
    const selector = document.createElement('div');
    selector.className = 'lang-selector';
    selector.id = 'langSelector';
    selector.innerHTML = `
      <button class="lang-toggle" id="langToggle" aria-label="Dil Seç">
        <span class="lang-flag">${I18N[this.currentLang].flag}</span>
        <span class="lang-code">${this.currentLang.toUpperCase()}</span>
        <span class="lang-arrow">▼</span>
      </button>
      <div class="lang-dropdown" id="langDropdown">
        ${this.availableLangs.map(code => `
          <a href="?lang=${code}" class="lang-option" data-lang="${code}">
            <span class="lang-flag">${I18N[code].flag}</span>
            <span class="lang-name">${I18N[code].name}</span>
          </a>
        `).join('')}
      </div>
    `;

    // Navbar'ın sağ tarafına ekle (hamburger'dan önce)
    const menuToggle = navbar.querySelector('.menu-toggle');
    if (menuToggle) {
      navbar.insertBefore(selector, menuToggle);
    } else {
      navbar.appendChild(selector);
    }

    // Tıklama olaylarını bağla
    const toggle = document.getElementById('langToggle');
    const dropdown = document.getElementById('langDropdown');

    if (toggle && dropdown) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });

      // Dil seçimi
      dropdown.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = opt.dataset.lang;
          
          // URL'yi güncelle
          const url = new URL(window.location.href);
          url.searchParams.set('lang', lang);
          window.history.replaceState({}, '', url.toString());
          
          this.applyLanguage(lang);
          dropdown.classList.remove('open');
          
          // Reader'ı yeniden yükle
          if (document.getElementById('readerContainer') && typeof loadChapter === 'function') {
            loadChapter(this.currentLang);
          }
        });
      });

      // Dışarı tıklama
      document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });

      // ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') dropdown.classList.remove('open');
      });
    }
  }

  _updateSelectorUI() {
    const flag = document.querySelector('#langToggle .lang-flag');
    const code = document.querySelector('#langToggle .lang-code');
    if (flag) flag.textContent = I18N[this.currentLang].flag;
    if (code) code.textContent = this.currentLang.toUpperCase();
  }

  get(key) {
    const dict = I18N[this.currentLang];
    const keys = key.split('.');
    let val = dict;
    for (const k of keys) {
      val = val?.[k];
    }
    return val || key;
  }
}

// Global olarak başlat
window.i18n = new LanguageManager();