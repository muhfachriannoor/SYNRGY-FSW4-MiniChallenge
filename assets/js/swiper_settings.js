const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
