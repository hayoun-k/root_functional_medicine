const carouselOne = function () {
  const track = document.querySelector('.carousel_track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.chevron-right');
  const prevButton = document.querySelector('.chevron-left');
  const barsNav = document.querySelector('.indicator-container');
  const bars = Array.from(barsNav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

  // console.log(slideWidth);
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
  };

  const updateBars = (currentBar, targetBar) => {
    currentBar.classList.remove('current_slide');
    targetBar.classList.add('current_slide');
  };

  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add('is-done');
      nextButton.classList.remove('is-done');
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove('is-done');
      nextButton.classList.add('is-done');
    } else {
      prevButton.classList.remove('is-done');
      nextButton.classList.remove('is-done');
    }
  };

  // leftbutton
  prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentBar = barsNav.querySelector('.current_slide');
    const prevBar = currentBar.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateBars(currentBar, prevBar);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  });


  // rightbutton
  nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentBar = barsNav.querySelector('.current_slide');
    const nextBar = currentBar.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateBars(currentBar, nextBar);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  });

  barsNav.addEventListener('click', e => {
    const targetBar = e.target.closest('button');

    if (!targetBar)
      return;

    const currentSlide = track.querySelector('.current_slide');
    const currentBar = barsNav.querySelector('.current_slide');
    const targetIndex = bars.findIndex(bar => bar === targetBar);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateBars(currentBar, targetBar);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
  });
}

const carouselTwo = function () {
  const track = document.querySelectorAll('.carousel_track')[1];
  const slides = Array.from(track.children);
  const nextButton = document.querySelectorAll('.chevron-right')[1];
  const prevButton = document.querySelectorAll('.chevron-left')[1];
  const barsNav = document.querySelectorAll('.indicator-container')[1];
  const bars = Array.from(barsNav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

  // console.log(slideWidth);
  const setSlidePosition = (slide, index) => {
    slide.style.left = (slideWidth + 24) * index + 'px';
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
  };

  const updateBars = (currentBar, targetBar) => {
    currentBar.classList.remove('current_slide');
    targetBar.classList.add('current_slide');
  };

  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add('is-done');
      nextButton.classList.remove('is-done');
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove('is-done');
      nextButton.classList.add('is-done');
    } else {
      prevButton.classList.remove('is-done');
      nextButton.classList.remove('is-done');
    }
  };

  // leftbutton
  prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentBar = barsNav.querySelector('.current_slide');
    const prevBar = currentBar.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateBars(currentBar, prevBar);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  });


  // rightbutton
  nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentBar = barsNav.querySelector('.current_slide');
    const nextBar = currentBar.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateBars(currentBar, nextBar);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  });

  barsNav.addEventListener('click', e => {
    const targetBar = e.target.closest('button');

    if (!targetBar)
      return;

    const currentSlide = track.querySelector('.current_slide');
    const currentBar = barsNav.querySelector('.current_slide');
    const targetIndex = bars.findIndex(bar => bar === targetBar);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateBars(currentBar, targetBar);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
  });
}

carouselOne();
carouselTwo();