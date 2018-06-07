$(document).ready(function() {
		var menuBtn = $('.top-nav_btn');
		var menu = $('.top-nav_menu');

		var sidebarBtn = $('.left-sidebar_btn');
		var sidebarMenu = $('.left-sidebar_menu');


		menuBtn.on('click', function(event) {
			event.preventDefault();
			menu.toggleClass('top-nav_menu__active');
		});

		sidebarBtn.on('click', function(event) {
			event.preventDefault();
			sidebarMenu.toggleClass('left-sidebar_menu__active');
		});
		$('.direction-blocks').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		     {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
	    ]
	});
});
