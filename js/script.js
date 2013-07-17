(function() {

	//SET #HOME HEIGHT TO WINDOW HEIGHT
	var windowHeight = $(window).height();
	$('#home').css('height',windowHeight);

	//FADE IN HOME TEXT
	$('header').fadeIn('slow');

	//CHANGE NAV CSS ON SCROLL
	$(window).scroll( function(){
		if ( $(window).scrollTop() > 20 ) {
			$('.main-nav').addClass('nav-scrolled');
		} else {
			$('.main-nav').removeClass('nav-scrolled');
		}
	});

	//DELAYED MAIN NAV REVEAL
	$('#home .main-nav')
    .delay(1500)
    .queue( function(next){
      $(this).css('top','0');
      next();
    });

	//SMOOTH SCROLLTO SECTIONS
	jQuery(document).ready(function($){
		$('body').plusAnchor({
			easing: 'easeInOutQuad',
			offsetTop: -20,
			speed: 400,
			onInit: function( base ) {

				if ( base.initHash != '' && $(base.initHash).length > 0 ) {
					window.location.hash = 'hash_' + base.initHash.substring(1);
					window.scrollTo(0, 0);

					$(window).load( function() {

						timer = setTimeout(function() {
							$(base.scrollEl).animate({
								scrollTop: $( base.initHash ).offset().top
							}, base.options.speed, base.options.easing);
						}, 2000); // setTimeout

					}); // window.load
				} // if window.location.hash

			} // onInit
		});
	});


	if ( $(window).width() > 400 ) {

		//FLUID HEADERS
		jQuery("header h1").fitText(0.75);
		jQuery("header h2").fitText(5);

		//HOME PAGE PARALAX
/*
		function homeScroll() {
			var $scrollTop = $(window).scrollTop();
			var $homeContainer = $('#home');
				$homeContainer.css({
					'top': Math.round(($scrollTop / 2))
				});
		}

		$(window).scroll( $.throttle( 10, homeScroll ) );
*/
	}

	//SHOW MOBILE NAV
	$('.mobile-nav-icon').on('click', function(){
		$('.mobile-nav').toggleClass('mobile-nav-active');
		$(this).toggleClass('mobile-nav-icon-active');
	});



})();