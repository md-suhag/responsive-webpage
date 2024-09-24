const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll(".nav-link");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const navOverlay = document.querySelector(".overlay");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav-menu-open");
  navOverlay.style.display = "block";
  console.log("clicked");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu-open");
  navOverlay.style.display = "none";
});
navOverlay.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu-open");
  navOverlay.style.display = "none";
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu-open");
  });
});
