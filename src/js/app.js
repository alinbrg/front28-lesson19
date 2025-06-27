// let students = [1, 2, 3];
// const callbackFn = (element) => {
// 	console.log(element);
// };

// students.forEach((element) => {
// 	console.log(element);
// });

const sectionEl = document.querySelector("#main-section");
const navLinks = document.querySelectorAll("a");

function changeNavLinkStyles(navLinksList) {
	navLinksList.forEach((link) => {
		link.classList.add("header-nav-link");
	});
}

function changeNavBG() {
	const nav = document.querySelector("#header-block nav");
	nav.style.backgroundColor = "#0000ff";
}

function changeHeaderStyles() {
	console.log("click");
	const header = document.getElementById("header-block");

	header.style.backgroundColor = "#ff0000";
	header.style.padding = "20px";
	// navLinks[0].classList.add("header-nav-link");
	// navLinks[0].classList.remove("header-nav-link");
	// navLinks[0].classList.toggle("header-nav-link");

	changeNavLinkStyles(navLinks);

	changeNavBG();
}

// console.log(header);

function renderSectionContont(event) {
	console.log("event", event);
	const paragraph = document.querySelector("#main-section p");
	const title = document.querySelector("#main-section h1");

	paragraph.innerText = "This is a new paragraph text!";
	title.innerText = "This is a new title text!";
	paragraph.innerHTML = "<strong>This is a new paragraph text!</strong>";

	const newParagraph = document.createElement("p");
	newParagraph.textContent = "This is a new paragraph created with JavaScript!";
	sectionEl.appendChild(newParagraph);
	// sectionEl.insertAdjacentElement("beforebegin", newParagraph);
	// sectionEl.insertAdjacentElement("afterend", newParagraph);
}

navLinks[0].getAttribute("href");
navLinks[0].removeAttribute("href");
navLinks[0].setAttribute("href", "https://www.google.com");

const items = data.items;
console.log(items);
function renderCards(event) {
	event.stopPropagation();

	const cardsHtmls = items
		.map((item) => {
			return `<div class="card">
        <h3>${item.productName}</h3>
        <img src="${item.imageUrl}" alt="">
      </div>`;
		})
		.join("");

	document.querySelector("#cards").innerHTML = cardsHtmls;
	console.log(cardsHtmls);
}

// renderCards();

const buttonEl = sectionEl.querySelector("button");

buttonEl.addEventListener("click", renderCards, {
	once: true,
});

navLinks[0].addEventListener("click", (event) => {
	event.preventDefault();
	changeHeaderStyles();
});

sectionEl.addEventListener("click", renderSectionContont);

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "https://ik.imagekit.io/hpapi/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "https://ik.imagekit.io/hpapi/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://ik.imagekit.io/hpapi/draco.jpg",
		actor: "Tom Felton",
	},
];
