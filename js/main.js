(function($) {
	function adjustPageHeights(e) {
		// Make sure that a page is always as high as the window.
		var windowHeight = $(window).height();
		$(".page").css("min-height", windowHeight);
	}
	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var hash = $(e.target).attr("href");
		if(!hash) hash = "";
		hash = hash.substring(1);
		$.scrollTo("a[name='"+ hash +"']", 300, {offset: {top: -1}});
	});

	function updatePage() {
		var scrollTop = $(window).scrollTop();
		var navbarHeight = $("body > .navbar").height();
		var currentAnchor = null;
		// Loop though anchors to see which is the last above the viewport.
		$("a[name]").each(function() {
			var offsetTop = $(this).offset().top;
			if(scrollTop - offsetTop + navbarHeight >= 0) {
				currentAnchor = this;
			}
		});
		if(currentAnchor && (!$(window).data('currentAnchor') || $(window).data('currentAnchor') != currentAnchor)) {
			$(window).data('currentAnchor', currentAnchor);
			if(history.pushState) { // check if the browser supports the pushState
				// Update the hash.
				history.pushState({}, "", "#"+$(currentAnchor).attr("name"));
			}
			// Update the navbar classes.
			var navbarColor = $(currentAnchor).data("navbar-color");
			$("body > .navbar").removeClass("white blue marine black").addClass(navbarColor);
		}
	}
	
	$(window).scroll(updatePage);
	$(window).resize(adjustPageHeights);
	adjustPageHeights();
})(jQuery);
