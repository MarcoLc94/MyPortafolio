document.getElementById("menu-icon").addEventListener("click", function () {
  var navbar = document.getElementById("navbar");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
});

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  navbar.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-animation");

  // Asegúrate de que el elemento existe
  if (typingElement) {
    const phrases = [
      "Front Developer",
      "React.js Developer",
      "Next.js Developer",
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    // Función para actualizar el texto de la animación
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
