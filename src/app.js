//JS
import './js/theme.js';
import './js/contact-form.js';
import './js/plugin/wow.min.js';

// CSS
import './css/main.scss'

//  Onepage Nav Elements
$('.singlepage-nav').singlePageNav({
    offset: 0,
    filter: ':not(.external)',
    updateHash: true,
    currentClass: 'current',
    easing: 'swing',
    speed: 750,
    beforeStart: function () {
      if ($(window).width() < 991) {
        $('.menu-mobile-btn').removeClass('active');
        $('.nav-menu').removeClass('show-on-mobile');
      };
    },
    onComplete: function () {
      console.log('done scrolling');
    }
  });