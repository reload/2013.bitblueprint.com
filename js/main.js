(function($) {
	function adjustPageHeights(e) {
		// Make sure that a page is always as high as the window.
		var windowHeight = $(window).height();
		$(".page").css("min-height", windowHeight);
	}
	$(window).resize(adjustPageHeights);
	adjustPageHeights();

	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var hash = $(e.target).attr("href");
		if(!hash) hash = "";
		hash = hash.substring(1);
		$.scrollTo("a[name='"+ hash +"']", 300);
	});
	
	if(history.pushState) { // check if the browser supports the pushState
		$(window).scroll(function(e) {
			$this = $(this);
			if($this.data('scrollUpdateHashTimeout')) {
				clearTimeout($this.data('scrollUpdateHashTimeout'));
			}
			$this.data('scrollUpdateHashTimeout', setTimeout(function() {
				var scrollTop = $(window).scrollTop();
				var closestAnchor = null;
				var closestAnchorOffsetTop = null;
				// Loop though anchors to see which is closest.
				$("a[name]").each(function() {
					var offsetTop = $(this).offset().top;
					if(closestAnchor == null || Math.abs(scrollTop - closestAnchorOffsetTop) > Math.abs(scrollTop - offsetTop)) {
						closestAnchor = this;
						closestAnchorOffsetTop = offsetTop;
					}
				});
				if(closestAnchor) {
					// Update the hash.
					history.pushState({}, "", "#"+$(closestAnchor).attr("name"));
				}
			}, 100));
		});
	}
})(jQuery);
