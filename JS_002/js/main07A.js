const inputNum = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const txtNum = inputNum.value;
  if (!txtNum) {
    alert("값을 입력하세요");
  } else if (txtNum <= 0) {
    alert("0 이상의 값을 입력하세요");
  } else if (txtNum <= 100) {
    alert(Number(txtNum) ** 2);
  } else if (txtNum <= 200) {
    alert(Number(txtnum) + 100);
  } else {
    alert(txtNum);
  }
});
