// // first carousel
// let modelslideIndex = 0;
// showmodelslides();

// // Next-previous control
// function modelnextSlide() {
//     modelslideIndex++;
//     showmodelslides();
// }

// function modelprevSlide() {
//     modelslideIndex--;
//     showmodelslides();
// }
// // Thumbnail image controlls
// function modelSlide(n) {
//     modelslideIndex = n - 1;
//     showmodelslides();
// }

// function showmodelslides() {
//     let hmslides = document.querySelectorAll(".hmslides");
//     let hmsdots = document.querySelectorAll(".hmsdots");

//     if (modelslideIndex > hmslides.length - 1) modelslideIndex = 0;
//     if (modelslideIndex < 0) modelslideIndex = hmslides.length - 1;

//     // hide all slides
//     hmslides.forEach((slide) => {
//         slide.style.display = "none";
//     });

//     // show one slide base on index number
//     hmslides[modelslideIndex].style.display = "block";

//     hmsdots.forEach((dot) => {
//         dot.classList.remove("active");
//     });

//     hmsdots[modelslideIndex].classList.add("active");
// }

// //////

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndexx = 1;
  showSlidesq(slideIndexx);
  
  function plusSlides(n) {
    showSlidesq(slideIndexx += n);
  }
  
  function currentSlide(n) {
    showSlidesq(slideIndexx = n);
  }
  
  function showSlidesq(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndexx = 1}
    if (n < 1) {slideIndexx = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexx-1].style.display = "block";
    dots[slideIndexx-1].className += " active";
    captionText.innerHTML = dots[slideIndexx-1].alt;
  }