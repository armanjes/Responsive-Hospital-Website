// Selecting the relevant elements
const checkbox = document.querySelector("#showPassword");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("#password");

// password toggle functionality
checkbox.addEventListener("change", function () {
  this.checked
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
});

// form submission, email & password validation
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value.trim() === "" || emailInput.value === "") {
    document.querySelector(".form-err-msg").classList.add("show");
    emailInput.classList.add("show");
    passwordInput.classList.add("show");
  } else {
    document.querySelector(".form-err-msg").classList.remove("show");
    emailInput.classList.remove("show");
    passwordInput.classList.remove("show");
    passwordInput.value = ""
    emailInput.value = ""
  }
});