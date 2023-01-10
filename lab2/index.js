const slider = document.getElementById('slider');
const slides = document.querySelector('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const navBtns = document.querySelectorAll('.nav-btn');

let currentSlide = 1;

if (slides.firstElementChild) {
 
  let slideWidth = slides.firstElementChild.offsetWidth;

} else {

  console.error('Brak elementów potomnych w elemencie .slides');
}
let slidesCount = slides.querySelectorAll('img').length;

slides.style.transform = `translateX(-${slideWidth}px)`;

prevBtn.addEventListener('click', function() {
  if (currentSlide > 1) {
    currentSlide--;
    slides.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}px)`;
    updateNav();
  }
});

nextBtn.addEventListener('click', function() {
  if (currentSlide < slidesCount) {
    currentSlide++;
    slides.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}px)`;
    updateNav();
  } else {
    // animacja do początku
    currentSlide = 1;
    slides.style.transition = 'none';
    slides.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}px)`;
    setTimeout(function() {
      slides.style.transition = 'transform 0.4s';
      updateNav();
    }, 10);
  }
});

navBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    currentSlide = Number(btn.getAttribute('data-slide'));
    slides.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}px)`;
    updateNav();
  });
});

function updateNav() {
  navBtns.forEach(function(btn) {
    btn.classList.remove('active');
    if (btn.getAttribute('data-slide') == currentSlide) {
      btn.classList.add('active');
    }
  });
}