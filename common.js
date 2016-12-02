(function($, undefined){
	$(function(){

		/* Navbar-brand - reload the page */
		$("#reload").click(function(){
			window.location.reload();
		});

		/* Smooth scrolling */
		$("a.scroll").click(function(event){
			event.preventDefault();
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$("html,body").animate({
				scrollTop: destination
			}, 1600);
			return false;
		});

		$(window).scroll(function(){
		/* Change active class to nav on page scroll */
		var sections = $(".section");
		sections.each(function() {
			var scroll = $(window).scrollTop();
			var top = $(this).offset().top - 250;
			var bottom = top + $(this).height();
			var id = $(this).attr("id");
			if (scroll > top && scroll < bottom) {
				$("a.active").removeClass("active");
				$("a[href='#"+ id +"']").addClass("active");
			} else {
				$("a[href='#"+ id +"']").removeClass("active");
			}
		});
		/* small parallax - block header */
		var wScroll = $(this).scrollTop();
		$("#parallax").css({
			"transform": "translate(0px, "+ wScroll / 30 +"%)"
		})
		/* animation - block about */
		var h = $(window).height();
		if (($(this).scrollTop() + h) > $("#animate2").offset().top) {
			$("#animate2 .slide").css({visibility: "visible"});
			$("#animate2 .slide").eq(0).addClass('animated fadeIn');
			$("#animate2 .slide").eq(1).addClass('animated rotateInUpLeft');
		}
		/* animation - block contact */
		if (($(this).scrollTop() + h) > $("#animate4").offset().top) {
			$("#animate4 .slide").css({visibility: "visible"});
			$("#animate4 .slide").eq(0).addClass('animated flipInX');
			$("#animate4 .slide").eq(1).addClass('animated flipInX');
			$("#animate4 .slide").eq(2).addClass('animated flipInX');
			$("#animate4 .slide").eq(3).addClass('animated flipInX');
		}
		});

	});
})(jQuery);