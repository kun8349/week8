var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper_lg = new swiper_lg(".mySwiper_lg", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".swiper-pagination-bullet-active").on('click',function (e) {
  e.preventDefault();
  $(this).toggleClass(".swiper-pagination-bullet-active");
});