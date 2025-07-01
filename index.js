function changeImage(imgPath, btn) {
  document.getElementById("accordionImage").src = imgPath;

  // Reset all icons
  document.querySelectorAll('.accordion-icon').forEach(icon => icon.textContent = '+');

  // Change current icon to –
  btn.querySelector('.accordion-icon').textContent = '–';
}

// Sync icons on accordion toggle
const buttons = document.querySelectorAll('.accordion-button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    setTimeout(() => {
      buttons.forEach(b => {
        const icon = b.querySelector('.accordion-icon');
        icon.textContent = (b.getAttribute('aria-expanded') === 'true') ? '–' : '+';
      });
    }, 250);
  });
});
