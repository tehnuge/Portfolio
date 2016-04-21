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

$(window).scroll(function() {
	$('.about').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass("fadeInUp about-after");
		}
	});
});

$('a[href="#about"').click(function(){
	$('.about').addClass("fadeIn about-after");
});
