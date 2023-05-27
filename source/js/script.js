let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.header__button');

navMain.classList.remove('header--nojs');

navToggle.addEventListener('click', function () {
    navMain.classList.toggle('navigation--closed');
    navMain.classList.toggle('navigation--opened');
  }
);

const icons = document.querySelectorAll('.burger');
icons.forEach (icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});
