const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const slides = document.querySelector('#slides');
const computedStyles = getComputedStyle(slides);
const slideItems = document.querySelectorAll(".slider__item");

// leftArrow.addEventListener('click', e => {
//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight > 0) {
//     slides.style.right = `${currentRight - 100}px`;
//   }
// });

// rightArrow.addEventListener('click', e => {
//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight < 500) {
//     slides.style.right = `${currentRight + 100}px`;
//   }
// });

//////////////////////////////////////перенос элементов в новую строку
// const loop = (direction, e) => {
//   e.preventDefault();

//   if (direction == "right") {
//     slides.appendChild(slides.firstElementChild);
//   } else {
//     slides.insertBefore(slides.lastElementChild, slides.firstElementChild);
//   }
// }

// rightArrow.addEventListener('click', e => {
//   loop("right", e);
// })

// leftArrow.addEventListener('click', e => {
//   loop("left", e);
// })
/////////////////////

const minRight = 0;
const itemWidth = getComputedStyle(slideItems[0]).width;
const step = parseInt(itemWidth);
const preShowItems = 300 / step;
const maxRight = (slideItems.length - preShowItems) * step;
let currentRight = 0;

slides.style.right = currentRight;

rightArrow.addEventListener('click', e => {
  if (currentRight < maxRight) {
    currentRight += step;
    slides.style.right = `${currentRight}px`;
  }
})

leftArrow.addEventListener('click', e => {
  if (currentRight > minRight) {
    currentRight -= step;
    slides.style.right = `${currentRight}px`;
  }
})