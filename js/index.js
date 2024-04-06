const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: ".next_button",
    prevEl: ".prev_button",
  },
});
