document.addEventListener("load",function(){
	(function ($) {

		"use strict";
			   //---------------------------------------------
			   //Nivo slider
	   
			   //---------------------------------------------
				   $('#ensign-nivoslider-3').nivoSlider({
	   
					   effect: 'fade',
	   
					   slices: 15,
	   
					   boxCols: 8,
	   
					   boxRows: 4,
	   
					   animSpeed: 500,
	   
					   pauseTime: 5000,
	   
					   startSlide: 0,
	   
					   directionNav: true,
	   
					   controlNavThumbs: true,
	   
					   pauseOnHover: true,
	   
					   manualAdvance: false
	   
					}); 
					
					$(".rc-carousel").each(function () {
						var e = $(this),
							a = e.data("loop"),
							t = e.data("items"),
							n = e.data("margin"),
							i = (e.data("stage-padding"), e.data("autoplay")),
							o = e.data("autoplay-timeout"),
							s = e.data("smart-speed"),
							r = e.data("dots"),
							l = e.data("nav"),
							d = e.data("nav-speed"),
							c = e.data("r-x-small"),
							p = e.data("r-x-small-nav"),
							u = e.data("r-x-small-dots"),
							m = e.data("r-x-medium"),
							g = e.data("r-x-medium-nav"),
							f = e.data("r-x-medium-dots"),
							h = e.data("r-small"),
							v = e.data("r-small-nav"),
							w = e.data("r-small-dots"),
							y = e.data("r-medium"),
							C = e.data("r-medium-nav"),
							b = e.data("r-medium-dots"),
							x = e.data("r-large"),
							k = e.data("r-large-nav"),
							q = e.data("r-large-dots"),
							S = e.data("center");
						e.owlCarousel({
							loop: !!a,
							items: t || 4,
							lazyLoad: !0,
							margin: n || 0,
							autoplay: !!i,
							autoplayTimeout: o || 1e3,
							smartSpeed: s || 250,
							dots: !!r,
							nav: !!l,
							navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
							navSpeed: !!d,
							center: !!S,
							responsiveClass: !0,
							responsive: {
								0: {
									items: c || 1,
									nav: !!p,
									dots: !!u
								},
								480: {
									items: m || 2,
									nav: !!g,
									dots: !!f
								},
								768: {
									items: h || 3,
									nav: !!v,
									dots: !!w
								},
								992: {
									items: y || 5,
									nav: !!C,
									dots: !!b
								},
								1199: {
									items: x || 6,
									nav: !!k,
									dots: !!q
								}
							}
						})
					});
	   })(jQuery); 
}, true);


