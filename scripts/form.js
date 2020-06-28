// SOURCE: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
const scriptURL =
	'https://script.google.com/macros/s/AKfycbwSCJsW3BkGU276xAkuWZbu7h9Gk3MzwqBNyyRb-LpZIj5fDFs/exec';
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then((response) => console.log('Success!', response))
		.catch((error) => console.error('Error!', error.message));
});
