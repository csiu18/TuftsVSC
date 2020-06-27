window.onload = function () {
	if (window.location.pathname === '/gallery.html') return;
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
	// resize videos
	resizeVideos();
};

window.onresize = function () {
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
	nav.style.display === 'inherit' ? hideNav() : showNav();
}

function hideNav() {
	const nav = document.querySelector('nav ul');
	nav.className = 'slide-out-right';
	setTimeout(function () {
		nav.style.display = 'none';
	}, 500);
}

function showNav() {
	const nav = document.querySelector('nav ul');
	nav.style.display = 'inherit';
	nav.className = 'tilt-in-fwd-tr';
}
