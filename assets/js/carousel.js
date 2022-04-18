// first carousel
let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
    slideIndex++;
    showSlides();
    timer = _timer; // reset timer
}

function prevSlide() {
    slideIndex--;
    showSlides();
    timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    timer = _timer;
}

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dots");

    if (slideIndex > slides.length - 1) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // show one slide base on index number
    slides[slideIndex].style.display = "block";

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
    timer--;

    if (timer < 1) {
        nextSlide();
        timer = _timer; // reset timer
    }
}, 1000); // 1sec


// g1 carousel
let slideIndexss = 0;
showSlidess();


// Thumbnail image controlls
function gwannSlide(n) {
    slideIndexss = n - 1;
    showSlidess();
    timers = _timers;
}

// Next-previous control
function nextSlides() {
    slideIndexss++;
    showSlidess();
    timers = _timers; // reset timer
}

function showSlidess() {
    let gwanSlides = document.querySelectorAll(".gwanSlides");
    let dots = document.querySelectorAll(".dot");

    if (slideIndexss > gwanSlides.length - 1) slideIndexss = 0;
    if (slideIndexss < 0) slideIndexss = gwanSlides.length - 1;

    // hide all slides
    gwanSlides.forEach((slide) => {
        slide.style.display = "none";
    });

    // show one slide base on index number
    gwanSlides[slideIndexss].style.display = "block";

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[slideIndexss].classList.add("active");
}

// autoplay slides --------
let timers = 5; // sec
const _timers = timers;

// this function runs every 1 second
setInterval(() => {
    timers--;

    if (timers < 1) {
        nextSlides();
        timerss = _timers; // reset timer
    }
}, 1000); // 1sec

// g3 carousel
let slideIndexsss = 0;
showSlidesss();


// Thumbnail image controlls
function gtweeSlide(n) {
    slideIndexsss = n - 1;
    showSlidesss();
    timerss = _timerss;
}

// Next-previous control
function nextSlidess() {
    slideIndexsss++;
    showSlidesss();
    timerss = _timerss; // reset timer
}

function showSlidesss() {
    let gtweeSlides = document.querySelectorAll(".gtweeSlides");
    let gdot = document.querySelectorAll(".gdot");

    if (slideIndexsss > gtweeSlides.length - 1) slideIndexsss = 0;
    if (slideIndexsss < 0) slideIndexsss = gtweeSlides.length - 1;

    // hide all slides
    gtweeSlides.forEach((slide) => {
        slide.style.display = "none";
    });

    // show one slide base on index number
    gtweeSlides[slideIndexsss].style.display = "block";

    gdot.forEach((dot) => {
        dot.classList.remove("active");
    });

    gdot[slideIndexsss].classList.add("active");
}

// autoplay slides --------
let timerss = 5; // sec
const _timerss = timerss;

// this function runs every 1 second
setInterval(() => {
    timerss--;

    if (timerss < 1) {
        nextSlidess();
        timerss = _timerss; // reset timer
    }
}, 1000); // 1sec

// crest carousel
let slideIndexssss = 0;
showSlidessss();


// Thumbnail image controlls
function gwannSlide(n) {
    slideIndexssss = n - 1;
    showSlidessss();
    timersss = _timersss;
}

// Next-previous control
function nextSlidesss() {
    slideIndexssss++;
    showSlidessss();
    timersss = _timersss; // reset timer
}

function showSlidessss() {
    let crestSlides = document.querySelectorAll(".crestSlides");
    let gdot = document.querySelectorAll(".gdot");

    if (slideIndexssss > crestSlides.length - 1) slideIndexssss = 0;
    if (slideIndexssss < 0) slideIndexssss = crestSlides.length - 1;

    // hide all slides
    crestSlides.forEach((slide) => {
        slide.style.display = "none";
    });

    // show one slide base on index number
    crestSlides[slideIndexssss].style.display = "block";

    gdot.forEach((dot) => {
        dot.classList.remove("active");
    });

    gdot[slideIndexssss].classList.add("active");
}

// autoplay slides --------
let timersss = 5; // sec
const _timersss = timersss;

// this function runs every 1 second
setInterval(() => {
    timersss--;

    if (timersss < 1) {
        nextSlidesss();
        timersss = _timersss; // reset timer
    }
}, 1000); // 1sec