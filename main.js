const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-x" : "fa-solid fa-list");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-list");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header_content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header_content .header_btn", {
  ...scrollRevealOption,
  delay: 1500,
});


ScrollReveal().reveal(".about", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".process", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".services", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".form", {
  ...scrollRevealOption,
  delay: 500,
});
