// SOURCE: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
const scriptURL =
	'https://script.google.com/macros/s/AKfycbwrmpZ0MimAA4VlhhgKIf65EGn2XLql5RbkJONDzMTtac1htGcc/exec';
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let section = e.target.parentElement;
	for (let childElem of section.children) {
		if (childElem.classList.contains('hidden')) {
			childElem.classList.remove('hidden');
			childElem.classList.add('fade-in');
		} else childElem.classList.add('hidden');
	}
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then((response) => {})
		.catch((error) => {});
});
