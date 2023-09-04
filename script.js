const nav = document.getElementById('navbar');
window.onscroll = function () { 
    if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150 ) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");


    } 
    else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
    }
};

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'); //always display:block !!

  const navLinks = document.querySelector('.nav-links');
  const headerlinks =document.querySelectorAll('.header-links');
  const menu = document.querySelector('.menu');



  headerlinks.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.style.display = 'none';
      menu.style.display = 'none'; // Hide the overlay
      document.body.style.overflow = ''; // Restore scrolling
});
});
    

menu.addEventListener('click', () => {
  navLinks.style.display = 'none';
  menu.style.display = 'none'; // Hide the overlay
  document.body.style.overflow = ''; // Restore scrolling
});

burger.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    navLinks.style.display = 'none';
    menu.style.display = 'none'; // Hide the overlay
    document.body.style.overflow = ''; // Restore scrolling
  } else {
    menu.style.display = 'block'; // Show the overlay
    navLinks.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
});
});

///////////////////////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// let slideIndex = 0;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   slides[0].style.display = "block";
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
/////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', () => {
//   const burger = document.querySelector('.burger');
//   const navLinks = document.querySelector('.nav-links');
//   const links = document.querySelector('.bar');
//   const overlay = document.querySelector('.overlay');
  
//   burger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     overlay.classList.toggle('active');
//   });
// });

// overlay.addEventListener('click', () => {
//   navLinks.classList.remove('active'); // Remove the active class from nav-links
//   overlay.classList.remove('active'); // Remove the active class from overlay
// });

// burger.addEventListener('click', () => {
//   navLinks.classList.remove('active'); // Remove the active class from nav-links
//   overlay.classList.remove('active'); // Remove the active class from overlay
// });

// links.addEventListener('click', () => {
//   navLinks.classList.remove('active'); // Remove the active class from nav-links
//   overlay.classList.remove('active'); // Remove the active class from overlay
// });

// //////\
// burger.addEventListener('click', () => {
//   overlay.classList.toggle('active'); // Toggle the active class on overlay

//   // Toggle body scrolling
//   if (overlay.classList.contains('active')) {
//     document.body.style.overflow = 'hidden'; // Disable scrolling
//   } else {
//     document.body.style.overflow = ''; // Restore scrolling
//   }
// })



// allow menu to close when selecting the burger icon 
// show the menue title when menu is show in parallel