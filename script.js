document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    

    function highlightActiveSection() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-links a");
    
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.pageYOffset >= sectionTop - 50 &&
            window.pageYOffset < sectionTop + sectionHeight - 50
          ) {
            const id = section.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              }
            });
          }
        });
      }
    
      // Fade-in Effect
      navbar.style.opacity = 0;
      let opacity = 0;
      const fadeIn = setInterval(() => {
        if (opacity < 1) {
          opacity += 0.1;
          navbar.style.opacity = opacity;
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    });
    



    var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
    
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  
  
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      
      dots[i].classList.remove("active");
      
      
    }
    
    slides[index].style.display = "block";
    dots[index].classList.add("active");

  

}


