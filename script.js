/* ===========================
   MENU RESPONSIVE
=========================== */

const menu = document.querySelector(".menu");
const header = document.querySelector("header");

/* Creamos el botón hamburguesa */
const burger = document.createElement("div");
burger.classList.add("burger");
burger.innerHTML = "☰";
header.appendChild(burger);

/* Mostrar/ocultar menú */
burger.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
});


/* ===========================
   SCROLL SUAVE
=========================== */

document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
        menu.classList.remove("menu-open"); // Cierra menú en móviles
    });
});


/* ===========================
   ANIMACIONES AL HACER SCROLL
=========================== */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ===========================
   BOTÓN FLOTANTE WHATSAPP
=========================== */

const wspButton = document.createElement("a");
wspButton.href = "https://wa.me/51997575306";
wspButton.target = "_blank";
wspButton.classList.add("wsp-floating");
wspButton.innerHTML = "💬";

document.body.appendChild(wspButton);
