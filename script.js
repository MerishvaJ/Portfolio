/* =========================
   AI PRELOADER
========================= */

const loader = document.createElement("div");
loader.id = "ai-loader";

loader.innerHTML = `
    <div class="loader-circle"></div>
    <div class="loader-text">INITIALIZING AI ENVIRONMENT...</div>
`;

document.body.appendChild(loader);

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {
            loader.remove();
        }, 1000);

    }, 2500);

});

/* =========================
   TYPEWRITER EFFECT
========================= */

const subtitle = document.querySelector(".hero-subtitle");

const text = "AI & Data Science Student | Python Developer | ML Enthusiast";

let i = 0;

subtitle.innerHTML = "";

function typing(){

    if(i < text.length){

        subtitle.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 50);

    }

}

typing();

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".custom-navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#020617";

        navbar.style.boxShadow = "0 0 20px rgba(56,189,248,0.2)";

    }
    else{

        navbar.style.background = "rgba(8,24,51,0.9)";

        navbar.style.boxShadow = "none";

    }

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".card, .about-card, .skills-container span, .section-title"
);

function reveal(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();

/* =========================
   CUSTOM CURSOR GLOW
========================= */

const cursor = document.createElement("div");

cursor.classList.add("cursor-glow");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* =========================
   SKILL CLICK EFFECT
========================= */

document.querySelectorAll(".skills-container span").forEach(skill => {

    skill.addEventListener("click", () => {

        skill.style.transform = "scale(1.2)";

        setTimeout(() => {

            skill.style.transform = "scale(1)";

        }, 300);

    });

});

/* =========================
   PARTICLE EFFECT
========================= */

for(let i = 0; i < 30; i++){

    const particle = document.createElement("div");

    particle.style.position = "fixed";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.background = "#38bdf8";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.opacity = Math.random();
    particle.style.zIndex = "-1";

    document.body.appendChild(particle);

}

/* =========================
   SMOOTH ACTIVE NAVBAR
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});