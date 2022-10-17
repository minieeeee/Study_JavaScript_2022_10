const nums = [3, 5, 1, 2, 3, 4, 5, 6, 7, 8];
// nums 배열에 담긴 각각 요소의 값을 console에 출력
console.log("첫번째 요소 : ", nums[0]);
console.log("두번째 요소 : ", nums[1]);
console.log("세번째 요소 : ", nums[2]);
console.log("네번째 요소 : ", nums[3]);
console.log("다섯번째 요소 : ", nums[4]);

let index = 0;
console.log("첫번째 요소 : ", nums[index++]);
console.log("두번째 요소 : ", nums[index++]);
console.log("세번째 요소 : ", nums[index++]);
console.log("네번째 요소 : ", nums[index++]);
console.log("다섯번째 요소 : ", nums[index++]);

for (let i = 0; i < 10; i++) {
  console.log(i + 1, " 번째", nums[i]);
}

// 배열의 개수에 관계없이 전체 요소를 출력하기
for (let i = 0; i < nums.length; i++) {
  console.log(i + 1, " 번째", nums[i]);
}

// nums 배열에 담긴 숫자들의 합을 구하여 출력
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("합계:", sum);
