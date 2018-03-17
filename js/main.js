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
		// "read less" hides
		$(this).hide();
		// "read more" shows
		$(".readmore").show();
	});
		
	// user clicks ".learnmore"
	$(".learnmore").on("click", function() {
		// "<span>" slides down
		$("#learnmoretext").slideDown().show();
		// "learn more" hides
		$(this).hide();
	});
});









