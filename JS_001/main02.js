const btnSave = document.querySelector("#save");
const inputName = document.querySelector("#name");
const inputTel = document.querySelector("#tel");

// save button을 클릭했을 때 할일 지정
btnSave.addEventListener("click", () => {
  // 확인 메시지 보이기
  alert("저장 버튼을 클릭했습니다");

  // input#name에 입력된 text(value 속성값)을
  // txtName 변수에 보관하기
  const txtName = inputName.value;
  // 이름은 문자열과 txtName에 보관된 text를 연결하여
  // 알림으로 띄우기
  alert("이름은" + txtName);

  const txtTel = inputTel.value;
  alert("전화번호는" + txtTel);

  alert("이름 : " + txtName + "\n" + "전화번호 : " + txtTel);

  confirm("보낼까요?");
});
