let preDisplay;
let display;
let password = document.querySelector(".pass-display");
let error = document.querySelector(".error");
const generateRandomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]|/?><.,";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
function generate() {
  preDisplay = document.querySelector(".pass-input");
  display = preDisplay.value;
  display = Number.parseInt(display);
  if (display >= 8 && display <= 20) {
    generateRandomString(display);
    password.innerHTML = generateRandomString(display);
  } else if (display < 8 || display > 20) {
    error.innerHTML = "Please enter a number between 8-20!! ";
  } else if (isNaN(display)) {
    error.innerHTML = "Please enter a number.";
  }
}
//RESET BUTTON
function reset() {
  password.innerHTML = " ";
  preDisplay.value = " ";
  error.innerHTML = " ";
}
//CLIPBOARD
function CopyToClipboard(id) {
  let r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
let clicked = document.querySelector(".copied");
let aLink = document.querySelector(".link");
let isClicked = false;
let body = document.body;
aLink.addEventListener("click", () => {
  clicked.classList.add("show");
  setTimeout(function () {
    clicked.classList.remove("show");
  }, 2000);
});
let elem = document.querySelector(".content");
let mode = document.body;
let changeText = document.querySelector(".modes");
let isOn = false;
function Toggle() {
  mode.classList.toggle("dark");
  elem.classList.toggle("shadow");
  password.classList.toggle("dark-container");
  if (!isOn) {
    changeText.innerHTML = `Dark Mode`;
    isOn = true;
  } else {
    changeText.innerHTML = `Light Mode`;
    isOn = false;
  }
}
