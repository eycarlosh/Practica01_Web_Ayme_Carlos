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