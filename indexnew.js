// Select elements
const barIcon = document.querySelector(".bar i");
const headerbar = document.querySelector(".headerbar");
const closeIcon = document.querySelector(".fa-xmark");
const searchIcon = document.querySelector(".searchicon");
const searchBox = document.querySelector(".search");
// Toggle mobile menu
barIcon.addEventListener("click", () => {
    headerbar.style.display = "flex";
    barIcon.style.display = "none";
    closeIcon.style.display = "block";
  });
// Close mobile menu
closeIcon.addEventListener("click", () => {
    headerbar.style.display = "none";
    barIcon.style.display = "block";
    closeIcon.style.display = "none";
  });