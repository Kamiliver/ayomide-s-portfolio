let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bxs-x-circle');
  navbar.classList.toggle('active');

}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()  => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove('bxs-x-circle');
  navbar.classList.remove('active');
}




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

