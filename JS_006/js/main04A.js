const inputs = document.querySelectorAll("input");
const tBodyAddr = document.querySelector("tbody.addr");
const btnAdd = document.querySelector("button.add");
// 주소 데이터를 저장(보관)할 배열 선언
let addrList = [];

//localStorage에서 데이터를 가져오기
const addrLoad = () => {
  const strAddr = localStorage.getItem("myAddr");
  // 문자열로 되어 있던 데이터를 실제 배열(객체포함)로 변환하기
  // 변환 배열을 addrList에 담기
  addrList = JSON.parse(strAddr);
  console.log("가져온 데이터 확인");
  console.table(addrList);

  if (!addrList) {
    return false;
  }
  for (let i = 0; i < addrList.length; i++) {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = addrList[i].name;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList.addr;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList.tel;
    tr.appendChild(td);

    tBodyAddr.appendChild(tr);
  }
};

// 화면이 새로고침 되면 실행하기
addrLoad;

const addrCheck = () => {
  for (let i = 0; i < inputs.length; i++) {
    // inputs 배열에서 i번 요소를 input 변수에 보관
    const input = inputs[i];

    if (!input.value) {
      alert(`${input.placeholder} 를(을) 입력하세요`);
      input.focus();
      return false;
    }
  }
  return true;
};

const addrInput = () => {
  // input에 입력된 정보를 addr이라는 객체로 생성하기
  const addr = {
    name: inputs[0].value,
    addr: inputs[1].value,
    tel: inputs[2].value,
  };
  // 생성된 주소 객체를 addrList 배열에 추가하기
  addrList.push(addr);
  console.table(addrList);
  // localStorage : web browser에 기본적으로 있는 Database
  // 소규모이지만 데이터를 저장하는 공간(데이터 서버)을 제공해준다
  // localStorage에 myAddr이라는 이름으로
  // 나의 주소록(addrList) 배열에 저장된 데이터를 보관하겠다

  // localStorage에는 String(text) type의 데이터만 저장할 수 있다
  // 우리가 만든 addrList는 객체를 배열로 만든 데이터
  // 이 데이터를 바로 localStorage에 보관할 수는 없다
  // JSON style의 문자열로 변환하여 보관
  // 보관하기 JSON.srtingfy() 함수를 사용한다

  // JSON.stringfy() 함수는 Javascript에서 사용하는 어떤 데이터든지
  // 문자열로 변환할 수 있는 기능을 갖는다
  localStorage.setItem("myAddr", JSON.stringify(addrList));

  const tr = document.createElement("TR");
  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");
    td.textContent = inputs[i].value;
    tr.appendChild(td);
  }
  tBodyAddr.appendChild(tr);
};

btnAdd?.addEventListener("click", () => {
  // addrCheck 함수에서 모든 유효성 검사가 완료되면
  // return true를 하기 때문에 if() 비교하여
  // addrCheck() 실행결과가 true 이면...
  if (addrCheck()) {
    addrInput();
  }
});
