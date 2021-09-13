// this is for hamburger menu
function myFunction() {
  //   document.getElementById("myLinks").style.display="flex";
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// this for top image slider

var slideIndex = 1;
showSlides(slideIndex);
showMySlides(slideIndex);
showMySlider(slideIndex);


function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  //   console.log("clicked",n)
  showSlides((slideIndex = n));
  // showMySlides((slideIndex=n))
}

function currentSection10Slide(n) {
  showMySlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("section1-dot");
  console.log("show slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log(slides[i], "slides[i]");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showMySlides(n) {
  var i;
  var slides = document.getElementsByClassName("sec10-slide");
  var dots = document.getElementsByClassName("sec10-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  console.log(dots[slideIndex - 1], "dots");
}
function currentArrowSlide(n) {
    console.log("current arrow");
    showMySlider((slideIndex = n));
  }
 

  function showMySlider(n) {
    var i;
    var slides = document.getElementsByClassName("third-slider-com");
    // var dots = document.getElementsByClassName("section1-dot");
    console.log("show slides", n);
    // console.log("show slides",slides);
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    console.log(slides[slideIndex - 1]);
  }
  function showThirdSlides(n) {
    var i;
    var slides = document.getElementsByClassName("third-slider-com");
    var dots = document.getElementsByClassName("sec8-com");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }