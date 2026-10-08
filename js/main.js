/* ============================================
   KAGERŌ — Ana JavaScript
   + PWA Setup
   ============================================ */

// ============================================
// PWA SETUP (install butonu kaldırıldı)
// ============================================
(function setupPWA() {
  // Manifest link
  if (!document.querySelector('link[rel="manifest"]')) {
    const m = document.createElement('link');
    m.rel = 'manifest';
    m.href = 'manifest.json';
    document.head.appendChild(m);
  }

  // Theme color
  if (!document.querySelector('meta[name="theme-color"]')) {
    const t = document.createElement('meta');
    t.name = 'theme-color';
    t.content = '#0A0A0A';
    document.head.appendChild(t);
  }

  // Apple mobile web app
  if (!document.querySelector('meta[name="apple-mobile-web-app-capable"]')) {
    const a1 = document.createElement('meta');
    a1.name = 'apple-mobile-web-app-capable';
    a1.content = 'yes';
    document.head.appendChild(a1);

    const a2 = document.createElement('meta');
    a2.name = 'apple-mobile-web-app-status-bar-style';
    a2.content = 'black-translucent';
    document.head.appendChild(a2);

    const a3 = document.createElement('meta');
    a3.name = 'apple-mobile-web-app-title';
    a3.content = 'KAGERŌ';
    document.head.appendChild(a3);
  }

  // Apple touch icon (yeni K'sız ikon)
  if (!document.querySelector('link[rel="apple-touch-icon"]')) {
    const i = document.createElement('link');
    i.rel = 'apple-touch-icon';
    i.href = 'assets/icon-192-v2.svg';
    document.head.appendChild(i);
  }

  // Service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then((reg) => console.log('[KAGERŌ] SW aktif:', reg.scope))
        .catch((err) => console.warn('[KAGERŌ] SW hata:', err));
    });
  }

  // NOT: Install butonu tamamen kaldırıldı.
  // Tarayıcı, kullanıcı isterse otomatik olarak "Ana ekrana ekle" seçeneği sunar.
})();

// i18n.js'i otomatik yükle
(function loadI18n() {
  if (typeof I18N !== 'undefined') return;
  const script = document.createElement('script');
  script.src = 'js/i18n.js';
  script.async = false;
  document.head.appendChild(script);
})();

// translate.js'i otomatik yükle (Google Translate)
(function loadTranslate() {
  if (window.kageroTranslate) return;
  const script = document.createElement('script');
  script.src = 'js/translate.js';
  script.async = false;
  document.head.appendChild(script);
})();

document.addEventListener('DOMContentLoaded', () => {

  // NAVBAR SCROLL
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  let ticking = false;

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.classList.add('hidden');
          } else {
            navbar.classList.remove('hidden');
          }
          lastScroll = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // MOBILE MENU
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar ul');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') 
          && !navMenu.contains(e.target) 
          && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.textContent = '☰';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.textContent = '☰';
      }
    });
  }

  // İLERLEME ÇUBUĞU
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    let pbTicking = false;
    window.addEventListener('scroll', () => {
      if (!pbTicking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          progressBar.style.width = progress + '%';
          pbTicking = false;
        });
        pbTicking = true;
      }
    }, { passive: true });
  }

  // TAM EKRAN
  window.toggleFullscreen = function() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  // KLAVYE NAVİGASYONU
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('readerContainer')) {
      if (e.key === 'ArrowRight') window.scrollBy({ top: 500, behavior: 'smooth' });
      if (e.key === 'ArrowLeft') window.scrollBy({ top: -500, behavior: 'smooth' });
    }
  });

  // SEKMELER
  window.showTab = function(tabId, event) {
    const currentPage = document.querySelector('.char-page.active') || document;
    currentPage.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    currentPage.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    const target = currentPage.querySelector('#' + tabId) || document.getElementById(tabId);
    if (target) target.classList.add('active');
  };

  // GÜÇ BARLARI
  const powerFills = document.querySelectorAll('.power-fill');
  if (powerFills.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.dataset.width || bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => { bar.style.width = width; }, 150);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });
    powerFills.forEach(bar => {
      if (!bar.dataset.width) bar.dataset.width = bar.style.width;
      observer.observe(bar);
    });
  }

  // YORUM GÖNDERME
  const commentSubmit = document.querySelector('.comment-submit');
  const commentInput = document.querySelector('.comment-input');
  if (commentSubmit && commentInput) {
    commentSubmit.addEventListener('click', () => {
      const text = commentInput.value.trim();
      if (text) {
        alert('Yorumunuz gönderildi! (Demo)');
        commentInput.value = '';
      } else {
        alert('Lütfen bir yorum yazın.');
      }
    });
  }

  // ANKET
  document.querySelectorAll('.poll-option').forEach(option => {
    option.addEventListener('click', () => {
      alert(`"${option.textContent.trim()}" için oy kullandınız! (Demo)`);
    });
  });

  // FADE-IN
  const fadeElements = document.querySelectorAll(
    '.chapter-card, .character-card, .world-card, .product-card'
  );
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    fadeElements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(15px)';
      el.style.transition = `opacity 0.5s ease ${Math.min(i * 0.04, 0.4)}s, transform 0.5s ease ${Math.min(i * 0.04, 0.4)}s`;
      fadeObserver.observe(el);
    });
  }

  // KONSOL
  console.log('%cKAGERŌ 陽炎', 'color: #E63946; font-size: 28px; font-weight: 900; font-family: serif; letter-spacing: 4px;');
  console.log('%c"Her hikaye bir iz bırakır."', 'color: #F4A261; font-style: italic; font-size: 14px;');
});

