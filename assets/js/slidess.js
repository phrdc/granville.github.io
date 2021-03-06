// Image Enlarger / Lightbox (by iNet / IEVEVO)
// Licenced under MIT Open Source

// Enlarges images on click


var gallery_info = { imgs: [1], currentIndex: 0 }, gallery_buttons;


function id(id) {
	return document.getElementById(id);
}


function displayImg(src) {
	id("enlarged-image").src = src;
}


function enlargeImg(srcImg) {

	// store metadata
	if (srcImg.getAttribute("data-gallery-index") != null) {
		// if it's a gallery with multiple linked images
		var allImgs = srcImg.parentNode.getElementsByTagName("img");

		gallery_info.currentIndex = srcImg.getAttribute("data-gallery-index");
		gallery_info.imgs = allImgs;
	}
	else {
		// if it's a single image
		gallery_info.currentIndex = 0;
		gallery_info.imgs = [srcImg];
	}


	// Actually enlarge the image
	var large_src = srcImg.src;

	// if an alternate SRC is supplied, use this instead
	if (srcImg.getAttribute("data-large-src") != null) {
		large_src = srcImg.getAttribute("data-large-src");
	}

	displayImg(large_src);
	id("enlarged-image").parentNode.classList.add("open");
}


function unenlargeImg() {
	// Close
	id("enlarged-image").parentNode.classList.remove("open");

}


function nextImage() {
	// Loads the next image in line
	var src = "";


	// change index
	if (gallery_info.currentIndex + 1 >= gallery_info.imgs.length) {
		// if at the end of the queue
		gallery_info.currentIndex = 0;
	}
	else {
		// if not at end of queue
		gallery_info.currentIndex = parseInt(gallery_info.currentIndex) + 1;
	}


	// if alt SRC supplied, use this
	if (gallery_info.imgs[gallery_info.currentIndex].getAttribute("data-large-src") != null) {
		src = gallery_info.imgs[gallery_info.currentIndex].getAttribute("data-large-src");
	}
	// otherwise, use the src from the img tag
	else {
		src = gallery_info.imgs[gallery_info.currentIndex].src;
	}


	// display image
	displayImg(src);
}


function prevImage() {
	// Loads the next image in line
	var src = "";


	// change index
	if (gallery_info.currentIndex <= 0) {
		// if at the end of the queue
		gallery_info.currentIndex = gallery_info.imgs.length - 1;
	}

	else {
		// if not at end of queue
		gallery_info.currentIndex = parseInt(gallery_info.currentIndex) - 1;
	}


	// if alt SRC supplied, use this
	if (gallery_info.imgs[gallery_info.currentIndex].getAttribute("data-large-src") != null) {
		src = gallery_info.imgs[gallery_info.currentIndex].getAttribute("data-large-src");
	}
	// otherwise, use the src from the img tag
	else {
		src = gallery_info.imgs[gallery_info.currentIndex].src;
	}


	// display image
	displayImg(src);
}


function initialise() {
	// Set up event listeners
	// In a separate function in case u need to call it after page load
	var galleries = document.getElementsByClassName("gallery");


	for (var x = 0; x < galleries.length; x++) {
		// for each gallery
		var gallery = galleries[x].children;

		for (var i = 0; i < gallery.length; i++) {
			// for each image, add a click listener
			if (gallery[i].src != "") {
				let src = gallery[i].src;

				gallery[i].onclick = function () {
					enlargeImg(this);
				}
			}

		}
	}

}


window.addEventListener("load", function () {

	initialise();


	// Set up big img element
	var el = document.createElement("div"), prevBtn = document.createElement("div"), nextBtn = document.createElement("div");

	// image
	el.innerHTML = "<img class='img-enlarged' id='enlarged-image' />";
	el.classList.add("img-enlarged__cont");
	el.onclick = function () {
		unenlargeImg();
	}

	// prev / next buttons
	prevBtn.innerHTML = "<span></span>";
	prevBtn.classList.add("img-enlarged__nav");
	prevBtn.classList.add("prev");
	prevBtn.onclick = function (event) {
		event.stopPropagation();
		prevImage();
	}

	nextBtn.innerHTML = "<span></span>";
	nextBtn.classList.add("img-enlarged__nav");
	nextBtn.classList.add("next");
	nextBtn.onclick = function (event) {
		event.stopPropagation();
		nextImage();
	}

	el.appendChild(prevBtn);
	el.appendChild(nextBtn);
	document.body.appendChild(el);

	gallery_buttons = [prevBtn, nextBtn];

});


//show available unit..//
//kean//
function keanavailbleunit() {
	var x = document.getElementById("keanavailbeunit");
	var y = document.getElementById("keanreserve");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

function keanavailbleunits() {
	var x = document.getElementById("keanavailbeunit");
	var y = document.getElementById("keanreserves");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}
//ken 
function kenavailbleunit() {
	var x = document.getElementById("kenavailbeunit");
	var y = document.getElementById("kenreserve");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

function kenavailbleunits() {
	var x = document.getElementById("kenavailbeunit");
	var y = document.getElementById("kenreserves");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}
//mike
function mikeavailbleunit() {
	var x = document.getElementById("mikeavailbeunit");
	var y = document.getElementById("mikereserve");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

function mikeavailbleunits() {
	var x = document.getElementById("mikeavailbeunit");
	var y = document.getElementById("mikereserves");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

//g3 available units..//
function cindyavailbleunit() {
	var x = document.getElementById("cindyavailbeunit");
	var y = document.getElementById("cindyreserve");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

function cindyavailbleunits() {
	var x = document.getElementById("cindyavailbeunit");
	var y = document.getElementById("cindyreserves");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

//crest available units..//
function rafaelavailbleunit() {
	var x = document.getElementById("rafaelavailbeunit");
	var y = document.getElementById("rafaelreserve");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

function rafaelavailbleunits() {
	var x = document.getElementById("rafaelavailbeunits");
	var y = document.getElementById("rafaelreserves");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}  