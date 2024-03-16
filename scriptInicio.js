const $btnRegister = document.getElementById("btn-register");
const $btnLogin = document.getElementById("btn-login");
const $loginContainer = document.getElementById("login-container");
const $registerContainer = document.getElementById("register-container");
const $formBox = document.querySelector(".form-box");
const $loginWelcomeContainer = document.querySelector(
  ".login-welcome-container"
);
const $registerWelcomeContainer = document.querySelector(
  ".register-welcome-container"
);
const $welcomeContainer = document.querySelector(".welcome-container");

$btnRegister.addEventListener("click", () => {
  $loginContainer.style.display = "none";
  $registerContainer.style.display = "block";
  $formBox.style.marginTop = "100px";
  $formBox.style.marginBottom = "40px";
  $formBox.style.transition = "all 2s";
  $loginWelcomeContainer.style.display = "none";
  $registerWelcomeContainer.style.display = "block";
  $welcomeContainer.classList.add("welcome-container-right-radius");
  // $welcomeContainer.style.height = "60vh";
  $welcomeContainer.style.marginBottom = "100px";
  $welcomeContainer.classList.add("move-left");
  $formBox.classList.add("move-right");
  //document.body.style.background = "url('./fondoinicio2.jpg')";
});

$btnLogin.addEventListener("click", () => {
  $welcomeContainer.style.marginBottom = "0px";
  $loginContainer.style.display = "block";
  $registerContainer.style.display = "none";
  $formBox.style.marginTop = "0px";
  $formBox.style.marginBottom = "0px";
  $formBox.style.transition = "all 2s";
  $welcomeContainer.style.transition = "all 2s";
  $loginWelcomeContainer.style.display = "block";
  $registerWelcomeContainer.style.display = "none";
  $welcomeContainer.classList.remove("welcome-container-right-radius");
  $welcomeContainer.classList.remove("move-left");
  $formBox.classList.remove("move-right");
  //document.body.style.background = "url('./fondoinicio3.jpg')";
});
