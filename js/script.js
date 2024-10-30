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