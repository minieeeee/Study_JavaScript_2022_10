const content = document.querySelector("#content");
const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");
const btnYellow = document.querySelector("#btnYellow");

btnRed?.addEventListener("click", () => {
  content.style.backgroundColor = "red";
});

btnBlue?.addEventListener("click", () => {
  content.style.backgroundColor = "blue";
  content.style.color = "white";
});

btnYellow?.addEventListener("click", () => {
  content.style.backgroundColor = "yellow";
});
