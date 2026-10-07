/* ============================================
   KAGERŌ — Anime Çizgi Roman Platformu
   Ana JavaScript
   ============================================ */

// i18n.js'i otomatik yükle (tüm sayfalarda dil seçici görünsün)
(function loadI18n() {
  if (typeof I18N !== 'undefined') return; // zaten yüklü
  const script = document.createElement('script');
  script.src = 'js/i18n.js';
  script.async = false;
  document.head.appendChild(script);
})();

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // NAVBAR SCROLL
  // ============================================
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

  // ============================================
  // MOBILE MENU
  // ============================================
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

  // ============================================
  // İLERLEME ÇUBUĞU
  // ============================================
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

  // ============================================
  // TAM EKRAN
  // ============================================
  window.toggleFullscreen = function() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  // ============================================
  // KLAVYE NAVİGASYONU
  // ============================================
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('readerContainer')) {
      if (e.key === 'ArrowRight') window.scrollBy({ top: 500, behavior: 'smooth' });
      if (e.key === 'ArrowLeft') window.scrollBy({ top: -500, behavior: 'smooth' });
    }
  });

  // ============================================
  // SEKMELER
  // ============================================
  window.showTab = function(tabId, event) {
    const currentPage = document.querySelector('.char-page.active') || document;
    currentPage.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    currentPage.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    const target = currentPage.querySelector('#' + tabId) || document.getElementById(tabId);
    if (target) target.classList.add('active');
  };

  // ============================================
  // GÜÇ BARLARI ANİMASYONU
  // ============================================
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

  // ============================================
  // YORUM GÖNDERME
  // ============================================
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

  // ============================================
  // ANKET OYLAMA
  // ============================================
  document.querySelectorAll('.poll-option').forEach(option => {
    option.addEventListener('click', () => {
      alert(`"${option.textContent.trim()}" için oy kullandınız! (Demo)`);
    });
  });

  // ============================================
  // FADE-IN
  // ============================================
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

  // ============================================
  // KONSOL
  // ============================================
  console.log('%cKAGERŌ 陽炎', 'color: #E63946; font-size: 28px; font-weight: 900; font-family: serif; letter-spacing: 4px;');
  console.log('%c"Her hikaye bir iz bırakır."', 'color: #F4A261; font-style: italic; font-size: 14px;');
});