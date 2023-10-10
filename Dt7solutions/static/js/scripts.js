$(window).load(function(){
	'use strict';
	
/* ==  
	Loader Page
==*/
	$("#loading").fadeOut("1000", function() {
	// Animation complete
		$('#loading img').css("display","none");
		$('#loading').css("display","none");
		$('#loading').css("background","none");
		$('#loading').css("width","0");
		$('#loading').css("height","0");
	});
	
/* ==  
	Disable Animated on Devices 
==*/

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.animated').addClass('visible');
	}
	else{
	    $('.animated').appear(function() {
		    var elem = $(this);
		    var animation = elem.data('animation');
		    if ( !elem.hasClass('visible') ) {
		       	var animationDelay = elem.data('animation-delay');
		        if ( animationDelay ) {
		            setTimeout(function(){
		                elem.addClass( animation + " visible" );
		            }, animationDelay);
		        } else {
		            elem.addClass( animation + " visible" );
		        }
		    }
		});
	}
	
/* ==  
	Portfolio 
==*/
	
	 var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
	
});

$(function ($) {
	
/* ==  
	Stellar Parallax
==*/
	 $(window).stellar({
        responsive: true,
        horizontalScrolling: false,
        parallaxBackgrounds: true,
        parallaxElements: true,
        hideDistantElements: true
    });
	
	
			
/* ==  
	Forms 
==*/

	//if submit button is clicked
	$('#submit,#submit2').click(function () {		
		
	//Get the data from all the fields
	var name = $('input[name=name]');
	var email = $('input[name=email]');
	var website = $('input[name=website]');
	var comment = $('textarea[name=comment]');
	var returnError = false;
	
	//Simple validation to make sure user entered something
	//Add your own error checking here with JS, but also do some error checking with PHP.
	//If error found, add hightlight class to the text field
	if (name.val()=='') {
		name.addClass('error');
		returnError = true;
	} else name.removeClass('error');
	
	if (email.val()=='') {
		email.addClass('error');
		returnError = true;
	} else email.removeClass('error');
	
	if (comment.val()=='') {
		comment.addClass('error');
		returnError = true;
	} else comment.removeClass('error');
	
	// Highlight all error fields, then quit.
	if(returnError == true){
		return false;	
	}
	
	//organize the data
	var data = 'name=' + name.val() + '&email=' + email.val() + '&website=' + 
	website.val() + '&comment='  + encodeURIComponent(comment.val());
	
	//disabled all the text fields
	$('.text').attr('disabled','true');
	
	//show the loading sign
	$('.loading').show();
	
	//start the ajax
	$.ajax({
		//this is the php file that processes the data and sends email
		url: "process.php",	
		
		//GET method is used
		type: "GET",

		//pass the data			
		data: data,		
		
		//Do not cache the page
		cache: false,
		
		//success
		success: function (html) {				
			//if process.php returned 1/true (send mail success)
			if (html==1) {					
				//hide the form
				$('.form').fadeOut('slow');					
				
				//show the success message
				$('.done').fadeIn('slow');
				
			//if process.php returned 0/false (send mail failed)
			} else alert('Sorry, unexpected error. Please try again later.');				
		}		
	});
	
	//cancel the submit button default behaviours
	return false;
	
	});

/* ==  
	Slide Panel 
==*/
	
	// icon
	
	$('#overflow-icon').on('click', function(){
		$('#overflow-icon').toggleClass('active');
		$('#full-page').toggleClass('slide-right');
		$('#slidemenu').toggleClass('show-menu');
	});
	
	// full page
	
	$('#full-page').on('click', function(){
		$('#full-page').removeClass('slide-right');
		$('#slidemenu').removeClass('show-menu');
	});

	// Decect Viewport Screen
	
	 var sH = $(window).height();
		$('#home-header').css('height',sH);
		
		// Centering Text for Home Header
		var parent_height = $('.center-content').parent().height();
		var image_height = $('.center-content').height();
		  
		var top_margin = (parent_height - image_height)/2; 
		$('.center-content').css( 'padding-top' , top_margin);
	});


