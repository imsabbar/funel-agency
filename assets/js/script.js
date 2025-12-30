'use strict';

/**
 * Navbar toggle and smooth scroll
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");

/**
 * Element toggle function
 */
const elemToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// Toggle navbar
menuToggleBtn.addEventListener("click", function () { 
  elemToggleFunc(navbar);
  elemToggleFunc(menuToggleBtn);
});

// Close navbar when clicking on nav links
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    if (navbar.classList.contains("active")) {
      elemToggleFunc(navbar);
      elemToggleFunc(menuToggleBtn);
    }
  });
});

/**
 * Sticky header on scroll
 */
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * Active nav link on scroll
 */
const sections = document.querySelectorAll("section[id]");

function activeNavLink() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`[data-nav-link][href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", activeNavLink);

/**
 * Go to top
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

/**
 * Scroll reveal animation
 */
const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const elementTop = revealElements[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

/**
 * Form validation and smooth submission
 */
const contactForm = document.getElementById("contact-form");
const ctaForm = document.getElementById("cta-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    contactForm.reset();
  });
}

if (ctaForm) {
  ctaForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you! Check your email for your free audit.");
    ctaForm.reset();
  });
}