//Include Angular
var myApp = angular.module('myApp', [
  'ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/moveplanner', {
      template: 'moveplanner/moveplanner.html',
    }).
    when('/bugrun', {
      template: ''
    })
  }]);
//OPTIONS for BSS slides
var opts = {
            //auto-advancing slides? accepts boolean (true/false) or object
            auto : { 
                // speed to advance slides at. accepts number of milliseconds
                speed : 3000, 
                // pause advancing on mouseover? accepts boolean
                pauseOnHover : true 
            },
            // support swiping on touch devices? accepts boolean, requires hammer.js
            //swipe : true 
        };
makeBSS('.bss-slides', opts);

//about section showing when scrolled to
$(window).scroll(function() {
	$('.about').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass("fadeInUp about-after");
		}
	});
});
//ABOUT section display after clicking link
$('a[href="#about"').click(function(){
	$('.about').addClass("fadeIn about-after");
});

//Smooth scrolling when clicking links
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
