const NUM_IMAGES = 27;
const NUM_COL = 3;
const IMGS_PER_COL = NUM_IMAGES / NUM_COL;
const PATH = 'assets/gallery/';
const IMG_TYPE = '.jpg';
const ANIMATION = 'scale-in-center';
const imageURLS = new Array();
const images = new Array();
const reset = new Array();
let fullReset = false;

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
			if (entry.isIntersecting) {
				entry.target.className = ANIMATION;
			} else {
				if (!reset[entry.target.id]) {
					reset[entry.target.id] = true;
					entry.target.classList.remove(ANIMATION);
				}
			}
		});
	});
	for (let image of images) intersectionObserver.observe(image);
};

window.onscroll = function () {
	if (fullReset) return;
	for (let i = 0; i < reset.length; i++) reset[i] = true;
	fullReset = true;
};

function preload(...urls) {
	let sectionID = 0;
	let sections = document.querySelectorAll('.section');
	for (let i = 0; i < urls.length; i++) {
		images[i] = new Image();
		images[i].src = urls[i];
		images[i].id = i;
		reset[i] = false;
		if (i !== 0 && i % IMGS_PER_COL === 0) sectionID++;
		sections[sectionID].append(images[i]);
	}
}
