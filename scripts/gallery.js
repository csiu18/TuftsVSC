const NUM_IMAGES = 27;
const IMGS_PER_COL = 9;
const PATH = 'assets/gallery/';
const IMG_TYPE = '.jpg';

window.onload = function () {
	if (matchMediaQuery('(max-width: 767.98px)')) loadForMobile();
	else loadForDesktop();
};

function loadImage(section, offset, newClass = undefined) {
	let id = parseInt(section.id.slice(-1));
	let image = document.createElement('img');
	let imageID = id * 9 + offset;
	image.src = PATH + imageID + IMG_TYPE;
	image.alt = `gallery photo ${imageID}`;
	section.appendChild(image);
	if (newClass) image.className = newClass;
}

function loadForMobile() {
	let sections = document.querySelectorAll('.section');
	for (let section of sections) {
		for (let i = 0; i < IMGS_PER_COL; i++) {
			loadImage(section, i);
		}
	}
	let images = document.querySelectorAll('.section img');
	let intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0) {
				entry.target.className = 'scale-in-center';
			}
		});
	});
	for (let image of images) intersectionObserver.observe(image);
}

function loadForDesktop() {
	let sentinels = document.querySelectorAll('.sentinel');
	let indices = {
		section0: 0,
		section1: 0,
		section2: 0,
	};
	let intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			let section = entry.target.parentElement;
			if (
				entry.intersectionRatio > 0 &&
				indices[section.id] < IMGS_PER_COL
			) {
				loadImage(section, indices[section.id]++, 'scale-in-center');
				section.appendChild(entry.target);
			}
		});
	});
	for (let sentinel of sentinels) intersectionObserver.observe(sentinel);
}
