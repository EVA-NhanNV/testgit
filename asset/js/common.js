$( document ).ready(function() {
	// addClass Header
    $(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    if (scroll > 0) {
	        $("#header").addClass("hd-scroll");
	    } else {
	    	$("#header").removeClass("hd-scroll");
	    }
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".backtotop").fadeIn();
		} else {
			$(".backtotop").fadeOut();
		}
	});

	$(".backtotop a").click(function () {
		$("html, body").animate({scrollTop: 0}, 800);
		return false;
	});

	// animate load

	if ($(window).width() > 768) {
		// anim01
 		$('.img-banner').velocity({ left: "-20px", opacity: "1" }, {duration: 900, delay: 1000, easing: "linear" });
	 	// anim02
 		$('.anim02').velocity({ right: "100px", opacity: "1" }, {duration: 600, delay:2000, easing: "linear" });
	}

	// animate scroll
		function animate($ani, $valPos) {
		  $(".ani-" + $ani).each(function() {
		    var imgPos = $(this).offset().top;
		    var scroll = $(window).scrollTop();
		    var windowHeight = $(window).height();
		    if (scroll > imgPos - windowHeight + windowHeight / $valPos) {
		      $(this).addClass("animated " + $ani);
		    } else {
		    $(this).removeClass("animated " + $ani);
		    }
		  });
		  $(".ani2-" + $ani).each(function() {
		    var imgPos = $(this).offset().top;
		    var scroll = $(window).scrollTop();
		    var windowHeight = $(window).height();
		    if (scroll > imgPos - windowHeight + windowHeight / $valPos) {
		      $(this).addClass("animated2 " + $ani);
		    } else {
		    $(this).removeClass("animated2 " + $ani);
		    }
		  });
		}
		jQuery(window).on('touchstart scroll', function(){
		  var timer = false;
		  if (timer !== false) {
		    clearTimeout(timer);
		  }
		  timer = setTimeout(function() {
		    animate('bounce','3');
		    animate('fadeIn','7');
		    animate('pulse','5');
		    animate('swing','5');
		  }, 150);
		});


	// fancybox
	$("[data-fancybox]").fancybox({
		  'showNavArrows' :  true
	});

	// menu click
  	$("#header .btnnav-sp").bind("click", function(e) {
		if($(this).hasClass("is-active")){
			$("html, body").removeClass("scroll-of");
			$(this).removeClass("is-active");
		} else {
			$("html, body").addClass("scroll-of");
			$(this).addClass("is-active");
		}
		$(".navbar-sp").slideToggle("fast");
	});
	$(".navbar-sp").bind("click", function(e){
		$(this).parents("html, body").removeClass("scroll-of");
		$(this).slideUp("fast");
		$(this).prev().removeClass("is-active");
	});
	$(".navbar-sp a").bind("click", function(e){
		$(this).parents("html, body").removeClass("scroll-of");
		$('.navbar-sp').slideUp("fast");
		$(this).parents(".navbar-sp").prev().removeClass("is-active");
	});

	// scroll to div
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				if($(window).width() > 768){
					$('html,body').animate({
						scrollTop: target.offset().top - 140
					}, 500);
				} else {
					$('html,body').animate({
						scrollTop: target.offset().top - 55
					}, 500);
				}
				return false;
			}
		}
	});

	// scroll sub page
		if(window.location.hash) {
			var hashTag = window.location.hash;
			if($(hashTag).length > 0){
				if($(window).width() > 768){
					setTimeout(function(){
						$('html,body').animate({
							scrollTop: $(hashTag).offset().top-140
						}, 100);
					}, 100);
				} else {
					$('html,body').animate({
						scrollTop: $(hashTag).offset().top-55
					}, 500);
				}
				return false;
			}
		}

	// addClass for MAC and Win
	if (navigator.userAgent.indexOf('Mac OS X') != -1) {
		$("body").addClass("mac");
	} else {
		$("body").addClass("win");
	}

	(function detectIE() {
	    var ua = window.navigator.userAgent;
	    var msie = ua.indexOf('MSIE ');
	    if (msie > 0) {
	        var ieV = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	        document.querySelector('body').className += ' IE';
	    }
	    var trident = ua.indexOf('Trident/');
	    if (trident > 0) {
	        var rv = ua.indexOf('rv:');
	        var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	        document.querySelector('body').className += ' IE';
	    }

	    var edge = ua.indexOf('Edge/');
	    if (edge > 0) {
	       var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	        document.querySelector('body').className += ' IE';
	    }
	    // other browser
	    return false;
	})();

});