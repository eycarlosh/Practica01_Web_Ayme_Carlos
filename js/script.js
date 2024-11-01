// -------- MENÚ -------------

$(document).ready(function() {
  
  $('#menu-icon').click(function() {
      $('#menu-items').addClass('show');
  });

  $('#close-icon').click(function() {
      $('#menu-items').removeClass('show');
  });

  $('.menu-link').click(function() {
      $('#menu-items').removeClass('show');
  });
});


// --------CAROUSEL MOSTRAR/OCULTAR DIVS SEGÚN IMAGEN-----------

$(document).ready(function () {
    const $carousel = $("#carouselExampleControlsNoTouching");
    const $contentDivs = $(".divs-carousel-imgs");

    $carousel.on("slide.bs.carousel", function (event) {
        const currentSlide = event.to + 1;

        $contentDivs.each(function (index) {
            $(this).toggleClass("active", index + 1 === currentSlide);
        });
    });
});

// ------------------------------------------------------------------------

function showDiv(targetId) {
    var divs = document.querySelectorAll('.p-recientes-general');
  
    divs.forEach(function(div) {
        if (div.id === targetId) {
            div.classList.add('show');
        } else {
            div.classList.remove('show');
        }
    });
  }

function showDiv2(targetId) {
    var divs = document.querySelectorAll('.p-trabajo-general');
  
    divs.forEach(function(div) {
        if (div.id === targetId) {
            div.classList.add('show');
        } else {
            div.classList.remove('show');
        }
    });
  }


// CARD - TEAM
$(document).ready(function () {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        fade: "true",
        grabCursor: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },

            760: {
                slidesPerView: 2,
            },

            950: {
                slidesPerView: 3,
            }
        }
    });
});
