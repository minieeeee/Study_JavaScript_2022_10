/**
 * input box에 숫자를 입력하고 확인 버튼 클릭
 * 1. 입력 값이 없으면 alert ("값을 입력하세요")
 * 2. 입력 값이 0 이하면 alert ("0이상을 입력하세요")
 * 3. 입력 값이 0 보다 크고, 100 이하이면 값을 제곱하여 alert
 * 4. 입력 값이 100 보다 크고, 200 이하이면 입력값 +100을 실행하여 alert
 * 5. 입력 값이 200 보다 크면 입력 값을 그대로 alert
 */

const inputNum = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const txtNum = inputNum.value;

  if (!txtNum) {
    alert("값을 입력하세요");
  } else if (Number(txtNum) <= 0) {
    alert("0 이상을 입력하세요");
  } else if (Number(txtNum) <= 100) {
    alert(Number(txtNum) ** 2);
  } else if (Number(txtNum) <= 200) {
    alert(Number(txtNum) + 100);
  } else {
    alert(Number(txtNum));
  }
});
