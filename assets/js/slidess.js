// first carousel
let modelslideIndex = 0;
showmodelslides();

// Next-previous control
function modelnextSlide() {
    modelslideIndex++;
    showmodelslides();
}

function modelprevSlide() {
    modelslideIndex--;
    showmodelslides();
}
// Thumbnail image controlls
function modelSlide(n) {
    modelslideIndex = n - 1;
    showmodelslides();
}

function showmodelslides() {
    let hmslides = document.querySelectorAll(".hmslides");
    let hmsdots = document.querySelectorAll(".hmsdots");

    if (modelslideIndex > hmslides.length - 1) modelslideIndex = 0;
    if (modelslideIndex < 0) modelslideIndex = hmslides.length - 1;

    // hide all slides
    hmslides.forEach((slide) => {
        slide.style.display = "none";
    });

    // show one slide base on index number
    hmslides[modelslideIndex].style.display = "block";

    hmsdots.forEach((dot) => {
        dot.classList.remove("active");
    });

    hmsdots[modelslideIndex].classList.add("active");
}

