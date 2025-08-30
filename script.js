  var slideIndex = 0;
  var timer;

  showSlides();

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n === undefined) { slideIndex++; } else { slideIndex = n; }

    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    timer = setTimeout(showSlides, 3000); // Auto change every 3 sec
  }

  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  }
