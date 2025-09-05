const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    // Typing animation
    const lines = [
      " Provide Service : Web Development",
      "Front-End Developer",
      "Learning Back-End Development"
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing");
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenLines = 1500;

    function typeLine() {
      const currentLine = lines[lineIndex];

      if (!isDeleting) {
        typingElement.textContent = currentLine.substring(0, charIndex++);
        if (charIndex > currentLine.length) {
          isDeleting = true;
          setTimeout(typeLine, delayBetweenLines);
        } else {
          setTimeout(typeLine, typingSpeed);
        }
      } else {
        typingElement.textContent = currentLine.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
          setTimeout(typeLine, 500);
        } else {
          setTimeout(typeLine, deletingSpeed);
        }
      }
    }

    typeLine();
    // skill
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.progress').forEach(el => {
        const percent = el.getAttribute('data-progress');
        // Force reflow for transition
        setTimeout(() => {
          el.style.width = percent + '%';
        }, 100);
      });
    });