$(document).ready(function(){
	'use strict';
	
/* == 
	Accordian Menu  
==*/

	$("#accordian a").click(function(){
		var link = $(this);
		var closest_ul = link.closest("ul");
		var parallel_active_links = closest_ul.find(".active")
		var closest_li = link.closest("li");
		var link_status = closest_li.hasClass("active");
		var count = 0;
		closest_ul.find("ul").slideUp(function(){
			if(++count == closest_ul.find("ul").length)
				parallel_active_links.removeClass("active");
		});
		if(!link_status)
		{
			closest_li.children("ul").slideDown();
			closest_li.addClass("active");
		}
	})
	
	
	/* ==  Fancy Box  ==*/
	
	$('.fancybox').fancybox();
	
		$(".fancybox-effects-a").fancybox({
			helpers: {
				title : {
					type : 'outside'
				},
				overlay : {
					speedOut : 0
				}
			}
		});

		// Disable opening and closing animations, change title type
		$(".fancybox-effects-b").fancybox({
			openEffect  : 'none',
			closeEffect	: 'none',
	
			helpers : {
				title : {
					type : 'over'
				}
			}
		});
	
		// Set custom style, close if clicked, change title type and overlay color
		$(".fancybox-effects-c").fancybox({
			wrapCSS    : 'fancybox-custom',
			closeClick : true,
	
			openEffect : 'none',
	
			helpers : {
				title : {
					type : 'inside'
				},
				overlay : {
					css : {
						'background' : 'rgba(238,238,238,0.85)'
					}
				}
			}
		});
	
		// Remove padding, set opening and closing animations, close if clicked and disable overlay
		$(".fancybox-effects-d").fancybox({
			padding: 0,
	
			openEffect : 'elastic',
			openSpeed  : 150,
	
			closeEffect : 'elastic',
			closeSpeed  : 150,
	
			closeClick : true,
	
			helpers : {
				overlay : null
			}
		});
	
		/*
		 *  Button helper. Disable animations, hide close button, change title type and content
		 */
	
		$('.fancybox-buttons').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
	
			prevEffect : 'none',
			nextEffect : 'none',
	
			closeBtn  : false,
	
			helpers : {
				title : {
					type : 'inside'
				},
				buttons	: {}
			},
	
			afterLoad : function() {
				this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			}
		});
	
	
		/*
		 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
		 */
	
		$('.fancybox-thumbs').fancybox({
			prevEffect : 'none',
			nextEffect : 'none',
	
			closeBtn  : false,
			arrows    : false,
			nextClick : true,
	
			helpers : {
				thumbs : {
					width  : 50,
					height : 50
				}
			}
		});
	
		/*
		 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
		*/
		$('.fancybox-media')
			.attr('rel', 'media-gallery')
			.fancybox({
				openEffect : 'none',
				closeEffect : 'none',
				prevEffect : 'none',
				nextEffect : 'none',
	
				arrows : false,
				helpers : {
					media : {},
					buttons : {}
				}
			});
	
		/*
		 *  Open manually
		 */
	
		$("#fancybox-manual-a").click(function() {
			$.fancybox.open('1_b.jpg');
		});
	
		$("#fancybox-manual-b").click(function() {
			$.fancybox.open({
				href : 'iframe.html',
				type : 'iframe',
				padding : 5
			});
		});
	
		$("#fancybox-manual-c").click(function() {
			$.fancybox.open([
				{
					href : 'img/portfolio/3.jpg',
					title : 'Project Name'
				}, {
					href : 'img/portfolio/5.jpg',
					title : 'Project Name'
				}, {
					href : 'img/portfolio/7.jpg',
					title : 'Project Name'
				}
			], {
				helpers : {
					thumbs : {
						width: 75,
						height: 50
					}
				}
			});
		});
		
/* ==  
	OWL CAROUSAL  
==*/
		$("#owl-demo, #owl-demo2").owlCarousel({
		autoPlay: 3000,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
		});
		
		$("#owl-demo3").owlCarousel({
		 autoPlay: 3000,
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1]
		});
		
		$("#owl-demo4").owlCarousel({
		 autoPlay: 3000,
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1]
		});

/* ==  
	COUNTER   
==*/
	  $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
	  
	 
	
