// Get Access To All Elements That Makes Up The Carousel

const mainCarousel = document.querySelector('carousel-container');
const carouselUl = document.querySelector('.carousel-ul');
const prevSlide = document.querySelector('.left-arrow');
const nextSlide = document.querySelector('.right-arrow');
const circleContainer = document.querySelector('.carousel-circle');
const slideItems = Array.from(document.getElementsByClassName('carousel-item'));
const slideCircles = Array.from(
  document.getElementsByClassName('circle-item ')
);
const slideWidthSize = slideItems[0].getBoundingClientRect().width;

/*---------------------------  
|                           |
|    FUNCTIONs              |
-----------------------------*/

// MOVE SLIDE #####
function moveSlide(currentSlideContent, targetSlideContent, targetSlide) {
  carouselUl.style.transform = `translateX(-${targetSlide})`;
  currentSlideContent.classList.remove('current-slide');
  targetSlideContent.classList.add('current-slide');
}

// UPDATE CIRCLE NAVIGATOR #####
function updateCircleNav(index) {
  value = slideCircles[index];
  const currentCircle = circleContainer.querySelector('.circle-fill');
  currentCircle.classList.remove('circle-fill');
  value.classList.add('circle-fill');
}

// INDEX OF SLIDE #####
function indexOfSlide(targetSlide) {
  const circleIndex = slideItems.findIndex((slide) => slide === targetSlide);
  updateCircleNav(circleIndex);
}

// START ALL IN A LOOP WHEN NO CONTENT IN PREVIOUS & NEXT
function checkForNull(currentSlide, targetIndex) {
  const carouselChildren = carouselUl.children;
  let currentSlideContent = carouselChildren[currentSlide];
  let targetSlide = carouselChildren[targetIndex];
  let amountMove = targetSlide.style.left;
  moveSlide(currentSlideContent, targetSlide, amountMove);
  indexOfSlide(targetSlide);
}

/*---------------------------  
|                           |
|  Loops & Event Listeners  |
-----------------------------*/

// SET SLIDE POSITION
slideItems.forEach((value, index) => {
  value.style.left = `${slideWidthSize}` * index + 'px';
});

// NEXT/RIGHT ARROW *****
nextSlide.addEventListener('click', () => {
  try {
    let currentSlideContent = carouselUl.querySelector('.current-slide');
    let nextSlideContent = currentSlideContent.nextElementSibling;
    let amountMove = nextSlideContent.style.left;

    // Change Slide
    moveSlide(currentSlideContent, nextSlideContent, amountMove);
    // Get index of previous slide for Carousel circle change
    indexOfSlide(nextSlideContent);
  } catch {
    const currentChildIndex = carouselUl.children.length - 1;
    let targetIndex = 0;
    checkForNull(currentChildIndex, targetIndex);
  }
});

// PREVIOUS/LEFT ARROW *******
prevSlide.addEventListener('click', () => {
  try {
    const currentSlideContent = carouselUl.querySelector('.current-slide');
    const prevSlideContent = currentSlideContent.previousElementSibling;
    const amountMove = prevSlideContent.style.left;

    // Change Slide
    moveSlide(currentSlideContent, prevSlideContent, amountMove);
    // Get index of previous slide for Carousel circle change
    indexOfSlide(prevSlideContent);
  } catch {
    const currentChildIndex = 0;
    let targetIndex = carouselUl.children.length - 1;
    checkForNull(currentChildIndex, targetIndex);
  }
});

// CAROUSEL CIRCLE NAVIGATORS ******
slideCircles.forEach((value, index) => {
  value.addEventListener('click', () => {
    updateCircleNav(index);
    const currentSlideContent = carouselUl.querySelector('.current-slide');
    const circleTargetSlide = slideItems[index];
    const amountMove = circleTargetSlide.style.left;
    moveSlide(currentSlideContent, circleTargetSlide, amountMove);
  });
});

function MoveSlideAuto() {
  setInterval(() => {
    try {
      let currentSlideContent = carouselUl.querySelector('.current-slide');
      let nextSlideContent = currentSlideContent.nextElementSibling;
      let amountMove = nextSlideContent.style.left;

      // Change Slide
      moveSlide(currentSlideContent, nextSlideContent, amountMove);
      // Get index of previous slide for Carousel circle change
      indexOfSlide(nextSlideContent);
    } catch {
      // setInterval(() => {
      const currentChildIndex = carouselUl.children.length - 1;
      let targetIndex = 0;
      checkForNull(currentChildIndex, targetIndex);
      // }, 10000);
    }
  }, 9000);
}

// CALL AUTO CAROISEL FUNCTION
MoveSlideAuto();
