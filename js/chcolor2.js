$(function() {
   // Wir holen uns das Video-Element einmal am Anfang
   // [0] ist wichtig bei jQuery, um das echte HTML-Element für .play() zu bekommen
   var video = $('#myVideo')[0]; 

   $(window).scroll(function () {
      
      if ($(this).scrollTop() > 420) {
         
         $('body').addClass('changeColor'); // Löst den CSS-Fade-In aus
         video.play(); // Startet das Video

      } else {
         
         $('body').removeClass('changeColor'); // Löst den CSS-Fade-Out aus
         video.pause(); // Pausiert das Video (spart Leistung)
      }
   });
});