const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;

nextBtn.addEventListener("click", () => {
if (counter < slides.length - 3) {
    counter++;
    carousel.style.transform = `translateX(-${counter * (100 / 3)}%)`;
}
});

prevBtn.addEventListener("click", () => {
if (counter > 0) {
    counter--;
    carousel.style.transform = `translateX(-${counter * (100 / 3)}%)`;
}
});