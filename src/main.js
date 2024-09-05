import "../styles/normalize.css";
import "../styles/style.css";
import "../styles/components/nav-bar.css";
import "../styles/components/home.css";
import "../styles/components/services.css";
import "../styles/components/department.css";
import "../styles/components/doctor.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "./icon.js"
import "../styles/utils.css";

const menus = document.querySelector("nav ul");
const showBtn = document.querySelector(".mobile-show");
const hideBtn = document.querySelector(".mobile-hide");
showBtn.addEventListener("click", function () {
  menus.classList.add("showMenus");
});
hideBtn.addEventListener("click", function () {
  menus.classList.remove("showMenus");
});
