/**
 * 1. 이름, 주소, 전화번호를 입력한 후 추가 버튼을 클릭하면
 *    입력된 이름, 주소, 전화번호를 table에 추가
 * 2. 화면의 UI를 각자 디자인
 */

const tbodyAddr = document.querySelector("tbody.addr");
const btn = document.querySelector("#button");

btn?.addEventListener("click", () => {
  const 이름 = [""];
  for (let i = 0; i < 이름.length; i++) {
    const tr = document.createElement("TR");

    let td = document.createElement("TD")
    td.innerText = 이름[i]
    tr.appendChild(td);

    


});
