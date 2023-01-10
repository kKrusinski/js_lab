const slider = document.getElementById('slider');
const slides = document.querySelector('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const navBtns = document.querySelectorAll('.nav-btn');

let currentSlide = 1;

if (slides.firstElementChild) {
  let slideWidth = slides.firstElementChild.offsetWidth;
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
      currentSlide = 1;
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}px)`;
      setTimeout(function() {
        slides.style.transition = 'transform 1s';
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
    
    // Initialize the slider
    updateNav();
    
    //Autoplay
    let slideInterval = setInterval(nextSlide, 2000);
    
    function nextSlide() {
    currentSlide = (currentSlide+1)%slidesCount;
    slides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    updateNav();
    }
    
    // stop playing on hover
    slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
    });
    
    // continue playing on mouse leave
    slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 2000);
    });
    
    //stop playing on touch
    slider.addEventListener('touchstart', () => {
    clearInterval(slideInterval);
    });
    
    // continue playing on touch end
    slider.addEventListener('touchend', () => {
    slideInterval = setInterval(nextSlide, 2000);
    });
    
    //stop playing on focus
    slider.addEventListener('focus', () => {
    clearInterval(slideInterval);
    });

    // continue playing on focus out
window.addEventListener("focusout", function(){
  setInterval(function() {
    nextBtn.click();
  }, 3000);
});

function updateNav() {
  navBtns.forEach(function(btn) {
    btn.classList.remove('active');
    if (btn.getAttribute('data-slide') == currentSlide) {
      btn.classList.add('active');
    }
  });
}

navBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    currentSlide = Number(btn.getAttribute('data-slide'));
    slides.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}px)`;
    updateNav();
  });
});

window.addEventListener("focus", function(){
  clearInterval();
});

// start playing on load
window.addEventListener("load", function(){
  setInterval(function() {
    nextBtn.click();
  }, 3000);
});

window.addEventListener("focus", function(){
  setInterval(function() {
    nextBtn.click();
  }, 3000);
});
}