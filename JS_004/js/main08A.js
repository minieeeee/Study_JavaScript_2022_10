/**
 * Selector
 * css나 js 코드에서 참조할 수 있는 tag 요소들
 * tagName(div, p) : 여러개 있을 수 있다
 * id(#username, #password) : 한 화면에 1개만 있어야 한다
 * class(div.div1, button.btn) : 여러개 있을 수 있다
 */
const username = document.querySelector("#username");
const password = document.querySelector("#password");
/**
 * HTML에서 id나 class 이름을 지을 때
 * snack case로 많이 작성한다
 * 이 이름을 JS 코드에서 변수로 선언할 때는
 * 가극접 Camel case로 작성하는 것이 좋다
 */
const rePassword = document.querySelector("re_password");
const btnSubmit = document.querySelector("button.btn_submit");

btnSubmit?.addEventListener("click", () => {
  const txtRePassword = rePassword.value;
  // if(username.value === "") : 보편적인 언어
  // JS 고유의 코드
  if (!username.value) {
    alert("아이디를 입력하세요");
    username.focus();
  } else if (!password.value) {
    alert("비밀번호를 입력하세요");
    password.focus();
  } else if (!txtRePassword) {
    alert("비밀번호를 확인하세요");
    rePassword.focus();
  } else {
    // 서버로 전송하는 코드
  }
  return false;
});
