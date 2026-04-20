/* =============================================
   SGM — Map Journey & Premium Animations
   GSAP ScrollTrigger + Leaflet + Lenis
   ============================================= */

(function () {
  'use strict';

  /* ==========================================
     1. SMOOTH SCROLL — Lenis
  ========================================== */
  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });
    function raf(time) {
      lenis.raf(time);
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    window._lenis = lenis;
  }

  /* ==========================================
     2. CUSTOM CURSOR
  ========================================== */
  function initCursor() {
    const cursor = document.getElementById('sgm-cursor');
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      cx += (mx - cx) * 0.1; cy += (my - cy) * 0.1;
      cursor.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`;
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button, .sol-card-3d, .portal-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('large'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('large'));
    });
  }

  /* ==========================================
     3. HERO V2 ENTRANCE ANIMATION
  ========================================== */
  function initHeroAnimations() {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 0.15 });
    tl.from('.hv2-eyebrow',         { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out' })
      .from('.hv2-title .hv2-line', { opacity: 0, y: 80, skewY: 3, stagger: 0.1, duration: 1.0, ease: 'power4.out' }, '-=0.4')
      .from('.hv2-sub',             { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .from('.hv2-cta > *',         { opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .from('.hv2-stats-bar',       { opacity: 0, y: 16, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .from('.hv2-visual',          { opacity: 0, x: -50, duration: 1.0, ease: 'power4.out' }, 0.3)
      .from('.hv2-scroll-ind',      { opacity: 0, duration: 0.5 }, '-=0.2');

    /* Floating dashboard card */
    gsap.to('.hv2-dash', { y: -14, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    gsap.to('.hv2-fc.fca', { y: -9, x: 4, rotation: 0.8, duration: 2.7, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.5 });
    gsap.to('.hv2-fc.fcb', { y: 9, x: -4, rotation: -0.8, duration: 3.3, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.2 });

    /* Animated mesh blobs */
    gsap.to('.blob-a', { x: 80, y: -70, scale: 1.15, duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    gsap.to('.blob-b', { x: -70, y: 80, scale: 0.88, duration: 11, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });
    gsap.to('.blob-c', { x: 40, y: 60, scale: 1.05, duration: 13, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 4 });

    /* Stat counters */
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      ScrollTrigger.create({
        trigger: el, start: 'top 90%', once: true,
        onEnter: () => {
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target, duration: 2.5, ease: 'power2.out',
            onUpdate() { el.textContent = Math.round(obj.v).toLocaleString() + suffix; }
          });
        }
      });
    });

    /* Scroll indicator pulse */
    gsap.to('.hsi-dot', { y: 8, duration: 0.8, ease: 'power2.inOut', yoyo: true, repeat: -1 });

    /* Bar chart animation */
    document.querySelectorAll('.hv2-bar').forEach((bar, i) => {
      gsap.fromTo(bar, { height: '20%' },
        { height: bar.dataset.h, duration: 1.2, ease: 'power3.out',
          delay: 0.8 + i * 0.08, repeat: -1, yoyo: true, repeatDelay: 3 });
    });
  }

  /* ==========================================
     4. MAP JOURNEY — Scroll-Driven Iraq→Anbar→Ramadi→Building→SGM
  ========================================== */
  function initMapJourney() {
    const mapEl = document.getElementById('journey-map');
    if (!mapEl || typeof L === 'undefined') return;

    /* --- Init Leaflet map --- */
    const map = L.map('journey-map', {
      zoomControl: false, attributionControl: false,
      dragging: false, scrollWheelZoom: false,
      doubleClickZoom: false, touchZoom: false, keyboard: false,
      zoomAnimation: true, fadeAnimation: true,
    });

    /* CartoDB dark tiles — free, no API key */
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
      { maxZoom: 19, subdomains: 'abcd' }).addTo(map);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png',
      { maxZoom: 19, subdomains: 'abcd' }).addTo(map);

    /* --- Journey stages --- */
    const stages = [
      { id: 'mjp-0', label: 'العراق',            coords: [33.0, 44.0],        zoom: 5  },
      { id: 'mjp-1', label: 'محافظة الأنبار',   coords: [32.8, 42.2],        zoom: 7  },
      { id: 'mjp-2', label: 'مدينة الرمادي',    coords: [33.4271, 43.2983],  zoom: 11 },
      { id: 'mjp-3', label: 'مبنى المحافظة',    coords: [33.4263, 43.2950],  zoom: 15 },
      { id: 'mjp-4', label: 'منظومة SGM',        coords: [33.4263, 43.2950],  zoom: 15 },
    ];

    map.setView(stages[0].coords, stages[0].zoom);

    /* --- Anbar Province polygon (approximate) --- */
    const anbarPoly = L.polygon([
      [34.2, 38.9], [34.4, 41.2], [33.8, 45.7],
      [32.0, 45.8], [30.0, 44.5], [29.5, 41.5],
      [29.5, 38.9], [32.5, 38.9],
    ], { color: '#e87722', weight: 2.5, opacity: 0,
         fillColor: '#e87722', fillOpacity: 0, interactive: false }).addTo(map);

    /* --- Ramadi circle --- */
    const ramadiCircle = L.circle([33.4271, 43.2983], {
      color: '#1d63c9', weight: 2, opacity: 0,
      fillColor: '#1d63c9', fillOpacity: 0, radius: 4500, interactive: false,
    }).addTo(map);

    /* --- Gov Building marker --- */
    const govMarker = L.marker([33.4263, 43.2950], {
      opacity: 0, interactive: false,
      icon: L.divIcon({
        className: '', iconSize: [140, 70], iconAnchor: [70, 35],
        html: `<div class="mj-gov-marker">
          <div class="mgm-pulse"></div>
          <div class="mgm-dot"></div>
          <div class="mgm-label">مبنى المحافظة</div>
        </div>`,
      })
    }).addTo(map);

    /* --- Generator dots --- */
    const genDots = [];
    [
      [33.430,43.290],[33.425,43.305],[33.420,43.285],
      [33.435,43.298],[33.418,43.303],[33.428,43.278],
      [33.442,43.292],[33.415,43.312],[33.445,43.305],
      [33.410,43.295],[33.438,43.280],[33.422,43.318],
    ].forEach(pos => {
      const online = Math.random() > 0.15;
      const m = L.marker(pos, {
        opacity: 0, interactive: false,
        icon: L.divIcon({
          className: '', iconSize: [12, 12], iconAnchor: [6, 6],
          html: `<div class="mj-gen-dot ${online ? 'on' : 'off'}"></div>`,
        })
      }).addTo(map);
      genDots.push(m);
    });

    /* --- SGM overlay (stage 4) --- */
    const sgmOverlay = L.marker([33.4263, 43.2950], {
      opacity: 0, interactive: false,
      icon: L.divIcon({
        className: '', iconSize: [220, 220], iconAnchor: [110, 110],
        html: `<div class="mj-sgm-overlay">
          <div class="mso-ring r1"></div>
          <div class="mso-ring r2"></div>
          <div class="mso-ring r3"></div>
          <div class="mso-center"><i class="fas fa-bolt"></i></div>
          <div class="mso-label">SGM Active</div>
        </div>`,
      })
    }).addTo(map);

    /* --- Stage activation --- */
    let activeStage = -1;

    function gotoStage(i, instant) {
      if (i === activeStage || i < 0 || i >= stages.length) return;
      activeStage = i;
      const s = stages[i];

      /* Fly map */
      if (instant) {
        map.setView(s.coords, s.zoom, { animate: false });
      } else {
        map.flyTo(s.coords, s.zoom, { duration: 2.0, easeLinearity: 0.28 });
      }

      /* Stage label */
      const lbl = document.getElementById('mj-label-text');
      if (lbl) {
        lbl.style.opacity = 0;
        setTimeout(() => { lbl.textContent = s.label; lbl.style.opacity = 1; }, 250);
      }

      /* Panels */
      document.querySelectorAll('.mj-panel').forEach((p, idx) => {
        const active = idx === i;
        p.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        p.style.opacity    = active ? '1' : '0';
        p.style.transform  = active ? 'translateX(0) translateY(0)' : 'translateX(12px) translateY(8px)';
        p.style.pointerEvents = active ? 'all' : 'none';
        p.classList.toggle('active', active);
      });

      /* Progress */
      document.querySelectorAll('.mj-prog-dot').forEach((d, idx) => d.classList.toggle('active', idx <= i));
      const bar = document.getElementById('mj-progress-bar');
      if (bar) bar.style.width = `${((i + 1) / stages.length) * 100}%`;

      /* Map overlays */
      anbarPoly.setStyle(i >= 1 ? { opacity: 0.8, fillOpacity: 0.08 } : { opacity: 0, fillOpacity: 0 });
      ramadiCircle.setStyle(i >= 2 ? { opacity: 0.9, fillOpacity: 0.1 } : { opacity: 0, fillOpacity: 0 });
      govMarker.setOpacity(i >= 3 ? 1 : 0);
      genDots.forEach((m, gi) => { setTimeout(() => m.setOpacity(i >= 3 ? 1 : 0), gi * 60); });
      sgmOverlay.setOpacity(i === 4 ? 1 : 0);
    }

    /* First stage */
    setTimeout(() => gotoStage(0, true), 120);

    /* --- ScrollTrigger --- */
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: '#map-journey',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.mj-sticky',
      pinSpacing: false,
      onUpdate: self => {
        const idx = Math.min(stages.length - 1, Math.floor(self.progress * stages.length));
        gotoStage(idx);
        const bar = document.getElementById('mj-progress-bar');
        if (bar) bar.style.width = `${self.progress * 100}%`;
      }
    });

    window.addEventListener('resize', () => map.invalidateSize());
    window._journeyMap = map;
  }

  /* ==========================================
     5. 3D SOLUTION CARDS — Mouse tilt + glow
  ========================================== */
  function initSolCards() {
    document.querySelectorAll('.sol-card-3d').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        const rx = (y - 0.5) * -18;
        const ry = (x - 0.5) * 18;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(16px)`;
        const shine = card.querySelector('.sol-shine');
        if (shine) shine.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(255,255,255,0.14), transparent 60%)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)';
      });
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.set('.sol-card-3d', { transformPerspective: 900, transformOrigin: 'center center' });
      gsap.from('.sol-card-3d', {
        scrollTrigger: { trigger: '#solutions-3d', start: 'top 78%' },
        opacity: 0, y: 70, rotateX: 18, stagger: 0.1, duration: 0.9, ease: 'power4.out',
      });
      gsap.from('#solutions-3d .section-header', {
        scrollTrigger: { trigger: '#solutions-3d', start: 'top 85%' },
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      });
    }
  }

  /* ==========================================
     6. SECTION SCROLL ANIMATIONS
  ========================================== */
  function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    /* Feature cards */
    gsap.from('.feature-card', {
      scrollTrigger: { trigger: '.features-grid', start: 'top 80%' },
      opacity: 0, y: 40, stagger: 0.07, duration: 0.7, ease: 'power3.out',
    });

    /* System cards */
    gsap.from('.system-card', {
      scrollTrigger: { trigger: '.systems-grid', start: 'top 80%' },
      opacity: 0, scale: 0.96, stagger: 0.06, duration: 0.7, ease: 'back.out(1.4)',
    });

    /* Benefit items */
    gsap.from('.benefit-item', {
      scrollTrigger: { trigger: '.benefits-grid', start: 'top 82%' },
      opacity: 0, x: -24, stagger: 0.05, duration: 0.6, ease: 'power3.out',
    });

    /* Section headers */
    gsap.utils.toArray('.section-header').forEach(h => {
      gsap.from(h, {
        scrollTrigger: { trigger: h, start: 'top 82%' },
        opacity: 0, y: 36, duration: 0.8, ease: 'power3.out',
      });
    });

    /* Stat counters (existing SC cards) */
    document.querySelectorAll('.sc-num').forEach(el => {
      const raw = el.textContent.replace(/\D/g, '');
      const target = parseInt(raw);
      if (!target) return;
      const suffix = el.textContent.replace(/[\d,\s]/g, '');
      ScrollTrigger.create({
        trigger: el, start: 'top 86%', once: true,
        onEnter: () => {
          const o = { v: 0 };
          gsap.to(o, { v: target, duration: 2, ease: 'power2.out',
            onUpdate() { el.textContent = Math.round(o.v).toLocaleString() + suffix; } });
        }
      });
    });
  }

  /* ==========================================
     INIT
  ========================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initCursor();
    initHeroAnimations();
    initMapJourney();
    initSolCards();
    initScrollAnimations();

    window.addEventListener('load', () => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  });
})();
