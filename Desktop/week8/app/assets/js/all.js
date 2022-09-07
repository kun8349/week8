//手機板
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
//autoplay: {
  //delay: 2500,
  //stopOnLastSlide: false,
	//disableOnInteraction: false,
//},
//loop: true,
//loopFillGroupWithBlank: true,
  
  breakpoints: {
    375:{
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },
});



$(".swiper-pagination-bullet-active").on('click',function (e) {
  e.preventDefault();
  $(this).toggleClass(".swiper-pagination-bullet-active");
});
