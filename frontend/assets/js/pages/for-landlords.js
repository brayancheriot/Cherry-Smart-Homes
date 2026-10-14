/* ============================================
   FOR-LANDLORDS.JS — behavior specific to for-landlords.html
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.list-form-card form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Submitted ✓ We\'ll call you soon';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      form.reset();
    }, 2500);
  });
});
