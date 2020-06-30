// SOURCE: w3schools
$(document).ready(function () {
	// Check if 'scroll' cookies exists
	if (Cookies.get('scroll')) {
		resizeVideos();
		scrollToHash(Cookies.get('scroll'));
		Cookies.remove('scroll');
	}
	// Add smooth scrolling to all links
	$('a').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Reset navbar
			if (matchMediaQuery('(max-width: 575.98px)')) hideNav(true);
			// Store hash from gallery page
			if (window.location.pathname === '/gallery.html') {
				Cookies.set('scroll', this.hash);
				window.location.replace('/');
				return;
			}
			// Scroll to hash
			scrollToHash(this.hash);
		} // End if
	});
});

function scrollToHash(hash) {
	// Using jQuery's animate() method to add smooth page scroll
	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	$('html, body').animate(
		{
			scrollTop: $(hash).offset().top - $('nav').height(),
		},
		800
	);
}
