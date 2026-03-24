const nav = document.getElementById("btn");
const menu = document.getElementById("nav2menu");

nav.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
});
