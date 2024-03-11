const swiper = new Swiper('.swiper', {

  loop: true,

  autoplay:{
    delay:2900,
    disableOnInteraction:false,
  },

  pagination: {
    clickkable:true,
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});