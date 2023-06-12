const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector("header");
const headerContainerInner = document.querySelector(".header-container-inner");

btnMobileNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  if (header.classList.contains("nav-open")) {
    headerContainerInner.classList.add("hidden");
  } else {
    headerContainerInner.classList.remove("hidden");
  }
});

const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const hiddenBox = icon.nextElementSibling;
    if (hiddenBox.style.display === "block") {
      hiddenBox.style.display = "none";
    } else {
      hiddenBox.style.display = "block";
    }
  });
});

const elements = document.querySelectorAll(".number");
for (let i = 0; i < elements.length; i++) {
  elements[i].textContent = (i + 1).toString().padStart(2, "0");
}
const buttons = document.querySelectorAll(".translate-button");
const translatedTexts = document.querySelectorAll(".translated-text");

buttons.forEach((button, index) => {
  const translatedText = translatedTexts[index];

  button.addEventListener("click", () => {
    if (translatedText.style.display === "block") {
      translatedText.style.display = "none";
      button.textContent = "In English";
    } else {
      translatedText.style.display = "block";
      button.textContent = "Close";
      translatedText.parentNode.insertBefore(
        button,
        translatedText.nextSibling
      );
    }
  });
});
