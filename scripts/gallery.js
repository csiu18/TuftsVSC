const NUM_IMAGES = 27;
const IMGS_PER_COL = 9;
const PATH = 'assets/gallery/';
const IMG_TYPE = '.jpg';

/* global IntersectionObserver */
let sentinels = document.querySelectorAll('.sentinel');
let indices = {
	section0: 0,
	section1: 0,
	section2: 0,
};

function loadImage(section) {
	let image = document.createElement('img');
	let imageID = parseInt(section.id.slice(-1)) * 9 + indices[section.id]++;
	image.src = PATH + imageID + IMG_TYPE;
	image.alt = `gallery photo ${imageID}`;
	section.appendChild(image);
	image.className = 'scale-in-center';
}

let intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		let section = entry.target.parentElement;
		if (entry.intersectionRatio > 0 && indices[section.id] < IMGS_PER_COL) {
			loadImage(section);
			section.appendChild(entry.target);
		}
	});
});

for (let sentinel of sentinels) intersectionObserver.observe(sentinel);
