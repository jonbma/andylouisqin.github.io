$(document).ready(function() {

	function parallax() {
		var scrollPosition = $(window).scrollTop() - 2000;
		var xCoordinate = $('.parallax').css('background-position').split(' ')[0];
		$('.parallax').css('background-position', xCoordinate + " " + -(scrollPosition * 0.2) + 'px');
	}

	$(window).scroll(function() {
		parallax();
	});

});