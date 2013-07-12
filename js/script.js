(function() {

	//SET #HOME HEIGHT TO WINDOW HEIGHT
	var windowHeight = $(window).height();

	$('#home').css('height',windowHeight);


	$('header').fadeIn('slow');

	$(window).scroll( function(){
		if ( $(window).scrollTop() > 20 ) {
			$('.main-nav').addClass('nav-scrolled');
		} else {
			$('.main-nav').removeClass('nav-scrolled');
		}
	});

	$('#home .main-nav')
    .delay(1500)
    .queue( function(next){
      $(this).css('top','0');
      next();
    });

	jQuery("header h1").fitText(0.75);
	jQuery("header h2").fitText(5);

})();