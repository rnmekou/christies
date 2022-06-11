var w = 0;
$(function() {
 	"use strict";

 	/* -------- preloader ------- */
	    $(window).on("load", function() {
	        $('#preloader').delay(1000).fadeOut(300);
	    });
    /* -------- preloader End ------- */

 	/*--- Stick Header ---*/
	 	function header_sticky () {
	 		$(window).on("scroll", function() {
			    if ($(this).scrollTop() > 100){  
			        $('.header').addClass("sticky");
			    }else
			    {
			        $('.header').removeClass("sticky");
			    }
			});
	 	};
	 	$(document).ready(function() {
	        header_sticky ();
	    });
 	/*--- Stick Header End ---*/

 	/* Responsive Menu */
 		function responsive_menu () {
	        $(".menu-toggle").on("click", function(){
	            $(".menu-toggle").toggleClass("active");
	            $(".main-menu").slideToggle("slow");
	        });
	        $(".header .opener").on("click", function() {
	            if ($(this).hasClass("active")) {
	                $(this).removeClass("active");
	                $(this)
	                    .siblings(".main-menu ul ul")
	                    .slideUp(200);
	            } else {
	                $(".header .opener").removeClass("active");
	                $(this).addClass("active");
	                $(".main-menu ul ul").slideUp(200);
	                $(this)
	                    .siblings(".main-menu ul ul")
	                    .slideDown(200);
	            }
	        });
	    };
	    $(document).ready(function() {
	        responsive_menu ();
	    });
    /* Responsive Menu End */

 	/*--- Home Banner Slider ---*/
	 	if ($(".home-banner").length > 0) {
	 		$('.home-banner').slick({
			  	infinite: true,
			  	fade: true,
			  	speed: 1000,
			  	autoplay: true,
	  			autoplaySpeed: 10000,
	  			pauseOnHover: false,
			  	slidesToShow: 1,
			  	slidesToScroll: 1,
			  	responsive: [
				    {
				      	breakpoint: 992,
				      	settings: {
				        	arrows: false,
				        	dots: true
				      	}
				    }
				]
			}).slickAnimation();
		};
	/*--- Home Banner Slider End ---*/

	/*--- Team Slider ---*/
		if ($(".team-slider").length > 0) {
			$('.team-slider').slick({
			  	infinite: true,
			  	pauseOnHover: false,
			  	slidesToShow: 4,
			  	slidesToScroll: 1,
			  	responsive: [
				    {
				      	breakpoint: 992,
				      	settings: {
				        	slidesToShow: 3,
				        	slidesToScroll: 1
				      	}
				    },
				    {
				      	breakpoint: 768,
				      	settings: {
				        	slidesToShow: 1,
				        	slidesToScroll: 1,
				        	arrows: false,
				        	dots: true
				      	}
				    }
				]
			});
		};
	/*--- Team Slider End ---*/

	/*--- Blog Slider ---*/
		if ($(".blog-slider").length > 0) {
			$('.blog-slider').slick({
			  	infinite: true,
			  	dots: true,
			  	pauseOnHover: false,
			  	arrows: false,
			  	autoplay: true,
	  			autoplaySpeed: 5000,
	  			speed: 1000,
			  	slidesToShow: 1,
			  	slidesToScroll: 1
			});
		};
	/*--- Blog Slider End ---*/

	/*--- Testimoniyal Slider ---*/
		if ($(".image-slider").length > 0) {
			$('.image-slider').slick({
			  	infinite: true,
			  	arrows: false,
			  	pauseOnHover: false,
			  	fade: true,
			  	speed: 1000,
			  	asNavFor: '.tet-slider',
			  	slidesToShow: 1,
			  	slidesToScroll: 1
			});

			$('.tet-slider').slick({
			  	infinite: true,
			  	dots: true,
			  	arrows: false,
			  	pauseOnHover: false,
			  	speed: 1000,
			  	autoplay: true,
	  			autoplaySpeed: 5000,
			  	asNavFor: '.image-slider',
			  	slidesToShow: 1,
			  	slidesToScroll: 1
			});
		};
	/*--- Testimoniyal Slider End ---*/

	/*--------- Background parallex Scrolling ---------- */
		function Reservation_parallex () {
		    (function($) {
		      	var parallax = -0.5;

		      	var $bg_images = $(".parallex-bg");
		      	var offset_tops = [];
		      	$bg_images.each(function(i, el) {
		        	offset_tops.push($(el).offset().top);
		      	});

		      	$(window).scroll(function() {
		        	var dy = $(this).scrollTop();
		        	$bg_images.each(function(i, el) {
		          		var ot = offset_tops[i];
		          		$(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
		        	});
		      	});
		    })(jQuery);
		};
		$(document).ready(function() {
	        Reservation_parallex ();
	    });
    /*--------- Background parallex Scrolling End ---------- */

    /*--------- Smooth Scrolling ---------- */
	    if ($("html").length > 0) {
	            function smooth_scrilling () {
	                $(function () {
	                    var $window = $(window)
	                    
	                    document.onmousewheel = function () {
	                        customScroll()
	                    }
	                    if (document.addEventListener) {
	                        document.addEventListener('DOMMouseScroll', customScroll, false)
	                    }
	                    function customScroll(event) {
	                        var delta = 0
	                        if (!event) {
	                            event = window.event;
	                        }
	                        if (event.wheelDelta) {
	                            delta = event.wheelDelta / 120
	                        } else if (event.detail) {
	                            delta = -event.detail / 3
	                        }
	                        if (delta) {
	                            var scrollTop = $window.scrollTop()
	                            var finScroll = scrollTop - parseInt(delta * 100) * 3
	                            TweenMax.to($window, 1, {
	                                scrollTo: {y: finScroll, autoKill: true},
	                                ease: Power1.easeOut,
	                                autoKill: true,
	                                overwrite: 5
	                            })
	                        }
	                    }
	                });
	            
	            };
	            $(document).ready(function() {
	                smooth_scrilling ();
	            });
	    };
	/*--------- Smooth Scrolling End ---------- */

	/*--------- Fancybox ---------- */
		if ($(".gallery-box").length > 0) {
			$('[data-fancybox="gallery"]').fancybox({
			  	buttons: [
			    	"slideShow",
			    	"thumbs",
			    	"zoom",
			    	"fullScreen",
			    	"share",
			    	"close"
			  	],
			  	loop: false,
			  	protect: true
			});
		};
	/*--------- Fancybox End ---------- */

	/*--------- Footer Accordion ---------- */
		function Footer_accordion () {
			$('.footer-menu-box .footer-title, .footer-menu-box span.opener').on("click", function() {
		        if ($(this).parent('.footer-menu-box').hasClass("active")) {
		            if ( $(window).width() < 768 ){
		                $(this).parent().find('.footer-block-contant').slideUp();
		                $(this).parent('.footer-menu-box').removeClass('active');
		                $(this).parent().find('span.opener').addClass('plus');
		                $(this).parent().find('span.opener').removeClass('minus');
		            }
		        }
		        else
		        { 
		            if ( $(window).width() < 768 ){
		                $(this).parent().find('.footer-block-contant').slideDown();
		                $(this).parent('.footer-menu-box').addClass('active');
		                $('.footer-menu-box.active span.opener').addClass('minus');
		                $('.footer-menu-box.active span.opener').removeClass('plus');
		            }
		        }
		        return false;
		    });
		};
		$(document).ready(function() {
	        Footer_accordion ();
	    });
	/*--------- Footer Accordion End ---------- */

});