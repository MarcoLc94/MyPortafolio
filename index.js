document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const logo = document.querySelector(".logo");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const navbar = document.getElementById("navbar");
  const whiteSections = document.querySelectorAll(".white-section");
  const typingElement = document.querySelector(".typing-animation");

  // Función para actualizar colores
  function updateColors() {
    let logoInWhiteSection = false;
    let menuIconInWhiteSection = false;

    whiteSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        logoInWhiteSection = true;
        menuIconInWhiteSection = true;
      }
    });

    // Cambia el color del logo
    if (logoInWhiteSection) {
      logo.classList.add("white");
    } else {
      logo.classList.remove("white");
    }

    // Cambia el color del ícono del menú hamburguesa
    if (menuIconInWhiteSection) {
      menuIcon.classList.add("white-bg");
    } else {
      menuIcon.classList.remove("white-bg");
    }
  }

  // Inicializa el estado de colores
  updateColors();

  // Escucha el evento de scroll
  window.addEventListener("scroll", updateColors);

  // También verifica al cambiar el tamaño de la ventana
  window.addEventListener("resize", updateColors);

  // Funcionalidad del menú hamburguesa
  if (menuIcon && closeIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.add("show");
    });

    closeIcon.addEventListener("click", () => {
      navbar.classList.remove("show");
    });

    document.addEventListener("click", (event) => {
      if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove("show");
      }
    });
  }

  // Animación de escritura
  if (typingElement) {
    const phrases = [
      "Front End Developer",
      "React.js Developer",
      "Next.js Developer",
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function updateText() {
      const currentPhrase = phrases[currentPhraseIndex];
      const displayedText = isDeleting
        ? currentPhrase.slice(0, currentCharIndex--)
        : currentPhrase.slice(0, currentCharIndex++);

      typingElement.textContent = displayedText;

      // Verifica si debe eliminar o agregar caracteres
      if (isDeleting) {
        if (currentCharIndex < 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(updateText, 500); // Pausa antes de comenzar a escribir la siguiente frase
        } else {
          setTimeout(updateText, 50); // Velocidad de borrado
        }
      } else {
        if (currentCharIndex > currentPhrase.length) {
          isDeleting = true;
          setTimeout(updateText, 500); // Pausa antes de comenzar a borrar
        } else {
          setTimeout(updateText, 100); // Velocidad de escritura
        }
      }
    }

    // Inicia la animación
    updateText();
  }
});
