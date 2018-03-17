$(function() {
	// prevent default behaviour of "a" tags
	$("a").click(function(e) {
		e.preventDefault();
	});
	// user clicks ".readmore"
	$(".readmore").on("click", function() {
		// "<p>" slides down
		$("#show-this-on-click").slideDown().show();
		// "read more" hides
		$(this).hide();
		// "read less" shows
		$(".readless").show();
	});

	// user clicks ".readless"
	$(".readless").on("click", function() {
		// "<p>" slides up
		$("#show-this-on-click").slideUp().hide();
		// "read more" shows
		$(this).hide();
		// "read less" hides
		$(".readmore").show();
	});
		
	// user clicks ".learnmore"
		// "<span>" slides down
		// "hide" shows
		// "learn more" hides

	// user clicks ".hide"
		// "<span>" slides up
		// "learn more" shows
		// "hide" hides
});









