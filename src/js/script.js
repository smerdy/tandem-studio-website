var prev_scrollY = 0;
var ticking = false;
const contentHeight = $('#content').offset().top;
const navHeight = $('nav').height();
var nav = $('nav');

$(document).ready(function() {

  window.addEventListener('scroll', function(e) {
    prev_scrollY = window.scrollY;
    if (!ticking && prev_scrollY < contentHeight - navHeight) {
      if (nav.hasClass('yellow'))
        nav.removeClass('yellow');

      window.requestAnimationFrame(function() {

        scaleFactor = (1 + scrollY / 30);

        $('#logo-circle').css({
          "transform": "scale("+scaleFactor+")"
        });

        ticking = false;
      });

      ticking = true;

    } else {
      nav.addClass('yellow');
    }
  });

});