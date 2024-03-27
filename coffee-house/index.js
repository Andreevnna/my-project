// burger menu
const burger = document.querySelector('.button-menu-mobile');
const menuMobile = document.querySelector('.header__menu-wrapper');

const toggleMobileMenu = () => {
    burger.classList.toggle('open');
    menuMobile.classList.toggle('open');
};

document.addEventListener('click', (event) => {
  if (event.target === burger) {
    toggleMobileMenu();
  } else if (menuMobile.classList.contains('open') && event.target !== menuMobile) {
    toggleMobileMenu();
  }
});

// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slider__block");
// const indicators = document.querySelectorAll(".slider__progress");
// let currentSlide = 0;

// function showSlide(n) {
//     slides.forEach(slide => slide.style.display = "none");
//     indicators.forEach(indicator => indicator.classList.remove("active"));
    
//     slides[n].style.display = "block";
//     indicators[n].classList.add("active");

// }


const arrSliders = document.querySelectorAll('.slider__block')
const indicators = document.querySelectorAll('.slider__progress')

let indexSlider = 0;
let width = 0


function sliderChange(index) {
  arrSliders.forEach((cards) => {
    cards.style.left = (-arrSliders[0].offsetWidth * index) + 'px'
  })
  // indicators.forEach(indicator => indicator.classList.remove("active"));
  // indicators[index].classList.add("active");
}
function nextSlide() {
  indexSlider = (indexSlider + 1) % arrSliders.length;
  progressBar(indexSlider)
  sliderChange(indexSlider);
}
function prevSlide() {
  indexSlider = (indexSlider - 1 + arrSliders.length) % arrSliders.length;
  sliderChange(indexSlider);
}
function autoSlide() {
  nextSlide();
}

let interval = setInterval(nextSlide, 5500);

document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(interval)
  prevSlide()
  interval = setInterval(nextSlide, 4000);
})
document.querySelector('.next').addEventListener('click', () => {
  clearInterval(interval)
  nextSlide()
  interval = setInterval(nextSlide, 4000);
})

function progressBar(index) {
  let newInterval = setInterval(() => {
    if (width <= 40) {
      width++
      indicators[index].style.width = width + 'px';
    } else {
      clearInterval(newInterval)
    }
  }, 100)
}
// tag click

const menuTags = document.querySelectorAll('.button-tag');
menuTags.forEach(tag => {
    tag.addEventListener('click', function () {
      menuTags.forEach(tag => tag.classList.remove('button_checked'));
      this.classList.add('button_checked');
    })
})

const myJson = await import("./data/products.json", {
  with: { type: "json" },
});

// console.log(myJson.default)