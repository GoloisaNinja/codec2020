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

const factHeading = document.getElementById('fact-heading');
const factText = document.getElementById('fact-text');

// Form inputs
const formName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('text-box');

// Modal Stuff
const modalWrapper = document.getElementById('modalWrapper');
const modalDismiss = document.getElementById('modalDismiss');

const handleDismiss = () => {
	modalWrapper.classList.add('noShow');
};

// Set Initial State Of Menu
let showMenu = false;

// Menu Fact Number and Text Function
const randomFactNumString = () => {
	return 'Jon Fun Fact # ' + Math.floor(Math.random() * (200 - 1));
};
const factArray = [
	`My wife has never called me Jon. She hates it. She calls me Jack instead.`,
	`I have a French Bulldog named Millie - she absolutely hates when I code late into the night.`,
	`I take my coffee with both cream and sugar and you can't make me feel bad about this.`,
	`My first coding project had me creating a "ticket desk" for tracking complaints in a transportation department.`,
	`I've written more code in VBA than I'd care to admit. There was a time when I worked exclusively in Excel.`,
	`My brother advised me to start my programming journey with PHP. To this day I still haven't fully learned it.`,
	`I can and will eat an entire thin crust pizza from Domino's.`,
	`Conventional projects are great and all, but I do love creating weird apps that no one will ever use too.`,
	`My first video game system was an 8bit Nintendo Entertainment System and my favorite game was Metroid.`,
	`My wife is Australian and makes me pretend I'm British when meeting new people because my accent sounds so dumb.`,
	`I am not a morning person and it is shocking how many people are.`,
	`I used to really enjoy flashing new ROMS on my android phones back in the day.`,
	`Javascript was and continues to be my most used language. Coupled with React it is by far my most comfortable space.`,
	`I am constantly unhappy with my deployed apps and projects. I will go back and tweak small things even after years have gone by.`,
	`I don't think the number of lines of code or being able to white board code make a good developer.`,
	`I will happily spend an entire weekend reading documentation and working on new project ideas.`,
	`I am a big fan of HIIT and indoor cycling as methods for keeping in shape.`,
	`I have terrible eyesight and in certain lighting conditions am almost completely color blind.`,
	`I cannot see laser pointers. Not even a little bit.`,
	`On average I get around 4-5 hours of sleep per night. On a good night I'll get 7.`,
	`VS code is my editor of choice and JetBrains are my preferred IDE's. IntelliJ is awesome.`,
	`I love mechanical keyboards and have developed an inability to type on anything that is not mechanical.`,
	`Preferred coding music can vary based on the project so please don't pin me down.`,
	`I think I use maybe 7 to 8 git commands on the regular - everything else I have to look up when needed.`,
	`I love raspberry pi's and have several of them running everything from servers to ad blockers.`,
	`I like putting my raspi's in ridiculous cases. It's actually problematic.`,
	`At this point I really prefer MacOS and worry that I'm losing my Windows mojo.`,
	`I know that blue light is a thing - I just never remember to care about it.`,
	`I ate green peas for lunch for almost 2 years straight. One because of cost, two because I like green peas.`,
	`I still eat cereal. I am not sorry about this.`,
	`I jumped into my first coding project without any prior programming knowledge and it was the most wonderful and stressful thing ever.`,
];
const randomFactString = () => {
	return factArray[Math.floor(Math.random() * factArray.length)];
};

// Set BG Image based on scroll position
const bgDiv = document.getElementById('linear-bg');
window.onscroll = () => {
	backgroundChange();
};
backgroundChange = () => {
	if (
		document.body.scrollTop > 1000 ||
		document.documentElement.scrollTop > 1000
	) {
		bgDiv.classList.add('change');
	} else {
		bgDiv.classList.remove('change');
	}
};
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

modalDismiss.addEventListener('click', () => {
	handleDismiss();
});

const afterSubmit = () => {
	modalWrapper.classList.remove('noShow');
	formName.value = '';
	email.value = '';
	message.value = '';
};

const handleSubmit = (e) => {
	e.preventDefault();
	let myForm = document.getElementById('myForm');
	let formData = new FormData(myForm);
	console.log(formData);
	fetch('/', {
		method: 'POST',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => afterSubmit())
		.catch((error) => {
			alert(
				'Whoops - something really unexpected happened here...try again later please'
			);
		});
};

menuBtn.addEventListener('click', toggleMenu);
if (contactForm) {
	contactForm.addEventListener('submit', handleSubmit);
}

function toggleMenu() {
	if (!showMenu) {
		let header = randomFactNumString();
		let text = randomFactString();
		factHeading.innerHTML = header;
		factText.innerHTML = text;
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
