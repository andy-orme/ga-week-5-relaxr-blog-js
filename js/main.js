$(function() {
	// prevent default behaviour of "a" tags
	$("a").click(function(e) {
		e.preventDefault();
	});
	// user clicks ".readmore"
		// "<p>" slides down
		// "read less" shows
		// "read more" hides

	// user clicks ".readless"
		// "<p>" slides up
		// "read more" shows
		// "read less" hides

	// user clicks ".learnmore"
		// "<span>" slides down
		// "hide" shows
		// "learn more" hides

	// user clicks ".hide"
		// "<span>" slides up
		// "learn more" shows
		// "hide" hides
});









