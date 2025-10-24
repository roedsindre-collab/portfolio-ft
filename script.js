
// Mobilmeny toggling
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Scroll-glow effekt
  window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
      document.body.classList.add("scrolling");
    } else {
      document.body.classList.remove("scrolling");
    }
  });
});
