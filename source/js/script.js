let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.header__button');
let header = document.querySelector('.header')

header.classList.remove('header--nojs');

navToggle.addEventListener('click', function () {
    navMain.classList.toggle('navigation--closed');
    navMain.classList.toggle('navigation--opened');
  }
);

const icon = document.querySelector('.burger');
console.log(icon)
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
