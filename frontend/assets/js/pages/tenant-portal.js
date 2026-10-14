/* ============================================
   TENANT-PORTAL.JS — behavior specific to tenant-portal.html
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.portal-tabs button');
  const submitBtn = document.querySelector('.portal-submit');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      if (submitBtn) {
        submitBtn.textContent = tab.dataset.tab === 'signup' ? 'Create Account' : 'Log In';
      }
      // TODO: swap form fields (add name/confirm-password) once backend signup exists.
    });
  });

  const form = document.getElementById('portal-login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: wire up to the backend auth endpoint once it exists.
    });
  }
});
