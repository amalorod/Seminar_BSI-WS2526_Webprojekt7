$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 650) {
         $('body').addClass('changeColor')
      } else {
         $('body').removeClass('changeColor')
      }
   });
});