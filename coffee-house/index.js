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

const sliderBlocksArr = document.querySelectorAll('.slider__block');
const sliderFillArr = document.querySelectorAll('.pagination__label_fill');
const leftSliderBtn = document.getElementById('leftBtn');
const rightSliderBtn = document.getElementById('rightBtn');

let windowInnerWidth = 0;
let slidePosition = 0;
let sliderImgWidth = 0;
let paginationIndex = 0;
let progressBarWith = 10;

function measureSliderImgWith() {
  sliderImgWidth = sliderBlocksArr[0].offsetWidth;
  return sliderImgWidth;
};

function changeSlide(index) {

  slidePosition = (-measureSliderImgWith()) * (index);
  sliderBlocksArr.forEach((block) => {
    block.style.left = slidePosition + 'px';
    });

  progressBarWith = 10;

  paginationIndex = index;
}

const commonTimer = setInterval(function changeSlideAtTime() {
  paginationIndex = paginationIndex >= 2 ? 0 : paginationIndex + 1;
  changeSlide(paginationIndex);
}, 5500);

leftSliderBtn.addEventListener('click', () => {
  paginationIndex = paginationIndex <= 0 ? 2 : paginationIndex - 1;
  changeSlide(paginationIndex);
});

rightSliderBtn.addEventListener('click', () => {
  paginationIndex = paginationIndex >= 2 ? 0 : paginationIndex + 1;
  changeSlide(paginationIndex);
});
const timerIdFirst = setInterval(function () {
}, 500);

setTimeout(() => {
  clearInterval(timerIdFirst);
}, 5499);