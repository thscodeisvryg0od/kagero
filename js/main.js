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
   SCROLL POZİSYONU KORUMA
   chapters.html ve diğer sayfalarda konum korunur
   ============================================ */
(function preserveScroll() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  
  // Reader'da scroll kaydetme — her bölüm baştan başlasın
  if (path === 'reader.html') return;
  
  const key = 'kagero_scroll_' + path;
  
  // Pozisyonu kaydet
  let saveTimeout;
  window.addEventListener('scroll', () => {
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      try {
        sessionStorage.setItem(key, window.scrollY);
      } catch (e) {}
    }, 150);
  }, { passive: true });
  
  // Linke tıklanmadan önce kaydet
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (link && !link.href.startsWith('#')) {
      try {
        sessionStorage.setItem(key, window.scrollY);
      } catch (e) {}
    }
  });
  
  // Sayfa yüklenince geri yükle
  window.addEventListener('load', () => {
    // Hash varsa (örneğin #world-ghost) scroll'u boz
    if (window.location.hash) return;
    
    try {
      const saved = sessionStorage.getItem(key);
      if (saved !== null) {
        const y = parseInt(saved, 10);
        if (!isNaN(y) && y > 0) {
          // Küçük gecikme ile içeriğin render olmasını bekle
          setTimeout(() => {
            window.scrollTo({ top: y, behavior: 'instant' });
          }, 100);
        }
      }
    } catch (e) {}
  });
})();

// ============================================
// YAPRAK SİSTEMİ — derinlikli, rastgele, hafif
// ============================================
(function initPetals() {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.querySelector('.sakura-container');
  if (!container || reduce) return;

  container.innerHTML = '';
  const isSmall = window.innerWidth < 700;
  const count = isSmall ? 12 : 24;
  const rnd = (a, b) => a + Math.random() * (b - a);

  for (let i = 0; i < count; i++) {
    // d: 0 = uzak (küçük, bulanık, yavaş), 1 = yakın (büyük, net, hızlı)
    const d = Math.random();
    const size = 7 + d * 13;                 // px
    const blur = (1 - d) * 1.4;              // px
    const op = 0.3 + d * 0.45;               // opaklık
    const dur = 16 - d * 6 + rnd(-2, 2);     // s — yakınlar daha hızlı düşer
    const delay = -rnd(0, dur);              // negatif: sayfa açılınca zaten düşüyor olsun
    const sway = rnd(2.8, 5.2);              // s
    const swing = rnd(14, 38) + d * 14;      // px
    const spin = rnd(3.5, 8) - d * 2;        // s
    const drift = rnd(-140, 140);            // px

    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.cssText = [
      `--x:${rnd(-2, 102).toFixed(2)}%`,
      `--s:${size.toFixed(1)}px`,
      `--dur:${dur.toFixed(2)}s`,
      `--delay:${delay.toFixed(2)}s`,
      `--op:${op.toFixed(2)}`,
      `--blur:${blur.toFixed(2)}px`,
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
})();