/* ============================================
   NAVİGASYON VE SCROLL
   - Aynı sayfaya giden link (logo, Ana Sayfa) sayfayı en üste çıkarır.
   - Konum sadece tarayıcının "geri" tuşunda geri yüklenir.
   - Normal açılışta sayfa her zaman en üstten başlar.
   ============================================ */
(function navigationScroll() {
  const normalize = (p) => p.replace(/index\.html$/, '').replace(/\/+$/, '/');
  const here = normalize(window.location.pathname);
  const key = 'kagero_scroll_' + here;

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  let isBack = false;
  try {
    const nav = performance.getEntriesByType('navigation')[0];
    isBack = !!nav && nav.type === 'back_forward';
  } catch (e) {}

  let saveT;
  window.addEventListener('scroll', () => {
    clearTimeout(saveT);
    saveT = setTimeout(() => {
      try { sessionStorage.setItem(key, String(window.scrollY)); } catch (e) {}
    }, 200);
  }, { passive: true });

  if (isBack && !window.location.hash && !/reader\.html$/.test(here)) {
    window.addEventListener('load', () => {
      try {
        const y = parseInt(sessionStorage.getItem(key), 10);
        if (y > 0) setTimeout(() => window.scrollTo(0, y), 50);
      } catch (e) {}
    });
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (normalize(url.pathname) !== here) return;
    if (url.search !== window.location.search) return;
    if (url.hash) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ============================================
// YAPRAK SİSTEMİ — hafif, derinlikli
// Blur ve 3D kullanılmaz (mobilde kaydırmayı yavaşlatırdı).
// Kaydırma sırasında yapraklar kısa süre duraklar.
// ============================================
(function initPetals() {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.querySelector('.sakura-container');
  if (!container || reduce) return;

  container.innerHTML = '';
  const count = window.innerWidth < 700 ? 8 : 16;
  const rnd = (a, b) => a + Math.random() * (b - a);

  for (let i = 0; i < count; i++) {
    const d = Math.random();                 // 0 uzak, 1 yakın
    const size = 6 + d * 11;                 // px
    const op = 0.3 + d * 0.4;
    const dur = 17 - d * 6 + rnd(-2, 2);     // s
    const delay = -rnd(0, dur);
    const sway = rnd(3, 5.5);
    const swing = rnd(12, 30) + d * 10;
    const spin = rnd(4, 8);
    const drift = rnd(-120, 120);

    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.cssText = [
      `--x:${rnd(-2, 102).toFixed(2)}%`,
      `--s:${size.toFixed(1)}px`,
      `--dur:${dur.toFixed(2)}s`,
      `--delay:${delay.toFixed(2)}s`,
      `--op:${op.toFixed(2)}`,
      `--sway:${sway.toFixed(2)}s`,
      `--swing:${swing.toFixed(0)}px`,
      `--spin:${spin.toFixed(2)}s`,
      `--drift:${drift.toFixed(0)}px`
    ].join(';');

    const sw = document.createElement('div');
    sw.className = 'petal-sway';
    const body = document.createElement('div');
    body.className = 'petal-body';
    sw.appendChild(body);
    petal.appendChild(sw);
    container.appendChild(petal);
  }

  let stT;
  window.addEventListener('scroll', () => {
    document.documentElement.classList.add('is-scrolling');
    clearTimeout(stT);
    stT = setTimeout(() => document.documentElement.classList.remove('is-scrolling'), 180);
  }, { passive: true });
})();
