// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const contactForm = document.querySelector('form');
const arrowBtn = document.getElementById('arrow-btn');
const menuHome = document.getElementById('one');
const menuAbout = document.getElementById('two');
const menuWork = document.getElementById('three');
const menuContact = document.getElementById('four');
const sectionHome = document.getElementById('home');
const sectionAbout = document.getElementById('about');
const sectionWork = document.getElementById('work');
const sectionContact = document.getElementById('contact');

// Set Initial State Of Menu
let showMenu = false;

// Menu scrollToView

const myScrollFunc = (el, toggle) => {
	seamless.elementScrollIntoView(el, {
		behavior: 'smooth',
	});
	if (toggle) {
		toggleMenu();
	}
};

arrowBtn.addEventListener('click', () => {
	myScrollFunc(sectionAbout, false);
});

menuHome.addEventListener('click', () => {
	myScrollFunc(sectionHome, true);
});

menuAbout.addEventListener('click', () => {
	myScrollFunc(sectionAbout, true);
});

menuWork.addEventListener('click', () => {
	myScrollFunc(sectionWork, true);
});

menuContact.addEventListener('click', () => {
	myScrollFunc(sectionContact, true);
});

const handleSubmit = (e) => {
	e.preventDefault();
	let myForm = document.getElementById('myForm');
	let formData = new FormData(myForm);
	fetch('/', {
		method: 'POST',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => console.log('Form success'))
		.catch((error) => alert.error());
};

menuBtn.addEventListener('click', toggleMenu);
if (contactForm) {
	contactForm.addEventListener('submit', handleSubmit);
}

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		// Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		// Set Menu State
		showMenu = false;
	}
}
