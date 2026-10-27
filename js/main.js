document.addEventListener("DOMContentLoaded", () => {
  
  // Gestion nav lateral
  const sections = document.querySelectorAll('header[id], section[id]');
  const dots = document.querySelectorAll('.scroll-dots .dot');

  function updateActiveDot() {
    let currentSection = '';
    const scrollPosition = window.scrollY + 250;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Comprueba si la posición actual del scroll está dentro de los límites de la sección
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Fallback: Si estamos arriba del todo (por encima de la primera sección), fuerza el inicio
    if (window.scrollY < 200 && sections.length > 0) {
      currentSection = sections[0].getAttribute('id');
    }

    // Actualiza la clase active en los puntos laterales (nav)
    dots.forEach(dot => {
      dot.classList.remove('active');
      if (dot.getAttribute('href') === `#${currentSection}`) {
        dot.classList.add('active');
      }
    });
  }

  // Boton para "volver arriba"
  const backToTopButton = document.getElementById("backToTop");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      // Muestra el botón cuando el usuario ha bajado más de 400 píxeles
      if (window.scrollY > 400) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Inicializacion al cargar la página 
  updateActiveDot();
  window.addEventListener('scroll', updateActiveDot);

});