/* ==========================================
   PORTFOLIO SCRIPT
========================================== */


/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    if (!preloader) return;

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* ==========================================
   AOS ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 900,

            once: true,

            offset: 80,

            easing: "ease-out-cubic"

        });

    }

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


function closeMobileMenu() {

    if (!navbar || !menuToggle) return;

    navbar.classList.remove("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open menu"
    );

    const icon =
        menuToggle.querySelector("i");

    if (icon) {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

}


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navbar.classList.toggle("open");


        const icon =
            menuToggle.querySelector("i");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        if (isOpen) {

            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );


            if (icon) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            }

        } else {

            closeMobileMenu();

        }

    });

}


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

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

}


function updateThemeIcon() {

    if (!themeToggle) return;


    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );


    if (currentTheme === "dark") {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {


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

            } else {

                document.documentElement.setAttribute(
                    "data-theme",
                    "dark"
                );

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }


            updateThemeIcon();

        }
    );

}


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

    if (!typingText) return;


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


    let speed =
        isDeleting
            ? 50
            : 100;


    if (

        !isDeleting &&

        characterIndex ===
        currentWord.length

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


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


/* ==========================================
   HEADER SCROLL EFFECT
========================================== */

const header =
    document.getElementById("header");


function updateHeader() {

    if (!header) return;


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


updateHeader();


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("main section");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {


        const sectionTop =
            section.offsetTop - 180;


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


        link.classList.remove(
            "active"
        );


        if (

            link.getAttribute("href") ===
            `#${currentSection}`

        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


updateActiveNavigation();


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
    document.getElementById("backToTop");


function updateBackToTop() {

    if (!backToTop) return;


    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


updateBackToTop();


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* ==========================================
   CONTACT FORM
   FORMSPREE
========================================== */

const contactForm =
    document.getElementById("contactForm");


const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {


            event.preventDefault();


            const submitButton =
                contactForm.querySelector(
                    "button[type='submit']"
                );


            const originalButtonHTML =

                submitButton

                    ? submitButton.innerHTML

                    : "";


            if (formStatus) {

                formStatus.textContent =
                    "Sending your message...";

                formStatus.className =
                    "form-status sending";

            }


            if (submitButton) {

                submitButton.disabled =
                    true;


                submitButton.innerHTML =

                    'Sending... ' +

                    '<i class="fa-solid fa-spinner fa-spin"></i>';

            }


            const formData =
                new FormData(contactForm);


            try {


                const response =
                    await fetch(

                        contactForm.action,

                        {

                            method: "POST",

                            body: formData,

                            headers: {

                                Accept:
                                    "application/json"

                            }

                        }

                    );


                let responseData = {};


                try {

                    responseData =
                        await response.json();

                } catch {

                    responseData = {};

                }


                if (response.ok) {


                    if (formStatus) {

                        formStatus.textContent =
                            "Message sent successfully!";

                        formStatus.className =
                            "form-status success";

                    }


                    contactForm.reset();


                } else {


                    const errorMessage =

                        responseData.errors

                            ? responseData.errors
                                .map(
                                    error =>
                                        error.message
                                )
                                .join(", ")

                            : "Unable to send message. Please try again.";


                    if (formStatus) {

                        formStatus.textContent =
                            errorMessage;

                        formStatus.className =
                            "form-status error";

                    }

                }


            } catch (error) {


                console.error(
                    "Formspree Error:",
                    error
                );


                if (formStatus) {

                    formStatus.textContent =
                        "Network error. Please check your internet connection.";

                    formStatus.className =
                        "form-status error";

                }

            }


            if (submitButton) {

                submitButton.disabled =
                    false;


                submitButton.innerHTML =
                    originalButtonHTML;

            }

        }
    );

}


/* ==========================================
   IMAGE FALLBACK
========================================== */

document
    .querySelectorAll("img")
    .forEach((image) => {


        image.addEventListener(
            "error",
            () => {


                image.style.display =
                    "none";


                if (image.parentElement) {

                    image.parentElement.classList.add(
                        "image-fallback"
                    );

                }

            }
        );

    });


/* ==========================================
   SMOOTH SCROLL
========================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((anchor) => {


        anchor.addEventListener(
            "click",
            function (event) {


                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (

                    targetId === "#" ||

                    targetId === ""

                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 80;


                    const targetPosition =

                        target.getBoundingClientRect()
                            .top +

                        window.scrollY -

                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }

            }
        );

    });


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navbar &&
            navbar.classList.contains("open")
        ) {

            closeMobileMenu();

        }

    }
);
