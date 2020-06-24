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

	// set video height
	const video = document.querySelector('#spring > div:last-of-type > iframe');
	const picture = document.querySelector('#spring > div:last-of-type > img');
	video.style.height = picture.style.height;
};
