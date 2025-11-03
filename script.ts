document.addEventListener('DOMContentLoaded', () => {
    const secciones = document.querySelectorAll('section');
    const enlaces = document.querySelectorAll('.menu-general a');

    // Función para actualizar la clase 'active' del menú
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quitar 'active' a todos
                enlaces.forEach(link => link.classList.remove('active'));
                
                // Agregar 'active' al enlace de la sección visible
                const id = entry.target.id;
                const linkActivo = document.querySelector(`.menu-general a[href="#${id}"]`);
                if (linkActivo) {
                    linkActivo.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: "0px 0px -50% 0px", // Ajusta el margen para que se active a la mitad de la pantalla
        threshold: 0.2 // Se activa cuando el 20% de la sección es visible
    });

    // Observar cada sección
    secciones.forEach(seccion => {
        observer.observe(seccion);
    });
});