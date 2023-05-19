const icons = document.querySelectorAll('.burger');
icons.forEach (icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

