/* =============================================
   SGM – Smart Generators Management
   JavaScript – Arabic RTL + Anbar Page Support
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initCounterAnimations();
  initBackToTop();
  initActiveNavLinks();
  initProgressBars();
});

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Keep scrolled if starts scrolled (e.g. anbar page)
  if (window.scrollY > 50 || navbar.classList.contains('scrolled')) {
    navbar.classList.add('scrolled');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      // Only remove if not forced-scrolled (anbar page)
      if (!navbar.dataset.forceScrolled) {
        navbar.classList.remove('scrolled');
      }
    }
  }, { passive: true });
}

// =============================================
// MOBILE MENU
// =============================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  const mobileLinks = document.querySelectorAll('.mobile-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// =============================================
// SCROLL ANIMATIONS
// =============================================
function initScrollAnimations() {
  const selectors = [
    '.feature-card',
    '.system-card',
    '.benefit-item',
    '.stat-card',
    '.ci-card',
    '.district-card',
    '.ab-card',
    '.rp-phase',
    '.st-item',
    '.oh-item',
    '.atc-card',
    '.section-header',
  ];

  selectors.forEach((selector, sIdx) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (!el.classList.contains('reveal') && !el.classList.contains('reveal-left')) {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.08}s`;
      }
    });
  });

  // Left reveals
  ['.stats-left', '.app-cta-text', '.process-flow', '.overview-text'].forEach(sel => {
    document.querySelector(sel)?.classList.add('reveal-left');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));
}

// =============================================
// COUNTER ANIMATIONS
// =============================================
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-target]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2200;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    if (target >= 10000) {
      el.textContent = current.toLocaleString('ar-IQ');
    } else {
      el.textContent = current;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      if (target >= 10000) {
        el.textContent = target.toLocaleString('ar-IQ');
      } else {
        el.textContent = target;
      }
    }
  }

  requestAnimationFrame(update);
}

// =============================================
// BACK TO TOP
// =============================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =============================================
// ACTIVE NAV LINKS (scroll spy)
// =============================================
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            link.classList.toggle('active', href === `#${entry.target.id}`);
          }
        });
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: '-80px 0px 0px 0px'
  });

  sections.forEach(s => spy.observe(s));
}

// =============================================
// PROGRESS BARS (for district cards)
// =============================================
function initProgressBars() {
  const bars = document.querySelectorAll('.dc-progress-fill');
  if (!bars.length) return;

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const targetWidth = entry.target.style.width;
        entry.target.style.width = '0%';
        setTimeout(() => {
          entry.target.style.width = targetWidth;
        }, 100);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => barObserver.observe(bar));
}

// =============================================
// CONTACT FORM
// =============================================
function handleSubmit(event) {
  event.preventDefault();

  const btn = document.getElementById('btn-submit');
  const successMsg = document.getElementById('form-success');
  const form = document.getElementById('contact-form');

  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> إرسال الرسالة';
    btn.disabled = false;
    btn.style.opacity = '1';
    successMsg.classList.add('show');

    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.value = '';
    });

    setTimeout(() => successMsg.classList.remove('show'), 5000);
  }, 1500);
}

// =============================================
// FUEL BAR & RING GAUGE ANIMATIONS
// =============================================
window.addEventListener('load', () => {
  const fuelFill = document.querySelector('.fuel-fill');
  if (fuelFill) {
    fuelFill.style.width = '0%';
    setTimeout(() => {
      fuelFill.style.transition = 'width 1.5s ease 0.5s';
      fuelFill.style.width = '72%';
    }, 100);
  }

  const ringFill = document.querySelector('.ring-fill');
  if (ringFill) {
    const total = 251.2;
    const pct   = 0.72;
    ringFill.style.strokeDasharray  = total;
    ringFill.style.strokeDashoffset = total;
    setTimeout(() => {
      ringFill.style.transition       = 'stroke-dashoffset 1.5s ease 0.5s';
      ringFill.style.strokeDashoffset = total * (1 - pct);
    }, 100);
  }
});

// =============================================
// SMOOTH MOUSE GLOW on cards
// =============================================
document.querySelectorAll('.feature-card, .system-card, .district-card, .ab-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--my', `${((e.clientY - rect.top)  / rect.height) * 100}%`);
  });
});
