/* ==========================================
   PORTFOLIO MAIN JAVASCRIPT
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

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,

        once: true,

        offset: 80

    });

}


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

    const icon =
        menuToggle.querySelector("i");

    if (icon) {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

    menuToggle.setAttribute(
        "aria-label",
        "Open menu"
    );

}


if (menuToggle && navbar) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navbar.classList.toggle("open");

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );

        }
    );

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

                document.documentElement
                    .removeAttribute(
                        "data-theme"
                    );

                localStorage.setItem(
                    "theme",
                    "light"
                );

            } else {

                document.documentElement
                    .setAttribute(
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


if (typingText) {

    typeEffect();

}


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
    {
        passive: true
    }
);


updateHeader();


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop - 200;


            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >=
                sectionTop &&
                window.scrollY <
                sectionBottom
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        (link) => {

            link.classList.remove(
                "active"
            );


            const linkTarget =
                link.getAttribute(
                    "href"
                );


            if (
                linkTarget ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


updateActiveNavigation();


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
    document.getElementById(
        "backToTop"
    );


function updateBackToTop() {

    if (!backToTop) return;


    if (window.scrollY > 500) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    {
        passive: true
    }
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
========================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formStatus =
    document.getElementById(
        "formStatus"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        () => {

            const submitButton =
                contactForm.querySelector(
                    "button[type='submit']"
                );


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
                    `
                    Sending...
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    `;

            }

        }
    );

}


/* ==========================================
   IMAGE FALLBACK
========================================== */

document
    .querySelectorAll("img")
    .forEach(
        (image) => {

            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";


                    if (
                        image.parentElement
                    ) {

                        image.parentElement
                            .classList.add(
                                "image-fallback"
                            );

                    }

                }
            );

        }
    );


/* ==========================================
   SMOOTH SCROLL
========================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        (anchor) => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "start"

                        });

                    }

                }
            );

        }
    );


/* ==========================================
   RESIZE HANDLING
========================================== */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 800
        ) {

            closeMobileMenu();

        }

    }
);
