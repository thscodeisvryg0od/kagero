/* ============================================
   幽霊花 — HAYALET ÇİÇEKLER
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
  // MOBILE MENU
  // ============================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar ul');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
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
      const progress = (scrollTop / docHeight) * 100;
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
  const fadeElements = document.querySelectorAll('.chapter-card, .character-card, .world-card, .product-card');
  
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

    fadeElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      fadeObserver.observe(el);
    });
  }

  // ============================================
  // KONSOL MESAJI
  // ============================================
  console.log('%c幽霊花 — HAYALET ÇİÇEKLER', 'color: #E63946; font-size: 24px; font-weight: bold; font-family: serif;');
  console.log('%c"Her ölüm bir iz bırakır. Ama bazıları... bazıları çiçek açar."', 'color: #F4A261; font-style: italic; font-size: 14px;');
});