/**
 * 회원가입 버튼을 클릭하면
 * 1. 아이디, 비번, 비번확인을 입력했는지 확인하고
 *    입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 *     비밀번호부터 다시 입력 받도록 하기
 */

const inputname = document.querySelector("#username");
const inputPass = document.querySelector("#password");
const inputRepass = document.querySelector("#re_password");
const btn = document.querySelector("button.btn_submit");

btn?.addEventListener("click",()=>{
    const txtName = inputname.value;
    const txtPassword = inputPass.value;
    const txtRepass = inputRepass.value;

    if(!txtName){
        alert("아이디를 입력하세요")
        inputName.focus()
        return false;
    } else if(!txtPassword){
        alert("비밀번호를 입력하세요")
        inputPass.focus()
        return false;
    } else if(!txtRepass){
        alert("비밀번호를 확인하세요")
        inputRepass.focus()
    } else if(txtPassword !== txtRepass){
        alert("비밀번호를 다시 입력하세요")
        inputPass.focus()
    }

})
