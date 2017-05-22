(function($) {
    "use strict"; // Start of use strict

    var initStyle = function() {
		var top_offset = 50;

		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$('.page-scroll a').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - top_offset)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		});

		var scrollTop = function () {
			if ($(document).scrollTop() > top_offset) {
				$('.scroll-top').stop().fadeIn();
			} else {
				$('.scroll-top').stop().fadeOut();
			}
		};
		$(document).bind('scroll', scrollTop);
		$(window).bind('resize', scrollTop);
		scrollTop();

		// Highlight the top nav as scrolling occurs
		$('body').scrollspy({
			target: '.navbar-fixed-top',
			offset: 51
		});

		// Closes the Responsive Menu on Menu Item Click
		$('.navbar-collapse ul li a').click(function () {
			$('.navbar-toggle:visible').click();
		});

		// Offset for Main Navigation
		$('#mainNav').affix({
			offset: {
				top: 100
			}
		});
	};

    var initContact = function() {

		// Floating label headings for the contact form
		$(function () {
			$("body").on("input propertychange", ".floating-label-form-group", function (e) {
				$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
			}).on("focus", ".floating-label-form-group", function () {
				$(this).addClass("floating-label-form-group-with-focus");
			}).on("blur", ".floating-label-form-group", function () {
				$(this).removeClass("floating-label-form-group-with-focus");
			});
		});
	};

    // start template engine x
	_.ngx
		.basedir('web/')
		.xtplready({
            "mainnav": initStyle,
            "about": function () {
                _.ngx.require("web/js/twitter.min.js");
                _.ngx.require("https://buttons.github.io/buttons.js");
			},
            "contact": function () {
                _.ngx.require("web/js/contact.min.js");
                initContact();
			}
        })
		.start();

})(jQuery); // End of use strict
