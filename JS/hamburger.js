document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerNav = document.querySelector(".hamburger-nav");
  
    hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      hamburger.classList.toggle("active");
      hamburgerNav.classList.toggle("active");
    });
  });