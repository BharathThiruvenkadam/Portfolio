// ==========================
// Fade-in Animation
// ==========================

const sections = document.querySelectorAll("section");

const revealSections = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

// Initial section styles
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ==========================
// Active Navbar Link
// ==========================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==========================
// Smooth Scroll
// ==========================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==========================
// Typing Effect
// ==========================

const heroText = document.querySelector(".hero p");

const text = "Aspiring Software Developer | Front-End Developer";

let index = 0;

heroText.textContent = "";

function typeEffect() {

    if (index < text.length) {

        heroText.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 60);

    }

}

window.onload = () => {

    revealSections();

    typeEffect();

};


// ==========================
// Back to Top Button
// (Optional)
// ==========================

const topButton = document.getElementById("topBtn");

if (topButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}