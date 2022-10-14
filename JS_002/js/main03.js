const inputNum = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // const txtNum = Number(inputNum)
  // input box에 입력된 숫자가 0이면
  // 0보다 큰 수를 입력하세요 라고 alert 보이기
  //if (Number(txtNum) === 0)
  
  const txtNum = inputNum;
  const intNum = Number(txtNum);
  if (intNum <= 0) {
    alert("0보다 큰 수를 입력하세요");
  }
  /**
   * 숫자일 경우 범위를 검사하는 방법
   * 
   * intNum 변수 값이 0 이상 : 
   *        intNum >= 0, 0 <= intNum
   * intNum 변수 값이 100 이하 :
   *        intNum <= 100
   * intNum 변수 값이 0보다 큰 :
   *        intNum > 0
   * intNum 변수 값이 100보다 작은 :
   *        intNum < 100
   */

  }
});
