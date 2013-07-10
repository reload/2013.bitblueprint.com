(function($) {
	function adjustPageHeights(e) {
		// Make sure that a page is always as high as the window.
		var windowHeight = $(window).height();
		$(".page").css("min-height", windowHeight);
	}
	$(window).resize(adjustPageHeights);
	adjustPageHeights();
})(jQuery);
