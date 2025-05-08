document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".menu-btn");

    botones.forEach(boton => {
        boton.addEventListener("mouseenter", () => {
            boton.style.transform = "scale(1.15)";
        });

        boton.addEventListener("mouseleave", () => {
            boton.style.transform = "scale(1)";
        });

        boton.addEventListener("click", () => {
            boton.style.background = "#ffcc99";
            setTimeout(() => {
                window.location.href = boton.getAttribute("onclick").split("'")[1];
            }, 300);
        });
    });
});
