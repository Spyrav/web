$(function(){

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	 $(window).on("scroll load resize", function() {
	 	scrollPos = $(this).scrollTop();
	 	introH = intro.innerHeight();
  		 if(scrollPos > introH) {
   			 header.addClass('fixed');
  			} else {
   			 header.removeClass('fixed');
  		    }
 	});

	 $("[data-scroll]").on("click", function(event) {
	 	event.preventDefault();

	 	let blockID = $(this).data('scroll');
	 	let blockOffset = $(blockID).offset().top;
	 	nav.removeClass("show");

	 	$("html, body").animate({
	 		scrollTop: blockOffset +1
	 	}, 600);
	 });
	 navToggle.on("click", function(event) {
	 	event.preventDefault();
	 	nav.toggleClass("show");
	 });

});