// Selecting the relevant elements
const checkbox = document.querySelector("#showPassword");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("#password");
console.log(emailInput);

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
// document.querySelector("form").addEventListener("submit", (e) => {
//   const password = passwordInput.value.trim();
//   const confirmPassword = confirmPasswordInput.value.trim();
//   if (password !== confirmPassword) {
//     e.preventDefault();
//     document.querySelector(".password-err-msg").style.display = "block";
//     return;
//   }
//   if (password === "" || confirmPassword === "") {
//     e.preventDefault();
//     document.querySelectorAll(".empty-password").forEach((e) => {
//       e.style.display = "block";
//     });
//     return;
//   } else {
//     e.preventDefault();
//     document.querySelector(".password-err-msg").style.display = "none";
//   }
// });
