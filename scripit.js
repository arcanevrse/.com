const nav = document.getElementById("btn");
const menu = document.getElementById("nav2menu");

nav.addEventListener("click", () => {
  menu.classList.toggle("active");
});
