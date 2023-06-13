const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.header__button');
const header = document.querySelector('.header')
const icon = document.querySelector('.burger');
const map = document.querySelector('.map');

// header.classList.remove('header--nojs');
map.classList.remove('map--nojs');

navToggle.addEventListener('click', function () {
    navMain.classList.toggle('navigation--closed');
    navMain.classList.toggle('navigation--opened');
    icon.classList.toggle("open");
  }
);
