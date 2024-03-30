let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bxs-x-circle');
  navbar.classList.toggle('active');

}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll',  ()  => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        
      });
      document.querySelector("header nav a[href*='" + id + "']").classList.add("active");
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove('bxs-x-circle');
  navbar.classList.remove('active');
});

const typed = new Typed(".multiple-text",  {
  strings: ["Web Developer", "Web Designer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


// menuIcon.classList.remove('bxs-x-circle');
// navbar.classList.remove('active');

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


let darkModeIcon = document.querySelector("#darkMode-icon")

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.documentElement.classList.toggle("dark-mode");
};

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home, .home-content, .heading, .percentage', { origin: "top" });
ScrollReveal().reveal('.education-content, .skills-column, .project-container, .testimonial-wrapper, .textarea-field, .btn-box.btns', { origin: "bottom" });
ScrollReveal().reveal('.home-content p, .about-content p, .title, .about-img, .progress, .project-box, .input-box', { origin: "right" });
ScrollReveal().reveal('.home-content h3', { origin: "left" });