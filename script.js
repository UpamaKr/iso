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
