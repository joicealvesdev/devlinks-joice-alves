const html = document.documentElement;
const switchButton = document.querySelector("#switch button");

switchButton.addEventListener("click", () => {
  html.classList.toggle("light");
});