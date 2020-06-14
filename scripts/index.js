// set profile pictures
window.onload = function () {
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
};
