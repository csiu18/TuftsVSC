window.onload = function () {
	const NUM_IMAGES = 27;
	const NUM_COLUMNS = 3;
	const IMAGES_PER_COL = NUM_IMAGES / NUM_COLUMNS;
	const PATH = '../assets/gallery/';
	const IMG_TYPE = '.jpg';

	let container = document.querySelector('#container');
	let imageID = 0;

	for (let i = 0; i < NUM_COLUMNS; i++) {
		let section = document.createElement('div');
		section.className = 'section';
		for (let j = 0; j < IMAGES_PER_COL; j++) {
			let image = document.createElement('img');
			image.src = PATH + imageID + IMG_TYPE;
			image.alt = `gallery photo ${imageID}`;
			section.appendChild(image);
			imageID++;
		}
		container.appendChild(section);
	}
};
