const logo = document.querySelector(".post__bar--logo");
const postImage = document.querySelector(".post__image--url");

const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const PICSUM_URL = "https://picsum.photos/300/400";

const handleLogo = () => {
	fetch(DOG_URL)
		.then(res => res.json())
		.then(data => logo.setAttribute("src", data.message))
		.catch(err => console.error(err));
};
handleLogo();
const handleImage = () => {
	fetch(DOG_URL)
	.then(res => res.json())
	.then(data => postImage.setAttribute("src", data.message))
	.catch(err => console.error(err));
};
handleImage()
