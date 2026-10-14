/* ============================================
   PROPERTY-DETAIL.JS — behavior specific to property-detail.html
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.querySelector('.gallery-main img');
  document.querySelectorAll('.gallery-thumbs > div').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const thumbImg = thumb.querySelector('img');
      if (mainImg && thumbImg) {
        const tmp = mainImg.src;
        mainImg.src = thumbImg.src;
        thumbImg.src = tmp;
      }
    });
  });

  document.querySelectorAll('.listing-heart').forEach((heart) => {
    heart.addEventListener('click', () => {
      const saved = heart.textContent.trim() === '♥';
      heart.textContent = saved ? '♡' : '♥';
      heart.style.color = saved ? '' : '#E5483B';
    });
  });

  const form = document.querySelector('.booking-sidebar form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Request Sent ✓';
      setTimeout(() => { btn.textContent = original; form.reset(); }, 1800);
    });
  }
});
