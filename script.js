$(document).ready(function(){
  $(window).on('load', function() {
    windowSize()
  });
  $(window).on('resize', function() {
    windowSize()
  });
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 4000,
    },
      pagination: {
        el: '.swiper-pagination',
      },
  });
  
});
function windowSize(){
  if ($(window).width() <= '1024'){
    if ($('.advertiser__work .btn').length) {
    } else {
      advertiserBtn()
    }
  } else {
    if ($('.advertiser__work .btn').length) {
      advertiserBtnReverse()
    } 
  }
}
function advertiserBtn() {
  $('.advertiser__image .btn').appendTo('.advertiser__work')
}
function advertiserBtnReverse() {
  $('.advertiser__work .btn').appendTo('.advertiser__image')
}