// Esta función se ejecutará cuando se cargue una nueva página
function scrollToTop() {
    window.scrollTo(0, 0); // Desplaza la página hacia arriba
}

// Asigna la función al evento "beforeunload" para que se ejecute antes de cargar una nueva página
window.addEventListener("beforeunload", scrollToTop);