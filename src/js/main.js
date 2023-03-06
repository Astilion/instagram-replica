const logo = document.querySelector(".post__bar--logo");
const postImage = document.querySelector(".post__image--url");
const likes = document.querySelector(".post__likes-counter--value");
const container = document.querySelector(".container");
const DOG_URL = "https://dog.ceo/api/breeds/image/random";


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
handleImage();

const addContent = () => {
	const newPost = document.createElement("div");
	newPost.classList.add("post");
	container.append(newPost);

	// create post bar element
	const postBar = document.createElement("div");
	postBar.classList.add("post__bar");
	newPost.appendChild(postBar);

	// fetch dog logo and set as post image source
	const postLogoURL = document.createElement("img");
	postBar.appendChild(postLogoURL);
	fetch(DOG_URL)
		.then(res => res.json())
		.then(data => {
			postLogoURL.classList.add("post__bar--logo");
			postLogoURL.setAttribute("src", data.message);
			postLogoURL.setAttribute("alt", "Dog API image");
		})
		.catch(err => console.error(err));
	// create post bar name element
	const postBarName = document.createElement("div");
	postBarName.classList.add("post__bar--name");
	postBarName.textContent = "UserName";
	postBar.appendChild(postBarName);
	// create post bar time element
	const postBarTime = document.createElement("span");
	postBarTime.classList.add("post__bar--time");
	postBarTime.textContent = " • date";
	postBar.appendChild(postBarTime);
	// create post image element
	const postImage = document.createElement("div");
	postImage.classList.add("post__image");
	newPost.appendChild(postImage);
	// fetch dog image and set as post image source
	fetch(DOG_URL)
		.then(res => res.json())
		.then(data => {
			const postImageURL = document.createElement("img");
			postImageURL.classList.add("post__image--url");
			postImageURL.setAttribute("src", data.message);
			postImageURL.setAttribute("alt", "Dog API image");
			postImage.appendChild(postImageURL);
		})
		.catch(err => console.error(err));
	// create post reaction bar element
	const postReactionBar = document.createElement("div");
	postReactionBar.classList.add("post__reaction-bar");
	newPost.appendChild(postReactionBar);
	// create post reaction bar heart element
	const postReactionBarHeart = document.createElement("div");
	postReactionBarHeart.classList.add(
		"post__reaction-bar--heart",
		"post__reaction-bar--icon"
	);
	postReactionBarHeart.innerHTML = '<i class="fa-regular fa-heart"></i>';
	postReactionBar.appendChild(postReactionBarHeart);

	// create post reaction bar comment element
	const postReactionBarComment = document.createElement("div");
	postReactionBarComment.classList.add(
		"post__reaction-bar--comment",
		"post__reaction-bar--icon"
	);
	postReactionBarComment.innerHTML = '<i class="fa-regular fa-comment"></i>';
	postReactionBar.appendChild(postReactionBarComment);

	// create post reaction bar dm element
	const postReactionBarDm = document.createElement("div");
	postReactionBarDm.classList.add(
		"post__reaction-bar--dm",
		"post__reaction-bar--icon"
	);
	postReactionBarDm.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
	postReactionBar.appendChild(postReactionBarDm);

	// create post reaction bar save element
	const postReactionBarSave = document.createElement("div");
	postReactionBarSave.classList.add(
		"post__reaction-bar--save",
		"post__reaction-bar--icon"
	);
	postReactionBarSave.innerHTML =
		'<i class="fa-sharp fa-regular fa-bookmark"></i>';
	postReactionBar.appendChild(postReactionBarSave);

	// create post likes counter element
	const postLikesCounter = document.createElement("div");
	postLikesCounter.classList.add("post__likes-counter");
	postLikesCounter.textContent = "Likes : ";
	newPost.appendChild(postLikesCounter);
	//create post__likes-counter--value
	const postLikesCounterValue = document.createElement("span");
	postLikesCounterValue.classList.add("post__likes-counter--value");
	postLikesCounterValue.textContent = "0";
	postLikesCounter.appendChild(postLikesCounterValue);
	handleLikes(postLikesCounterValue);

	// add comment section
	const postCommentSection = document.createElement("div");
	postCommentSection.classList.add("post__comment-section");
	newPost.appendChild(postCommentSection);

	// create comment section comments box
	const postCommentSectionCommentsBox = document.createElement("div");
	postCommentSectionCommentsBox.classList.add(
		"post__comment-section--comments-box"
	);
	postCommentSection.appendChild(postCommentSectionCommentsBox);

	// add comments
	const postCommentSectionComment1 = document.createElement("div");
	postCommentSectionComment1.classList.add("post__comment-section--comment");
	postCommentSectionComment1.innerHTML =
		"<p><span>UserName: </span>Lorem ipsum dolor sit amet consectetur.</p>";
	postCommentSectionCommentsBox.appendChild(postCommentSectionComment1);

	const postCommentSectionComment2 = document.createElement("div");
	postCommentSectionComment2.classList.add("post__comment-section--comment");
	postCommentSectionComment2.innerHTML =
		"<p><span>UserName: </span>Lorem ipsum dolor sit.</p>";
	postCommentSectionCommentsBox.appendChild(postCommentSectionComment2);

	// create comment section add comment box
	const postCommentSectionAddCommentBox = document.createElement("div");
	postCommentSectionAddCommentBox.classList.add(
		"post__comment-section__add-comment-box"
	);
	postCommentSection.appendChild(postCommentSectionAddCommentBox);

	const postCommentSectionAddCommentTextarea =
		document.createElement("textarea");
	postCommentSectionAddCommentTextarea.setAttribute("name", "comment");
	postCommentSectionAddCommentTextarea.setAttribute(
		"placeholder",
		"Add comment..."
	);
	postCommentSectionAddCommentBox.appendChild(
		postCommentSectionAddCommentTextarea
	);
}

const handleScroll = () => {
	const scrolled = window.scrollY;
	const treshold = 500;
	const bodyHeight = document.body.offsetHeight;
	const windowHeight = window.innerHeight;

	if (bodyHeight < windowHeight) {
		addContent()
	  } else if (scrolled + windowHeight >= bodyHeight - treshold) {
		addContent()
	}
};
const handleLikes = element => {
	const likesNumber = Math.floor(Math.random() * 99999) + 1;
	handleNumbers(0, likesNumber, 400, element);
};
const handleNumbers = (startNumber, finalNumber, duration, element) => {
	const increment = Math.ceil((finalNumber - startNumber) / duration);
	let currentNumber = startNumber;
	const timer = setInterval(() => {
		currentNumber += increment;
		if (currentNumber >= finalNumber) {
			clearInterval(timer);
			currentNumber = finalNumber;
		}
		element.innerHTML = currentNumber.toLocaleString();
	}, 10);
};

handleLikes(likes);

window.addEventListener("scroll", handleScroll);
