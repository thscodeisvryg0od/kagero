/* ============================================
   KAGERŌ — i18n (Internationalization)
   Multi-language: TR, EN, JP
   ============================================ */

const I18N = {
  tr: {
    code: 'tr', flag: '🇹🇷', name: 'Türkçe',
    site_title: 'KAGERŌ — Anime Çizgi Roman Platformu',
    nav: { home: 'Ana Sayfa', chapters: 'Bölümler', characters: 'Karakterler', world: 'Dünya', community: 'Topluluk', shop: 'Mağaza' },
    reader: {
      back: '← Bölüm Arşivi',
      prev: '← Önceki Bölüm',
      next: 'Sonraki Bölüm →',
      archive: 'Bölüm Arşivi →',
      bonus: '外伝 — Bonus Bölüm →',
      back_final: '← Final Bölüm',
      to_home: 'Ana Sayfa →',
      page: 'Sayfa',
      comments: '💬 Yorumlar',
      comment_placeholder: 'Bu bölüm hakkında ne düşünüyorsun?',
      comment_send: 'Gönder',
      not_found: 'Bölüm Bulunamadı',
      not_found_desc: 'Bu bölüm henüz yayınlanmadı veya mevcut değil.',
      loading: 'Yükleniyor...'
    },
    footer: {
      copyright: '© 2026 KAGERŌ — Anime Çizgi Roman Platformu. Tüm hakları saklıdır.',
      slogan: 'Her hikaye bir iz bırakır.'
    }
  },
  en: {
    code: 'en', flag: '🇬🇧', name: 'English',
    site_title: 'KAGERŌ — Anime Manga Platform',
    nav: { home: 'Home', chapters: 'Chapters', characters: 'Characters', world: 'World', community: 'Community', shop: 'Shop' },
    reader: {
      back: '← Chapter Archive',
      prev: '← Previous Chapter',
      next: 'Next Chapter →',
      archive: 'Chapter Archive →',
      bonus: 'Side Story — Bonus Chapter →',
      back_final: '← Final Chapter',
      to_home: 'Home →',
      page: 'Page',
      comments: '💬 Comments',
      comment_placeholder: 'What do you think about this chapter?',
      comment_send: 'Send',
      not_found: 'Chapter Not Found',
      not_found_desc: 'This chapter has not been published yet.',
      loading: 'Loading...'
    },
    footer: {
      copyright: '© 2026 KAGERŌ — Anime Manga Platform. All rights reserved.',
      slogan: 'Every story leaves a trace.'
    }
  },
  jp: {
    code: 'jp', flag: '🇯🇵', name: '日本語',
    site_title: 'KAGERŌ — アニメ漫画プラットフォーム',
    nav: { home: 'ホーム', chapters: 'チャプター', characters: 'キャラクター', world: '世界観', community: 'コミュニティ', shop: 'ショップ' },
    reader: {
      back: '← チャプター一覧',
      prev: '← 前のチャプター',
      next: '次のチャプター →',
      archive: 'チャプター一覧 →',
      bonus: '外伝 — ボーナスチャプター →',
      back_final: '← 最終話',
      to_home: 'ホーム →',
      page: 'ページ',
      comments: '💬 コメント',
      comment_placeholder: 'このチャプターについてどう思いますか？',
      comment_send: '送信',
      not_found: 'チャプターが見つかりません',
      not_found_desc: 'このチャプターはまだ公開されていません。',
      loading: '読み込み中...'
    },
    footer: {
      copyright: '© 2026 KAGERŌ — アニメ漫画プラットフォーム. All rights reserved.',
      slogan: 'すべての物語は痕跡を残す。'
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
    const b = navigator.language.substring(0, 2);
    if (b === 'tr') return 'tr';
    if (b === 'ja') return 'jp';
    if (b === 'en') return 'en';
    return 'tr';
  }

  _init() {
    const initFn = () => {
      this.applyLanguage(this.currentLang);
      this._injectSelector();
    };
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
    if (titleEl && !document.getElementById('readerContainer')) {
      titleEl.textContent = dict.site_title;
    }

    // Navbar links
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const navKeys = ['home', 'chapters', 'characters', 'world', 'community', 'shop'];
    navLinks.forEach((link, i) => {
      if (navKeys[i]) link.textContent = dict.nav[navKeys[i]];
    });

    // Footer links
    const footerLinks = document.querySelectorAll('footer .footer-links a');
    footerLinks.forEach((link, i) => {
      if (navKeys[i]) link.textContent = dict.nav[navKeys[i]];
    });

    // Footer copyright & slogan
    const footerPs = document.querySelectorAll('footer > p');
    if (footerPs[0]) footerPs[0].textContent = dict.footer.copyright;
    if (footerPs[1]) footerPs[1].innerHTML = dict.footer.slogan + ' <span style="color: var(--red);">🌸</span>';

    // Reader UI
    this._updateReaderStrings(dict);

    try { localStorage.setItem('kagero_lang', lang); } catch (e) {}
    this._updateSelectorUI();

    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { lang, dict } 
    }));
  }

  _updateReaderStrings(dict) {
    // Reader topbar back button
    const backBtn = document.querySelector('.back-btn');
    if (backBtn && dict.reader) backBtn.textContent = dict.reader.back;

    // Reader navigation buttons — with bonus support
    const navBtns = document.querySelectorAll('.reader-nav .nav-btn');
    navBtns.forEach(btn => {
      if (btn.classList.contains('disabled')) {
        btn.textContent = dict.reader.prev;
        return;
      }
      
      const href = btn.getAttribute('href') || '';
      const text = btn.textContent;
      
      // Bonus nav
      if (btn.classList.contains('bonus-nav') || text.includes('Bonus') || text.includes('外伝')) {
        if (href.includes('index.html')) {
          btn.textContent = dict.reader.to_home;
        } else {
          btn.textContent = dict.reader.bonus;
        }
        return;
      }
      
      // Final back
      if (href.includes('ch=50') && text.includes('Final')) {
        btn.textContent = dict.reader.back_final;
        return;
      }
      
      // Regular nav
      if (href.includes('reader.html')) {
        if (text.includes('Önceki') || text.includes('Previous') || text.includes('前の')) {
          btn.textContent = dict.reader.prev;
        } else if (text.includes('Sonraki') || text.includes('Next') || text.includes('次')) {
          btn.textContent = dict.reader.next;
        } else {
          btn.textContent = dict.reader.archive;
        }
      }
    });

    // Comments section
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