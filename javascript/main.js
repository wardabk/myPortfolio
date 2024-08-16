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

// button11
document.getElementById('myButton11').addEventListener('click', function() {
 
  const link = document.createElement('a');
  link.href = 'doc/wardaCV.pdf';
  link.download ='wardabk_CV';
  link.click();
  
});

//button22
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("myButton22");
  button.addEventListener("click", function () {
    var targetSection = document.getElementById("contact");
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

//button1
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("myButton1");
  button.addEventListener("click", function () {
    var targetSection = document.getElementById("portfolio");
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

//button2
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("myButton2");
  button.addEventListener("click", function () {
    var targetSection = document.getElementById("contact");
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

 //portfolio see more

 //see more1
 document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.click-one');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const url = 'https://wardabk.github.io/TravauxPratiques-10kc/';
          window.open(url, '_blank');
      });
  });
});

//see more2
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.click-two');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const url = 'https://wardabk.github.io/projet-10kc-Bootstrap/';
          window.open(url, '_blank');
      });
  });
});

//see more3
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.click-three');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const url = 'https://wardabk.github.io/myPortfolio/';
          window.open(url, '_blank');
      });
  });
});