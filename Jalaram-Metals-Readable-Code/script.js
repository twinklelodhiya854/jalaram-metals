
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Open and close the menu
if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
}

// Slider images
const slides = [
  "assets/original-brass-slide.jpg",
  "https://palak-enterprises.in/images/stock/brass-parts-800.webp",
  "https://palak-enterprises.in/images/stock/cnc-milling-800.webp",
  "https://palak-enterprises.in/images/stock/workshop-800.webp",
  "https://palak-enterprises.in/images/stock/inspection-800.webp",
  "https://palak-enterprises.in/images/stock/finishing-800.webp",
  "https://palak-enterprises.in/images/stock/gear-shafts-800.webp",
  "https://palak-enterprises.in/images/stock/shafts-800.webp"
];

const heroImage = document.querySelector("#hero-image");
const buttons = document.querySelectorAll("[data-slide]");
let currentSlide = 0;

// Change the image
function showSlide(index) {
  if (!heroImage) {
    return;
  }

  currentSlide = index;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  heroImage.src = slides[currentSlide];

  buttons.forEach(function (button, i) {
    button.classList.toggle("selected", i === currentSlide);
  });
}

// Click on slide buttons
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    showSlide(Number(button.dataset.slide));
  });
});

// Previous image
const previousButton = document.querySelector(".slider-arrow.previous");

if (previousButton) {
  previousButton.addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });
}

// Next image
const nextButton = document.querySelector(".slider-arrow.next");

if (nextButton) {
  nextButton.addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });
}

// Contact form
const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const note = document.querySelector("#form-note");

    if (note) {
      note.textContent = "Thank you! Your details have been filled in, but the message has not been sent because the email service is not connected.";
    }
  });
}
