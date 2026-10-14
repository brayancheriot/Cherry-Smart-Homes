/* ============================================
   HOME.JS — behavior specific to index.html
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.listing-heart').forEach((heart) => {
    heart.addEventListener('click', () => {
      const saved = heart.textContent.trim() === '♥';
      heart.textContent = saved ? '♡' : '♥';
      heart.style.color = saved ? '' : '#E5483B';
      // TODO: persist saved properties once user accounts exist.
    });
  });
});
