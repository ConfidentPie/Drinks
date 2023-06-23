/* в этот файл добавляет скрипты*/
/*Burger toggle*/
let nav = document.querySelector('.main-nav');
let toggle = document.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--nojs');
nav.classList.remove('main-nav--opened');
nav.classList.add('main-nav--closed');

toggle.addEventListener('click', function () {
  if (nav.classList.contains('main-nav--opened')) {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  } else {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  }
})

/* Promo Slider */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


/*Price Slider*/
const rangeInput = document.querySelectorAll('.price__slider-input input'),
  priceInput = document.querySelectorAll('.price__input-wrapper input'),
  progress = document.querySelector(".price__slider .price__progress");

const PRICE_GAP = 5;
const MAX_PRICE = 1000;

priceInput.forEach(input => {
  input.addEventListener("input", e => {
    let minVal = parseInt(priceInput[0].value),
      maxVal = parseInt(priceInput[1].value)

    if ((maxVal - minVal >= PRICE_GAP) && maxVal <= MAX_PRICE) {
      if (e.target.className === "price__input cost-min") {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach(input => {
  input.addEventListener("input", e => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value)

    if (maxVal - minVal < PRICE_GAP) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - PRICE_GAP;
      } else {
        rangeInput[1].value = minVal + PRICE_GAP;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

/*Leaflet*/
var map = L.map('map').setView([59.968318, 30.317224], 17.61);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myIcon = L.icon({
  iconUrl: 'img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

L.marker([59.968318, 30.317224], { icon: myIcon }).addTo(map);
