/*
    @Copyrights from :
    http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
*/
jQuery(document).ready(function($) {
	$(".scroll").click(function(event){ // When a link with the .scroll class is clicked
		event.preventDefault(); // Prevent the default action from occurring
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500); // Animate the scroll to this link's href value
	});
});