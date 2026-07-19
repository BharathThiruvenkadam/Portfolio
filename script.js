/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* ==========================================
   AOS ANIMATION
========================================== */

AOS.init({

    duration: 900,

    once: true,

    offset: 80

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");

const navLinks =
    document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const icon =
        menuToggle.querySelector("i");

    if (navbar.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );


    if (currentTheme === "dark") {

        document.documentElement.removeAttribute(
            "data-theme"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

});


/* ==========================================
   TYPING ANIMATION
========================================== */

const typingText =
    document.getElementById("typingText");


const typingWords = [

    "Aspiring Software Developer",

    "MCA Student",

    "Web Developer"

];


let wordIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeEffect() {

    const currentWord =
        typingWords[wordIndex];


    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    typingText.textContent =
        currentWord.substring(
            0,
            characterIndex
        );


    let speed = isDeleting
        ? 50
        : 100;


    if (
        !isDeleting &&
        characterIndex === currentWord.length
    ) {

        speed = 1800;

        isDeleting = true;

    }


    if (
        isDeleting &&
        characterIndex === 0
    ) {

        isDeleting = false;

        wordIndex =
            (wordIndex + 1)
            % typingWords.length;

        speed = 500;

    }


    setTimeout(typeEffect, speed);

}


typeEffect();


/* ==========================================
   HEADER SCROLL EFFECT
========================================== */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.getElementById("contactForm");


const formStatus =
    document.getElementById("formStatus");


contactForm.addEventListener("submit", () => {

    formStatus.textContent =
        "Sending your message...";

});


/* ==========================================
   IMAGE FALLBACK
========================================== */

document
    .querySelectorAll("img")
    .forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

                image.parentElement.classList.add(
                    "image-fallback"
                );

            }
        );

    });
