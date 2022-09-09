"use strict";

//手機板
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  //autoplay: {
  //delay: 2500,
  //stopOnLastSlide: false,
  //disableOnInteraction: false,
  //},
  //loop: true,
  //loopFillGroupWithBlank: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true
    },
    768: {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      //slidesPerView: "auto",
      spaceBetween: 24,
      slidesPerView: 1,
      coverflowEffect: {
        rotate: 0,
        // y軸旋轉角度
        stretch: 0,
        //每个slide之间的拉伸值，越大slide靠得越紧
        depth: 0,
        //slide的位置深度。值越大z轴距离越远，看起来
        modifier: 1,
        //depth和rotate和stretch的倍率
        slideShadows: false //是否开启slide阴影

      }
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true
    }
  }
});
//# sourceMappingURL=all.js.map
