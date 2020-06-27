const NUM_IMAGES = 27;
const IMGS_PER_COL = 9;
const PATH = 'assets/gallery/';
const IMG_TYPE = '.jpg';
const imageURLS = new Array();
const images = new Array();

window.onload = function () {
	// preload images
	for (let i = 0; i < NUM_IMAGES; i++) {
		imageURLS[i] = PATH + i + IMG_TYPE;
	}
	preload(...imageURLS);

	// add animation to images
	let images = document.querySelectorAll('.section img');
	let intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0) {
				entry.target.className = 'scale-in-center';
			}
		});
	});
	for (let image of images) intersectionObserver.observe(image);
};

function preload(...urls) {
	let sectionID = 0;
	let sections = document.querySelectorAll('.section');
	for (let i = 0; i < urls.length; i++) {
		images[i] = new Image();
		images[i].src = urls[i];
		if (i !== 0 && i % IMGS_PER_COL === 0) sectionID++;
		sections[sectionID].append(images[i]);
	}
}
