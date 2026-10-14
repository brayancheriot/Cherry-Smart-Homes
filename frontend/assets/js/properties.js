/* ============================================
   PROPERTIES.JS — behavior specific to properties.html
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const typeCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
  const allTypesBox = typeCheckboxes[0];

  typeCheckboxes.forEach((box, i) => {
    box.addEventListener('change', () => {
      if (i === 0 && box.checked) {
        typeCheckboxes.forEach((b, j) => { if (j !== 0 && j < 5) b.checked = false; });
      } else if (i > 0 && i < 5 && box.checked) {
        allTypesBox.checked = false;
      }
    });
  });

  const resetLink = document.querySelector('.reset-link');
  if (resetLink) {
    resetLink.addEventListener('click', (e) => {
      e.preventDefault();
      typeCheckboxes.forEach((b, i) => { b.checked = i === 0 || i === 5; });
      document.querySelectorAll('.select-field').forEach((s) => { s.selectedIndex = 0; });
    });
  }

  document.querySelectorAll('.pagination button').forEach((btn) => {
    if (!isNaN(parseInt(btn.textContent))) {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.pagination button').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    }
  });

  document.querySelectorAll('.listing-heart').forEach((heart) => {
    heart.addEventListener('click', () => {
      const saved = heart.textContent.trim() === '♥';
      heart.textContent = saved ? '♡' : '♥';
      heart.style.color = saved ? '' : '#E5483B';
    });
  });
});
