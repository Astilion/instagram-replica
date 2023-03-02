const logo = document.querySelector(".post__bar--logo");

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const handleLogo = () => {
	fetch(DOG_URL)
		.then(res => res.json())
		.then(data => logo.setAttribute("src", data.message))
		.catch(err => console.error(err));
};
handleLogo();

const randomUsername = () => {};
