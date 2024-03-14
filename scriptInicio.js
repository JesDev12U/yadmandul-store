const $btnRegister = document.getElementById("btn-register");
const $btnLogin = document.getElementById("btn-login");
const $loginContainer = document.getElementById("login-container");
const $registerContainer = document.getElementById("register-container");
const $formBox = document.querySelector(".form-box");

$btnRegister.addEventListener("click", () => {
  $loginContainer.style.display = "none";
  $registerContainer.style.display = "block";
  $formBox.style.marginTop = "100px";
  $formBox.style.marginBottom = "40px";
  $formBox.style.transition = "all 1s";
});

$btnLogin.addEventListener("click", () => {
  $loginContainer.style.display = "block";
  $registerContainer.style.display = "none";
  $formBox.style.marginTop = "0px";
  $formBox.style.marginBottom = "0px";
  $formBox.style.transition = "all 1s";
});
