const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const radioBtns = document.querySelectorAll("input[name='radio-btn']");
let currentSlide = 0;

prevBtn.addEventListener("click", function () {
  radioBtns[currentSlide].checked = false;
  currentSlide = (currentSlide - 1 + radioBtns.length) % radioBtns.length;
  radioBtns[currentSlide].checked = true;
});

nextBtn.addEventListener("click", function () {
  radioBtns[currentSlide].checked = false;
  currentSlide = (currentSlide + 1) % radioBtns.length;
  radioBtns[currentSlide].checked = true;
});

setInterval(function () {
    radioBtns[currentSlide].checked = false;
    currentSlide = (currentSlide + 1) % radioBtns.length;
    radioBtns[currentSlide].checked = true;
  }, 3000);