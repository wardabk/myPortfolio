document.addEventListener("DOMContentLoaded", function () {
  const typedContainer = document.getElementById("typed-container");
  const items = typedContainer.getAttribute("data-typed-items").split(", ");
  let index = 0;
  let charIndex = 0;
  let currentText = "";

  function type() {
    if (charIndex < items[index].length) {
      currentText += items[index][charIndex];
      typedContainer.textContent = currentText;
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed here
    } else {
      setTimeout(deleteText, 1000); // Pause before deleting
    }
  }

  function deleteText() {
    if (charIndex > 0) {
      currentText = currentText.slice(0, -1);
      typedContainer.textContent = currentText;
      charIndex--;
      setTimeout(deleteText, 50); // Adjust deleting speed here
    } else {
      index = (index + 1) % items.length;
      setTimeout(type, 500); // Pause before starting the next text
    }
  }

  type();
});

document.addEventListener("DOMContentLoaded", function () {
  // Boutons de scroll
  const scrollButtons = [
    { buttonId: "myButton1", targetId: "portfolio" },
    { buttonId: "myButton2", targetId: "contact" },
    { buttonId: "myButton22", targetId: "contact" }
  ];

  scrollButtons.forEach(({ buttonId, targetId }) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", function () {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  });

  // Téléchargement du CV
  const downloadBtn = document.getElementById('myButton11');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      const link = document.createElement('a');
      link.href = 'doc/WardaBOUBAKER-CV.pdf';
      link.download = 'wardabk_CV';
      link.click();
    });
  }
});


 //portfolio see more

 document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    { className: 'project-one', url: 'https://github.com/wardabk/Delices-Sahariens' },
    { className: 'project-two', url: 'https://wardabk.github.io/Quiz-App/' },
    { className: 'project-three', url: 'https://wardabk.github.io/myPortfolio/' },
    { className: 'project-four', url: 'https://github.com/wardabk/Front-Angular-Ensitech' },
    { className: 'project-five', url: 'https://wardabk.github.io/TravauxPratiques-10kc/' },
    { className: 'project-six', url: 'https://wardabk.github.io/MyBlog/' },
    { className: 'project-seven', url: 'https://rosechatbot.netlify.app/' }
  ];

  projects.forEach(project => {
    const buttons = document.querySelectorAll(`.${project.className}`);
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        window.open(project.url, '_blank');
      });
    });
  });
});
