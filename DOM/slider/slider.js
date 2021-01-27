const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const slides = document.getElementsByClassName('slider__item');

let slideIndex = 0;

function showSlide(i) {
  if ((i >= 1) && (i < slides.length - 1)) {
    slides[i-1].classList.add('slider__item--display');
    slides[i].classList.add('slider__item--active');
    slides[i+1].classList.add('slider__item--display');
  }
  if (i == 0) {
    slides[i].classList.add('slider__item--active');
    slides[i].style.marginLeft = "100px";
    slides[i+1].classList.add('slider__item--display');
    leftArrow.classList.add('arrow--noActive');
    leftArrow.disabled = true;
  }
  if (i == slides.length - 1) {
    slides[i-1].classList.add('slider__item--display');
    slides[i].classList.add('slider__item--active');
    slides[i].style.marginRight = "100px";
    rightArrow.classList.add('arrow--noActive');
    rightArrow.disabled = true;
  }
}

function hideSlide(i) {
  if ((i >= 1) && (i < slides.length - 1)) {
    slides[i-1].classList.remove('slider__item--display');
    slides[i].classList.remove('slider__item--active');
    slides[i+1].classList.remove('slider__item--display');
  }
  if (i == 0) {
    slides[i].classList.remove('slider__item--active');
    slides[i+1].classList.remove('slider__item--display');
  }
  if (i == slides.length - 1) {
    slides[i-1].classList.remove('slider__item--display');
    slides[i].classList.remove('slider__item--active');
  }
}

leftArrow.addEventListener('click', function(event) {
  event.preventDefault();

  if (slideIndex == 7) {
    rightArrow.classList.remove('arrow--noActive');
    rightArrow.disabled = false;
    slides[slideIndex].style.marginRight= "0";
  }
  hideSlide(slideIndex);
  slideIndex -= 1;
  showSlide(slideIndex);
});

rightArrow.addEventListener('click', function(event) {
  event.preventDefault();

  if (slideIndex == 0) {
    leftArrow.classList.remove('arrow--noActive');
    leftArrow.disabled = false;
    slides[slideIndex].style.marginLeft = "0";
  }

  hideSlide(slideIndex);
  slideIndex += 1;
  showSlide(slideIndex);
});

showSlide(slideIndex);