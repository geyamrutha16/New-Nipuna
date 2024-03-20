
        function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
          document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }

        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
          document.body.style.backgroundColor = "white";
        }

        
        (function ($) {
          "use strict";
      
      
          // Modal Video
          $(document).ready(function () {
              var $videoSrc;
              $('.btn-play').click(function () {
                  $videoSrc = $(this).data("src");
              });
              console.log($videoSrc);
      
              $('#videoModal').on('shown.bs.modal', function (e) {
                  $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
              })
      
              $('#videoModal').on('hide.bs.modal', function (e) {
                  $("#video").attr('src', $videoSrc);
              })
          });
      
      
          // Scroll to Bottom
          $(window).scroll(function () {
              if ($(this).scrollTop() > 100) {
                  $('.scroll-to-bottom').fadeOut('slow');
              } else {
                  $('.scroll-to-bottom').fadeIn('slow');
              }
          });
      
          
          
          // Back to top button
          $(window).scroll(function () {
              if ($(this).scrollTop() > 200) {
                  $('.back-to-top').fadeIn('slow');
              } else {
                  $('.back-to-top').fadeOut('slow');
              }
          });
          $('.back-to-top').click(function () {
              $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
              return false;
          });
      
          // Modal Video
    $(document).ready(function () {
      var $videoSrc;
      $('.btn-play').click(function () {
          $videoSrc = $(this).data("src");
      });
      console.log($videoSrc);

      $('#videoModal').on('shown.bs.modal', function (e) {
          $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
      })

      $('#videoModal').on('hide.bs.modal', function (e) {
          $("#video").attr('src', $videoSrc);
      })
  });
      
          // Testimonials carousel
          $(".testimonial-carousel").owlCarousel({
              autoplay: true,
              smartSpeed: 1500,
              dots: true,
              loop: true,
              items: 1
          });
          
      })(jQuery);
      
      
