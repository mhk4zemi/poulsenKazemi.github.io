/*
|--------------------------------------------------------------------------
	AboutMe - Personal Portfolio Resume Template Preview JS
|--------------------------------------------------------------------------
*/
document.addEventListener("touchstart", function() {},false);
(function ($) {
	"use strict";
	var windw = $(window);
/*
|--------------------------------------------------------------------------
| ACTIVE STICKY HEADER
|--------------------------------------------------------------------------
*/	
	$(function(){
	
		var navh = $('.header-nav');
		var scrollp = $(window).scrollTop();		
		if (scrollp > 100) {
			navh.addClass("menu-bg");
		} else {
			navh.removeClass("menu-bg");
		}
	 
	});
	
	$(function(){
	
		var nav = $('.header-nav');
		
		windw.scroll(function () {
			if ($(this).scrollTop() > 100) {
				nav.addClass("menu-bg");
			} else {
				nav.removeClass("menu-bg");
			}
		});
	 
	});
	
/*
|--------------------------------------------------------------------------
| Change Active State on Scroll
|--------------------------------------------------------------------------
*/	
	
	var sections = $('section')
	  , nav = $('nav')
	  , nav_height = nav.outerHeight();
	 
	windw.on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  sections.each(function() {
		var top = $(this).offset().top - 60,
			bottom = top + $(this).outerHeight();
	 
		if (cur_pos >= top && cur_pos <= bottom) {
		  nav.find('a').removeClass('active');
		  sections.removeClass('active');
	 
		  $(this).addClass('active');
		  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
	  });
	});	
/*
|--------------------------------------------------------------------------
| Smoth Scroll
|--------------------------------------------------------------------------
*/

	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			  $('html, body').animate({
				scrollTop: target.offset().top - 56
			  }, 1000);
			  return false;
			}
		  }
		});
	});
	//smmoth
	$(function(){
	
		var nav = $('.nav-container');
		
		windw.scroll(function () {
			if ($(this).scrollTop() > 56) {
				nav.addClass("fixed-nav");
			} else {
				nav.removeClass("fixed-nav");
			}
		});
	 
	});

/*
|--------------------------------------------------------------------------
| Scrollup
|--------------------------------------------------------------------------
*/
	var scrollup = $('.scrollup');
	windw.scroll(function () {
		if ($(this).scrollTop() > 100) {
			scrollup.fadeIn();
		} else {
			scrollup.fadeOut();
		}
	});
	scrollup.on('click', '', function(event){
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

/*
|--------------------------------------------------------------------------
| Preload
|--------------------------------------------------------------------------
*/
	$(function(){			
		setTimeout(function(){
			$('body').addClass('loaded');
		}, 3000);			
	});

})(jQuery);
