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
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("myButton11");
  button.addEventListener("click", function () {
    var link = document.createElement("a");
    link.href = "D:Warda BOUBAKER.pdf";
    link.download = "cv_Warda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
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

 