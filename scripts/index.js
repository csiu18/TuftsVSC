window.onload = function () {
	// set profile pictures
	const pictures = [
		'jen.png',
		'tu-anh.png',
		'daniel.png',
		'huyen.png',
		'ricki.png',
		'cindy.png',
		'britnie.png',
	];
	const offset = '../assets/profiles/';
	const profileElems = document.querySelectorAll('.profile .image');

	for (let i = 0; i < pictures.length; i++) {
		profileElems[i].style.background =
			'url(' + offset + pictures[i] + ') center';
		profileElems[i].style.backgroundSize = 'cover';
	}

	resizeVideos();
};

window.onresize = function () {
	resizeVideos();
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
