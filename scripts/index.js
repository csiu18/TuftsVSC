window.onload = function () {
	// animate landing page
	setTimeout(function () {
		const landingPage = document.querySelector('#landing-page');
		for (let child of landingPage.children) {
			if (child.nodeName === 'H1') child.className = 'tracking-in-expand';
			else if (child.nodeName !== 'DIV')
				child.className = 'text-focus-in';
		}
	}, 200);
	if (window.location.pathname === '/gallery.html') return;
	addProfiles();
	animateEvents();
	// resize videos
	resizeVideos();
};

window.onresize = function () {
	if (matchMediaQuery('(max-width: 575.98px)')) hideNav(false);
	else showNav(false);
	if (window.location.pathname !== '/gallery.html') resizeVideos();
};

function resizeVideos() {
	if (!matchMediaQuery('(max-width: 767.98px)')) {
		// set video height to image
		const video1 = document.querySelector(
			'#spring > div:first-of-type > iframe'
		);
		const picture1 = document.querySelector(
			'#spring > div:first-of-type > div'
		);
		const video2 = document.querySelector(
			'#spring > div:last-of-type > iframe'
		);
		const picture2 = document.querySelector(
			'#spring > div:last-of-type > img'
		);
		video1.style.height = picture1.style.height;
		video2.style.height = picture2.style.height;
	} else {
		const videos = document.querySelectorAll('iframe');

		for (let video of videos) {
			const height = (video.clientWidth / 16) * 9;
			video.style.height = `${height}px`;
		}
	}
}

function matchMediaQuery(query) {
	return window.matchMedia(query).matches;
}

function toggleNav() {
	const nav = document.querySelector('nav ul');
	nav.style.display === 'inherit' ? hideNav(true) : showNav(true);
}

function hideNav(toggleAnimation) {
	const nav = document.querySelector('nav ul');
	resetAnimation(nav);
	if (toggleAnimation) nav.className = 'nav-slide-out-right';
	setTimeout(
		function () {
			nav.style.display = 'none';
		},
		toggleAnimation ? 500 : 0
	);
}

function showNav(toggleAnimation) {
	const nav = document.querySelector('nav ul');
	resetAnimation(nav);
	nav.style.display = 'inherit';
	if (toggleAnimation) nav.className = 'nav-slide-in-right';
}

function resetAnimation(nav) {
	nav.classList.remove('nav-slide-out-right');
	nav.classList.remove('nav-slide-in-right');
}

function addProfiles() {
	// set profile pictures
	const pictures = [
		'jen',
		'tu-anh',
		'daniel',
		'huyen',
		'ricki',
		'cindy',
		'britnie',
	];
	const PATH = 'assets/profiles/';
	const IMG_TYPE = '.jpg';
	const profileElems = document.querySelectorAll('.profile .image');

	for (let i = 0; i < pictures.length; i++) {
		profileElems[i].style.background =
			'url(' + PATH + pictures[i] + IMG_TYPE + ') center';
		profileElems[i].style.backgroundSize = 'cover';
	}
	// animate profiles
	let options = {
		threshold: 1.0,
	};
	let firstProfile = document.querySelector('.profile');
	let intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				let profiles = document.querySelectorAll('.profile');
				for (let i = 0; i < profiles.length; i++) {
					setTimeout(function () {
						profiles[i].classList.add('fade-in');
					}, i * 200);
				}
			}
		});
	}, options);
	intersectionObserver.observe(firstProfile);
}

function animateEvents() {
	let sections = document.querySelectorAll('#events > div > div');
	let options = {
		threshold: 0.5,
	};
	let intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				let childrenElem = entry.target.children;
				let description = entry.target.querySelector('.event-desc');
				for (let i = 0; i < childrenElem.length; i++) {
					if (description) {
						if (childrenElem[i] === description) continue;
						else childrenElem[i].classList.add('slide-in-top');
					} else {
						if (i === 0)
							childrenElem[i].classList.add('slide-in-left');
						else childrenElem[i].classList.add('slide-in-right');
					}
				}
			}
		});
	}, options);
	for (let section of sections) intersectionObserver.observe(section);
}
