// burger menu
const burger = document.querySelector('.button-menu-mobile');
const menuMobile = document.querySelector('.header__menu-wrapper');

const toggleMobileMenu = () => {
    burger.classList.toggle('open');
    menuMobile.classList.toggle('open');
};

document.addEventListener('click', (event) => {
  if (event.target === burger || event.target.classList.contains('button-menu-mobile__line')) {
    toggleMobileMenu();
  } else if (menuMobile.classList.contains('open') && event.target !== menuMobile) {
    toggleMobileMenu();
  }
});

// slider variables 
const sliderCardsArr = document.querySelectorAll('.slider__block');
const sliderFillArr = document.querySelectorAll('.pagination__label_fill');
const leftSliderBtn = document.getElementById('leftBtn');
const rightSliderBtn = document.getElementById('rightBtn');

let slidePosition = 0;
let sliderWidth = 0;
let paginationIndex = 0;

// get width slider
function getSliderWidth() {
  sliderWidth = sliderCardsArr[0].offsetWidth;
  return sliderWidth;
};

// change slider 
function changeSlide(index) {
  slidePosition = (-getSliderWidth()) * (index);
  sliderCardsArr.forEach((cards) => {
    cards.style.left = slidePosition + 'px';
    });
  paginationIndex = index;
}
// autoplay slider
const commonTimer = setInterval(function changeSlideAtTime() {
  paginationIndex = paginationIndex >= 2 ? 0 : paginationIndex + 1;
  changeSlide(paginationIndex);
}, 5500);

// buttons slider
leftSliderBtn.addEventListener('click', () => {
  paginationIndex = paginationIndex <= 0 ? 2 : paginationIndex - 1;
  changeSlide(paginationIndex);
});

rightSliderBtn.addEventListener('click', () => {
  paginationIndex = paginationIndex >= 2 ? 0 : paginationIndex + 1;
  changeSlide(paginationIndex);
});