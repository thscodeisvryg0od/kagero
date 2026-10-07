/* ============================================
   KAGERŌ — i18n
   Multi-language: TR, EN, JP
   Dil seçici: footer'da basit link
   ============================================ */

const I18N = {
  tr: {
    code: 'tr', name: 'Türkçe',
    site_title: 'KAGERŌ — Anime Çizgi Roman Platformu',
    nav: { home: 'Ana Sayfa', chapters: 'Bölümler', characters: 'Karakterler', world: 'Dünya', community: 'Topluluk', shop: 'Mağaza' },
    reader: {
      back: '← Bölüm Arşivi', prev: '← Önceki Bölüm', next: 'Sonraki Bölüm →',
      archive: 'Bölüm Arşivi →', bonus: '外伝 — Bonus Bölüm →', back_final: '← Final Bölüm',
      to_home: 'Ana Sayfa →', page: 'Sayfa', comments: '💬 Yorumlar',
      comment_placeholder: 'Bu bölüm hakkında ne düşünüyorsun?', comment_send: 'Gönder'
    },
    language_selector: { label: 'Dil' }
  },
  en: {
    code: 'en', name: 'English',
    site_title: 'KAGERŌ — Anime Manga Platform',
    nav: { home: 'Home', chapters: 'Chapters', characters: 'Characters', world: 'World', community: 'Community', shop: 'Shop' },
    reader: {
      back: '← Chapter Archive', prev: '← Previous Chapter', next: 'Next Chapter →',
      archive: 'Chapter Archive →', bonus: 'Side Story — Bonus Chapter →', back_final: '← Final Chapter',
      to_home: 'Home →', page: 'Page', comments: '💬 Comments',
      comment_placeholder: 'What do you think about this chapter?', comment_send: 'Send'
    },
    language_selector: { label: 'Language' }
  },
  jp: {
    code: 'jp', name: '日本語',
    site_title: 'KAGERŌ — アニメ漫画プラットフォーム',
    nav: { home: 'ホーム', chapters: 'チャプター', characters: 'キャラクター', world: '世界観', community: 'コミュニティ', shop: 'ショップ' },
    reader: {
      back: '← チャプター一覧', prev: '← 前のチャプター', next: '次のチャプター →',
      archive: 'チャプター一覧 →', bonus: '外伝 — ボーナスチャプター →', back_final: '← 最終話',
      to_home: 'ホーム →', page: 'ページ', comments: '💬 コメント',
      comment_placeholder: 'このチャプターについてどう思いますか？', comment_send: '送信'
    },
    language_selector: { label: '言語' }
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

    // Navbar
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

    this._updateReaderStrings(dict);

    try { localStorage.setItem('kagero_lang', lang); } catch (e) {}
    this._updateSelectorUI();

    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { lang, dict } 
    }));
  }

  _updateReaderStrings(dict) {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn && dict.reader) backBtn.textContent = dict.reader.back;

    const navBtns = document.querySelectorAll('.reader-nav .nav-btn');
    navBtns.forEach(btn => {
      if (btn.classList.contains('disabled')) {
        btn.textContent = dict.reader.prev;
        return;
      }
      const href = btn.getAttribute('href') || '';
      const text = btn.textContent;
      
      if (btn.classList.contains('bonus-nav') || text.includes('Bonus') || text.includes('外伝')) {
        if (href.includes('index.html')) btn.textContent = dict.reader.to_home;
        else btn.textContent = dict.reader.bonus;
        return;
      }
      if (href.includes('ch=50') && text.includes('Final')) {
        btn.textContent = dict.reader.back_final;
        return;
      }
      if (href.includes('reader.html')) {
        if (text.includes('Önceki') || text.includes('Previous') || text.includes('前の')) btn.textContent = dict.reader.prev;
        else if (text.includes('Sonraki') || text.includes('Next') || text.includes('次')) btn.textContent = dict.reader.next;
        else btn.textContent = dict.reader.archive;
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
    const footer = document.querySelector('footer');
    if (!footer) return;
    if (document.getElementById('langSelector')) return;

    const dict = I18N[this.currentLang];

    const selector = document.createElement('div');
    selector.className = 'lang-selector-footer';
    selector.id = 'langSelector';
    selector.innerHTML = `
      <span class="lang-label">${dict.language_selector.label}</span>
      <div class="lang-links">
        ${this.availableLangs.map((code, i) => `
          ${i > 0 ? '<span class="lang-sep">·</span>' : ''}
          <a href="?lang=${code}" class="lang-link ${code === this.currentLang ? 'active' : ''}" data-lang="${code}">${code.toUpperCase()}</a>
        `).join('')}
      </div>
    `;

    // Footer'da footer-logo ile footer-links arasına ekle
    const footerLinks = footer.querySelector('.footer-links');
    if (footerLinks) {
      footer.insertBefore(selector, footerLinks);
    } else {
      footer.appendChild(selector);
    }

    // Dil linkleri
    selector.querySelectorAll('.lang-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.dataset.lang;
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
        this.applyLanguage(lang);
      });
    });
  }

  _updateSelectorUI() {
    const links = document.querySelectorAll('#langSelector .lang-link');
    links.forEach(link => {
      if (link.dataset.lang === this.currentLang) link.classList.add('active');
      else link.classList.remove('active');
    });
    // Label güncelle
    const label = document.querySelector('#langSelector .lang-label');
    if (label) label.textContent = I18N[this.currentLang].language_selector.label;
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