/* ==  
	Nice Scroll  
==*/

    $(".slidemeu-content").niceScroll({cursorborder:"",cursorcolor:"#757575"});

/* ==  
	Ticker   
==*/

	$('#fade').list_ticker({
		speed:4000,
		effect:'fade'
	});
	
/* ==  
	Video Scalable  
==*/
	
	$(".video-fit").fitVids();
})

 
$(document).ready(function(){
	'use strict';

/* ==  
	Scroll to top  
==*/

	$("#back-top").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
/* ==  
	Video Background   
==*/

	$('.video-wrapper').prepend('<div class="video-background"></div>');
	$('.video-background').videobackground({
		videoSource: [['video/loop.mp4', 'video/mp4'],
			['video/loop.webm', 'video/webm'], 
			['video/loop.ogv', 'video/ogg']], 
		controlPosition: '#main',
		poster: 'img/background/video_bg.jpg',
		loadedCallback: function() {
			$(this).videobackground('mute');
		}
	});
});


/* ==  
	Placeholder for IE   
==*/
	
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			});
		});
	}
	
	

/* ==  
	Flikr Feed  
==*/

	$(document).ready(function(){
		'use strict';
		
		$('#basicuse').jflickrfeed({
			limit: 9,
			qstrings: {
				id: '36587311@N08'
			},
			itemTemplate: '<li><a href="{{image_b}}" class="fancybox-effects-b"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
		});
	 });


/* ==  
	Googler Map   
==*/

// Create and Initialise the Map (required) our google map below

	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	 var mapOptions = {

	 // How zoomed in you want the map to start at (always required)

			zoom: 17,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)

			center: new google.maps.LatLng(45.088530, -64.367951), // Your Address Here

			// How you would like to style the map. 
			// This is where you would paste any style found on [Snazzy Maps][1].
			// copy the Styles from Snazzy maps,  and paste that style info after the word "styles:"

			styles: [{stylers:[{hue:'#000000'},{saturation:-100}]},{featureType:'water',elementType:'geometry',stylers:[{lightness:50},{visibility:'simplified'}]},{featureType:'road',elementType:'labels',stylers:[{visibility:'off'}]}]
		};
	
		var mapElement = document.getElementById('map');
	
				// Create the Google Map using out element and options defined above
				var map = new google.maps.Map(mapElement, mapOptions);
	
		// Define the image to use for the map marker (58 x 44 px)
	
				var image = 'img/map.png';
	
		// Define the Lattitude and Longitude for the map location
	
				var myLatLng = new google.maps.LatLng(45.088530, -64.367951);
	
		// Define the map marker characteristics
	
				var mapMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: image,
				title:  'Frostbyte Interactive'
	
				});

		   // Following Lines are needed if you use the Info Window to display content when map marker is clicked

	   var infowindow = new google.maps.InfoWindow({
						content: contentString
					});

		// Following line turns the marker, into a clickable button and when clicked, opens the info window

			google.maps.event.addListener(mapMarker, 'click', function() {
				infowindow.open(map, mapMarker);
	});  

	}


/* ==  
	Bootstrap Script
==*/
	
	//tooltios
		$("[data-thumb=tooltip]").tooltip();
	
	//Tabs
		$('#myTab a').click(function (e) { 
		  e.preventDefault() 
		  $(this).tab('show')
		})
	
	//Toggles
		$('#myCollapsible').collapse({ 
		  toggle: false
		})
	
	//Carousal
		$('.carousel').carousel()
	
	//Alert
		$(".alert").alert()
	
	//Popovers
		$("[data-thumb=popover]").popover();
	
	//Dropdown Toggle
		$('.dropdown-toggle').dropdown()
	
	//Modal
		$('#myModal').modal('hide')

/* ==  
	Progress Bar  
==*/

	jQuery('.progress-bar').appear(function(){
			datavl = $(this).attr('data-value'),
			$(this).animate({ "width" : datavl + "%"}, '300');
		}); 
	
	var selectIds = $('#panel1,#panel2,#panel3,#panel4,#panel5,#panel6,#panel7,#panel8');
	$(function ($) {
		selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
			$(this).prev().find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		})
	});
	
