
$(window).load(function(){
	'use strict';
	
		//ANIMATED ITEMS
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
}); 