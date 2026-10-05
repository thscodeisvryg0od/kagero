/* ============================================
   KAGERŌ — Anime Çizgi Roman Platformu
   Ana JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // NAVBAR SCROLL
  // ============================================
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
      lastScroll = currentScroll;
    });
  }

  // ============================================
  // MOBILE MENU — ANİMASYONLU
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

    // Menü linkine tıklanınca kapat
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Dışarı tıklanınca kapat
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') 
          && !navMenu.contains(e.target) 
          && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // ESC ile kapat
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
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    });
  }

  // ============================================
  // TAM EKRAN
  // ============================================
  window.toggleFullscreen = function() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log('Tam ekran hatası:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // ============================================
  // KLAVYE NAVİGASYONU (Reader)
  // ============================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      window.scrollBy({ top: 500, behavior: 'smooth' });
    }
    if (e.key === 'ArrowLeft') {
      window.scrollBy({ top: -500, behavior: 'smooth' });
    }
  });

  // ============================================
  // SEKMELER (Karakter sayfası)
  // ============================================
  window.showTab = function(tabId, event) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    if (event && event.target) {
      event.target.classList.add('active');
    }
    
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');
  };

  // ============================================
  // GÜÇ BARLARI ANİMASYONU
  // ============================================
  const powerFills = document.querySelectorAll('.power-fill');
  
  if (powerFills.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.dataset.width || bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width;
          }, 200);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

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
      const pollName = option.closest('.sidebar-box')?.querySelector('.sidebar-title')?.textContent;
      alert(`"${option.textContent.trim()}" için oy kullandınız! (Demo)`);
    });
  });

  // ============================================
  // FADE-IN ANİMASYONU
  // ============================================
  const fadeElements = document.querySelectorAll(
    '.chapter-card, .character-card, .world-card, .product-card, .chapter-item, .forum-thread'
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
    }, { threshold: 0.1 });

    fadeElements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`;
      fadeObserver.observe(el);
    });
  }

  // ============================================
  // PANEL SCROLL REVEAL (Reader)
  // ============================================
  const panels = document.querySelectorAll('.panel-image, .panel-dialogue');
  
  if (panels.length > 0 && 'IntersectionObserver' in window) {
    const panelObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    panels.forEach(panel => {
      panel.style.opacity = '0';
      panel.style.transform = 'translateY(30px)';
      panel.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      panelObserver.observe(panel);
    });
  }

  // ============================================
  // KONSOL MESAJI
  // ============================================
  console.log('%cKAGERŌ 陽炎', 'color: #E63946; font-size: 28px; font-weight: 900; font-family: serif; letter-spacing: 4px;');
  console.log('%c"Her hikaye bir iz bırakır."', 'color: #F4A261; font-style: italic; font-size: 14px;');
  console.log('%c幽霊花 — Hayalet Çiçekler | 50 Bölüm | 5 Arc', 'color: #B0B0B0; font-size: 12px;');
});