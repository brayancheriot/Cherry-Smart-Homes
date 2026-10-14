/* ============================================
   OUR-OFFICE.JS — behavior specific to our-office.html
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.office-form-card form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      form.reset();
    }, 2200);
  });
});
