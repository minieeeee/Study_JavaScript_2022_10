/**
 * 화면에 있는 6개의 span tag에 1 ~ 6까지 숫자를 표시
 */

const spans = document.querySelectorAll("span");

for (let i = 0; i < spans.length; i++) {
  spans[i].innerText = i + 1;
}
