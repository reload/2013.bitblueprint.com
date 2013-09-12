(function($) {
	$.fn.randomize = function(selector) {
		var $elems = selector ? $(this).find(selector) : $(this).children(),
		$parents = $elems.parent();

		$parents.each(function(){
			$(this).children(selector).sort(function(){
				return Math.round(Math.random()) - 0.5;
			}).remove().appendTo(this);
		});

		return this;
	};

	function updateCurrentAnchor() {
		if($(window).data('isScrolling') != true) {
			var scrollTop = $(window).scrollTop();
			var navbarHeight = $("body > .navbar").height();
			// Remember the previous anchor for comparison.
			var $previousAnchor = $(window).data('currentAnchor');
			var $currentAnchor = null;
			// Loop though anchors to see which is the last above the viewport.
			$("a[name]").each(function() {
				var offsetTop = $(this).offset().top;
				if(scrollTop - offsetTop + navbarHeight >= 0) {
					$currentAnchor = $(this);
				}
			});
			// Update the anchor.
			$(window).data('currentAnchor', $currentAnchor);
			if($previousAnchor && $currentAnchor && ($previousAnchor == null || !$previousAnchor.is($currentAnchor))) {
				if(history.pushState) { // check if the browser supports the pushState
					// Update the hash.
					history.pushState({}, "", "#"+$currentAnchor.attr("name"));
				}
				updateNavbar();
				updateDocumentTitle();
			}
		}
	}

	function adjustPageHeights() {
		var $previousAnchor = $(window).data('currentAnchor');
		// Make sure that a page is always as high as the window.
		var windowHeight = $(window).height();
		$(".page").css("min-height", windowHeight);
		updateCurrentAnchor();
		var $currentAnchor = $(window).data('currentAnchor');
		// If the current anchor has changed due to an ajustment in page height ..
		if($previousAnchor && !$previousAnchor.is($currentAnchor)) {
			$(window).data('isScrolling', true);
			// Scroll to the previousAnchor.
			$.scrollTo($previousAnchor, 300, {
				axis : 'y',
				offset: { top: 0 },
				onAfter: function() {
					$(window).data('isScrolling', false);
					updateCurrentAnchor();
				}
			});
		}
	}

	// Update the class on the navbar, based on the current anchor.
	function updateNavbar() {
		// Get the current anchor from the window's data.
		var $currentAnchor = $(window).data('currentAnchor');
		// What is the color for the navbar?
		var navbarColor = $currentAnchor.data("navbar-color");
		// Update the navbar classes.
		$("body > .navbar").removeClass("white blue marine black").addClass(navbarColor);
	}

	function updateDocumentTitle() {
		var originalTitle = $(document).data("original-title");
		// Has the original title been extracted?
		if(!originalTitle) {
			originalTitle = document.title;
			// Save
			$(document).data("original-title", originalTitle);
		}
		// Get the current anchor from the window's data.
		var $currentAnchor = $(window).data('currentAnchor');
		// What is the title?
		var title = $currentAnchor.data("title");
		if(title) {
			document.title = originalTitle + " - " + title;
		} else {
			document.title = originalTitle;
		}
	}

	// When some link with a href starting with the # is clicked.
	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var hash = $(e.target).attr("href");
		if(!hash) hash = "";
		hash = hash.substring(1);

		$(window).data('isScrolling', true);
		$.scrollTo("a[name='"+ hash +"']", 500, {
			axis : 'y',
			offset: { top: 0 },
			onAfter: function() {
				$(window).data('isScrolling', false);
				updateCurrentAnchor();
			}
		});
	});
	
	$(window).data('isScrolling', false);
	$(window).scroll(updateCurrentAnchor);
	$(window).resize(adjustPageHeights).resize();

	// Scramble profiles ...
	$("#page5").randomize(".person");

	/* ====== Modals - START ====== */
	// Clicking anywhere makes all visible modals fade out.
	$(document).on("click", function(e) {
		// If any modal is open, if so - close it.
		$(".modal-overlay:visible").fadeOut();
	});
	// Prevent clicks in modals to propagate.
	$(".modal-overlay").on("click", function(e) {
		// Prevent from propagating.
		e.stopPropagation();
	});
	// Right-clicking the brand of the navbar makes the logo-download modal fade in.
	$(".navbar .brand").bind('contextmenu', function(e) {
		e.preventDefault();
		$("#logo-download").fadeIn();
	});
	/* ====== Modals - END ====== */

})(jQuery);
