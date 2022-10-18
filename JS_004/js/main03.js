const content = document.querySelector("#content");
const btnBox = document.querySelector("div.btn_box"); //클래스라서 div.btn_box

btnBox?.addEventListener("click", (tag) => {
  // 최초로 클릭된 tag의 정보를 보관
  const target = tag.target;
  // 최초로 클릭된 tag가 button이면
  if (target.tagName === "BUTTON") {
    const text = target.innerText;
    content.style.backgroundColor = text;
  }
});
