var prev_scrollY = 0;
var ticking = false;

$(document).ready(function() {

window.addEventListener('scroll', function(e) {
  prev_scrollY = window.scrollY;

  if (!ticking && prev_scrollY < 400) {
    $('#header').removeClass('scrolled-to-limit');
    $('#nav').removeClass('scrolled-to-limit');

    window.requestAnimationFrame(function() {

      dim = 190 * (1 + scrollY / 580 * 50);

      $('#logo-circle').css({
        'height': dim,
        'width': dim,
        'border-radius': dim,
        'left': String(-4 * (1 + scrollY)) + "%",
        'top': String(12 - scrollY / 580 * 800) + "%"
        //'opacity': Math.pow((580 - scrollY) / 580, 1)
      })

      $('#hero table').css({
        'margin-top': -scrollY * 2
      })

      ticking = false;
    });
    ticking = true;

  } else {
    $('#header').addClass('scrolled-to-limit');
    $('#nav').addClass('scrolled-to-limit');
  }
})

});