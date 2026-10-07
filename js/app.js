document.addEventListener("DOMContentLoaded", () => {
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    if (mensajeBienvenida) {
        mensajeBienvenida.textContent = "¡Hola! Bienvenido a mi portafolio profesional.";
    }

    const darkModeBtn = document.getElementById("dark-mode-toggle");
    darkModeBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        darkModeBtn.textContent = isDark ? "☀️" : "🌙";
    });

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    const form = document.getElementById("form-contacto");
    const feedback = document.getElementById("form-feedback");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            feedback.style.color = "green";
            feedback.textContent = "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.";
            form.reset();
        });
    }

    console.log("Script cargado: 4 funcionalidades JS activas.");
});