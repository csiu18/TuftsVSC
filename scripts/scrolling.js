// SOURCE: w3schools
$(document).ready(function () {
	// Check if 'scroll' cookies exists
	if (Cookies.get('scroll')) {
		scrollToHash(Cookies.get('scroll'));
		Cookies.remove('scroll');
	}
	if (window.location.pathname === '/gallery.html') {
		document.querySelector('#gallery-link').classList.add('underline');
	} else if (Cookies.get('section')) {
		document
			.querySelector(Cookies.get('section'))
			.classList.add('underline');
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
				// If on gallery, refresh to homepage
				Cookies.set('scroll', this.hash);
				window.location.replace('/');
			}
			// Remove css from previous section
			if (!Cookies.get('scroll') && Cookies.get('section')) {
				document
					.querySelector(Cookies.get('section'))
					.classList.remove('underline');
			}
			// Add css from previous section
			Cookies.set('section', this.hash + '-link');
			this.parentElement.classList.add('underline');
			// Scroll to hash
			scrollToHash(this.hash);
		} // End if
	});
	// reset CSS when clicked on logo
	$('#logo').on('click', function () {
		if (!Cookies.get('section')) return;
		Cookies.remove('section');
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
