/* ============================================
   KAGERŌ — i18n (Internationalization)
   Multi-language support: TR, EN, JP
   ============================================ */

const I18N = {
  tr: {
    code: 'tr', flag: '🇹🇷', name: 'Türkçe',
    site_title: 'KAGERŌ — Anime Çizgi Roman Platformu',
    nav: { home: 'Ana Sayfa', chapters: 'Bölümler', characters: 'Karakterler', world: 'Dünya', community: 'Topluluk', shop: 'Mağaza' },
    reader: {
      back: '← Bölüm Arşivi', prev: '← Önceki Bölüm', next: 'Sonraki Bölüm →',
      archive: 'Bölüm Arşivi →', page: 'Sayfa', comments: '💬 Yorumlar',
      comment_placeholder: 'Bu bölüm hakkında ne düşünüyorsun?', comment_send: 'Gönder'
    }
  },
  en: {
    code: 'en', flag: '🇬🇧', name: 'English',
    site_title: 'KAGERŌ — Anime Manga Platform',
    nav: { home: 'Home', chapters: 'Chapters', characters: 'Characters', world: 'World', community: 'Community', shop: 'Shop' },
    reader: {
      back: '← Chapter Archive', prev: '← Previous Chapter', next: 'Next Chapter →',
      archive: 'Chapter Archive →', page: 'Page', comments: '💬 Comments',
      comment_placeholder: 'What do you think about this chapter?', comment_send: 'Send'
    }
  },
  jp: {
    code: 'jp', flag: '🇯🇵', name: '日本語',
    site_title: 'KAGERŌ — アニメ漫画プラットフォーム',
    nav: { home: 'ホーム', chapters: 'チャプター', characters: 'キャラクター', world: '世界観', community: 'コミュニティ', shop: 'ショップ' },
    reader: {
      back: '← チャプター一覧', prev: '← 前のチャプター', next: '次のチャプター →',
      archive: 'チャプター一覧 →', page: 'ページ', comments: '💬 コメント',
      comment_placeholder: 'このチャプターについてどう思いますか？', comment_send: '送信'
    }
  }
};

class LanguageManager {
  constructor() {
    this.currentLang = this._detectLang();
    this.availableLangs = ['tr', 'en', 'jp'];
    this._init();
  }

  _detectLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && I18N[urlLang]) return urlLang;

    try {
      const saved = localStorage.getItem('kagero_lang');
      if (saved && I18N[saved]) return saved;
    } catch (e) {}

    const browserLang = navigator.language.substring(0, 2);
    if (browserLang === 'tr') return 'tr';
    if (browserLang === 'ja') return 'jp';
    if (browserLang === 'en') return 'en';
    return 'tr';
  }

  _init() {
    const initFn = () => {
      this.applyLanguage(this.currentLang);
      this._injectSelector();
    };

    // DOMContentLoaded zaten tetiklendiyse hemen çalıştır
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFn);
    } else {
      initFn();
    }
  }

  applyLanguage(lang) {
    if (!I18N[lang]) return;
    this.currentLang = lang;
    const dict = I18N[lang];

    document.documentElement.lang = lang === 'jp' ? 'ja' : lang;

    const titleEl = document.querySelector('title');
    if (titleEl) titleEl.textContent = dict.site_title;

    const navLinks = document.querySelectorAll('.navbar ul li a');
    const navKeys = ['home', 'chapters', 'characters', 'world', 'community', 'shop'];
    navLinks.forEach((link, i) => {
      if (navKeys[i]) link.textContent = dict.nav[navKeys[i]];
    });

    this._updateReaderStrings(dict);

    const footerLinks = document.querySelectorAll('footer .footer-links a');
    footerLinks.forEach((link, i) => {
      if (navKeys[i]) link.textContent = dict.nav[navKeys[i]];
    });

    try { localStorage.setItem('kagero_lang', lang); } catch (e) {}

    this._updateSelectorUI();
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, dict } }));
  }

  _updateReaderStrings(dict) {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn && dict.reader) backBtn.textContent = dict.reader.back;

    const navBtns = document.querySelectorAll('.reader-nav .nav-btn');
    navBtns.forEach(btn => {
      if (btn.classList.contains('disabled')) {
        btn.textContent = dict.reader.prev;
      } else if (btn.href && btn.href.includes('reader.html')) {
        if (btn.textContent.includes('Önceki') || btn.textContent.includes('Previous') || btn.textContent.includes('前の')) {
          btn.textContent = dict.reader.prev;
        } else if (btn.textContent.includes('Sonraki') || btn.textContent.includes('Next') || btn.textContent.includes('次')) {
          btn.textContent = dict.reader.next;
        } else if (btn.textContent.includes('Bonus')) {
          btn.textContent = '外伝 — Bonus →';
        } else {
          btn.textContent = dict.reader.archive;
        }
      }
    });

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
    if (document.getElementById('langSelector')) return;

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

    const menuToggle = navbar.querySelector('.menu-toggle');
    if (menuToggle) navbar.insertBefore(selector, menuToggle);
    else navbar.appendChild(selector);

    const toggle = document.getElementById('langToggle');
    const dropdown = document.getElementById('langDropdown');

    if (toggle && dropdown) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });

      dropdown.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = opt.dataset.lang;
          const url = new URL(window.location.href);
          url.searchParams.set('lang', lang);
          window.history.replaceState({}, '', url.toString());
          this.applyLanguage(lang);
          dropdown.classList.remove('open');
          
          if (document.getElementById('readerContainer') && typeof loadChapter === 'function') {
            setTimeout(loadChapter, 50);
          }
        });
      });

      document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) dropdown.classList.remove('open');
      });

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
    for (const k of keys) val = val?.[k];
    return val || key;
  }
}

window.i18n = new LanguageManager();