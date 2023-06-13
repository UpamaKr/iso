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

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
