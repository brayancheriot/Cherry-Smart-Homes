/* ============================================
   CHERRY SMART HOMES — MAIN.JS
   Shared behavior loaded on every page: mobile nav toggle,
   "Book a Viewing" modal.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- BOOKING MODAL ("Book a Viewing") — shared on every marketing page ---------- */
  const modalOverlay = document.getElementById('booking-modal');
  const openTriggers = document.querySelectorAll('[data-open-booking-modal]');
  const closeTriggers = modalOverlay ? modalOverlay.querySelectorAll('[data-close-booking-modal]') : [];

  const openModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openTriggers.forEach((btn) => btn.addEventListener('click', (e) => { e.preventDefault(); openModal(); }));
  closeTriggers.forEach((btn) => btn.addEventListener('click', closeModal));
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    const form = modalOverlay.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Request Sent ✓';
        btn.disabled = true;
        setTimeout(() => {
          closeModal();
          btn.textContent = original;
          btn.disabled = false;
          form.reset();
        }, 1800);
      });
    }
  }
});

/* ---------- ANIMATED STAT COUNTERS ----------
   Any element with [data-count-to="500"] counts up from 0 once visible. */
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-count-to]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count-to'), 10);
    const suffix = el.getAttribute('data-count-suffix') || '';
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((el) => observer.observe(el));
});
