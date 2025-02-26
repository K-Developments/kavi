
const btn = document.getElementById('btn');
const navLinks = document.querySelectorAll(".nav-link");
const nav = document.getElementById('nav-menu');
let btns = document.querySelectorAll('#btn2');
let divisions = document.querySelectorAll('#division');
const thumb = document.querySelector('#thum');


btns.forEach((btns, index) => {
  btns.addEventListener("click", () => {
    btns.classList.toggle('back');
    divisions[index]?.classList.toggle("pb-[300px]");
  });
});






btn.addEventListener("click", () => {
  nav.classList.toggle("scale-100");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.add("scale-0");
    nav.classList.remove("scale-100");
    nav.classList.add("duration-300");
    
    
  });
});

const swiper = new Swiper('.swiper', {
  loop: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  initialSlide: 0,  // Add this to prevent shifting issues
  
  breakpoints: {
    640: {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: 'column',
      },
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: 'rows',
      },
    },
    1024: {
      slidesPerView: 3,
      grid: {
        rows: 3,
        fill: 'rows',
      },
    },
  },
});



