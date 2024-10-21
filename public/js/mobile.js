const menus = document.querySelector("nav ul");
const showBtn = document.querySelector(".mobile-show");
const hideBtn = document.querySelector(".mobile-hide");
showBtn.addEventListener("click", function () {
  menus.classList.add("showMenus");
});
hideBtn.addEventListener("click", function () {
  menus.classList.remove("showMenus");
  
});
