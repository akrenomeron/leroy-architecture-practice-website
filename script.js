document.addEventListener("DOMContentLoaded", function () {
    // ========== Navigation ==========
    var menuButton = document.querySelector(".menuButton")
    var nav = document.querySelector(".nav")
    menuButton.addEventListener("click", function () {
      var isShown = nav.classList.toggle("show")
      if (isShown){
        menuButton.classList.remove("fa-bars")
        menuButton.classList.add("fa-times")
      }
      else {
        menuButton.classList.remove("fa-times")
        menuButton.classList.add("fa-bars")
      }
    });
    

    // ========== Slideshow ==========
    var distance1 = 0
    var distance2 = 0
    var slideshow1 = document.querySelector(".slideShow")
    var slideshow2 = document.querySelector(".slideShow2")

    setInterval(function () {

        distance1 -= 100
        distance2 -= 100

        slideshow1.style.transitionProperty = "transform";
        slideshow2.style.transitionProperty = "transform";

        slideshow1.style.transform = "translateX(" + distance1 + "vw)";

        slideshow2.style.transform = "translateX(" + distance2 + "vw)";

        if (distance1 < -500) {
            slideshow1.style.transitionProperty = "none";

            slideshow1.style.transform = "translateX(400vw)";

            distance1 = 400;
            window.setTimeout(() => {
                slideshow1.style.transitionProperty = "transform";
            }, 1000)
        }

        if (distance2 < -1000) {
            slideshow2.style.transitionProperty = "none";

            slideshow2.style.transform = "translateX(-100vw)"
            distance2 = -100
            window.setTimeout(() => {
                slideshow1.style.transitionProperty = "transform";
            }, 1000)
        }
    }, 6000)
})

// add page visibility api functionality