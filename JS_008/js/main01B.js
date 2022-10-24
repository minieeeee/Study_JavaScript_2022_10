// js 파일을 html 문서 어디에서든 연결하기 위한 조치
// 화면에 모든 html 구성요소가 모두 나타나면
document.addEventListener("DOMContentLoaded", () => {
  // 화면의 tag 요소를 js 코드에서 사용하기 위하여
  // tag 요소를 선택하여 (select) 객체에 보관하기
  // inputs, inputScores는 SelectAll()을 사용하여 다수의 요소를 보관하기 위한 객체 배열
  // btnOk는 Selector()를 사용하여 단일 요소를 보관하기 위한 객체
  const inputs = document.querySelectorAll("input");
  const inputScores = document.querySelectorAll("input.sc_score");
  const btnOk = document.querySelector("button.score_add");
  const tbodyScore = document.querySelector("tbody.score");

  // 성적들 데이터를 저장할 배열을 선언
  let scores = [];

  /**
   * 기능구현을 위한 요구사항
   * 1. input box에 값을 입력하고 추가 버튼을 클릭하면
   * 2. input box에 입력된 값(데이터)의 유효성 검사
   *    학번, 이름: 입력이 되지 않았을 때 alert을 띄우고 다시 입력
   *    국어, 영어, 수학: 입력이 되지 않으면 alert, 다시 입력
   *    점수 범위 (0 ~ 100)에서 벗어나면 alert, 다시 입력
   * 3. 입력된 데이터(학번, 이름, 국어, 영어, 수학 점수)를 어딘가에 저장하기
   * 4. 저장된 데이터를 localStorage에 영구 보관하기
   *    영구 보관하기: persistance 처리, 영속성 유지
   * 5. 저장된 데이터를 table에 보이기
   * 6. 다시(새로고침) 시작했을 때 localStroage에 보관된 데이터를 읽어와서 table에 보이기
   */

  // 유효성 검사
  const scoreCheck = () => {
    // 입력된 점수의 유효성 검사 실시
    for (let i = 0; i < inputScores.length; i++) {
      const input = inputScores[i];
      /**
       * for() 반복문에 의해서 점수를 입력 받는 input 만큼
       * 코드가 반복 실행된다 (여기서는 3번 실행)
       * 만약 첫번째 input 값을 검사하는데
       * 1번 조건문이 실행 = 아무것도 입력되지 않았을 때
       * "점수를 입력 ... " alert이 뜰 것이고 실행은 input.focus()로 점프한다
       *
       * 1번 조건문이 실행되지 않았으며
       * 2번 조건문 검사를 하고, 2번 조건문이 실행 = 0 < 점수 > 100 인 경우
       * "점수 범위..." alert이 뜰 것이고
       * 실행은 input.focus()로 점프한다
       *
       * 1번, 2번 조건문이 모두 통과 = 점수가 정상이다
       * else에 있는 continue가 실행되고 다음 점수를 검사를 시도
       *
       * 만약, 1번, 2번 검사에서 한번이라도 문제를 찾으면
       * input.focus(), return false가 실행되어 검사 과정을 즉시 중단
       * 그리고 return false로 false 값을 되돌려준다
       */
      if (!input.value) {
        // 1
        alert(`${input.placeholder} 점수를 입력하세요`);
      } else if (Number(input.value) < 0 || Number(input.value) > 100) {
        // 2
        alert(`${input.placeholder} 점수는 0 ~ 100 범위로 입력하세요`);
      } else {
        continue;
      }
      // 입력된 box 문자열을 clear 하여 다시 입력을 쉽게 할 수 있도록 도와주는 역할
      // input.value = "";

      // 입력된 text에 선택 block을 설정하여
      // 즉시 문자열을 입력하면 text를 지우고 다시 입력
      // 방향키를 누르면 문자열 중간의 글자들을 수정할 수 있도록 하여주는 역할
      input.select();
      input.focus();
      return false;
    }
    return true;
  };
  // for() end
  // 코드가 여기에 다다르면 3과목의 점수 유효성 검사가 모두 정상이다;

  // 입력된 데이터를 어딘가에 저장하기
  /**
   * 입력된 데이터를 어디에 저장할 것인가?
   * 1. 입력할 성적 데이터는 항목이 5개이다
   * 2. 다수의 학생 성적들을 입력해야 할 것이다
   */
  const scoreInput = () => {
    // 입력된 성적을 성적들(scores) 배열에 추가
    /** 학생 한 사람의 성적에는 5개의 항목(학번, 이름, 국어, 영어, 수학)이 있다
     * 5개의 항목이 하나의 묶음으로 구성되어야 할 것이기 때문에
     * 이 데이터를 객체로 묶어 주어야 한다
     * 성적 객체 = {학번, 이름, 국어, 영어, 수학} 선언
     */
    const sc_num = inputs[0].value;
    const sc_name = inputs[1].value;
    const sc_kor = Number(inputs[2].value);
    const sc_eng = Number(inputs[3].value);
    const sc_math = Number(inputs[4].value);

    // score 객체(한사람 성적 데이터 묶음)
    const score = {
      num: sc_num,
      name: sc_name,
      kor: sc_kor,
      eng: sc_eng,
      math: sc_math,
    };

    // 점수 input 데이터를 가져와서 총점 계산
    let sc_total = 0;
    inputScores.forEach((input) => {
      sc_total += Number(input.value);
    });
    // 평균 계산하기
    // 평균은 반드시 전체 총 합이 계산이 완료된 후 실행한다
    // 총점을 계산하는 for() 반복문 내에서 계산하면
    // 오차가 발생할 확률이 높아진다
    let sc_avg = Math.floor(sc_total / inputScores.length);

    // score 객체에 총점과 평균 추가하기
    score.sc_total = sc_total;
    score.sc_avg = sc_avg;

    // 여기까지 만들어진 객체가 잘 만들어지고 데이터가 정확한지 검사하기
    console.table(score);

    // socres 배열에 score 객체 추가하기
    scores.push(score);
    console.table(scores);

    // scoreInput() 함수가 끝나는 부분
    // 여기에 다다르면 score는 소멸되고,
    // scores는 score들을 담고 계속 유지가 되고 있다
  };

  // 어딘가(scores)에 저장된 데이터를 localStorage에 보관하기
  const scoreSave = () => {
    if (scores) {
      localStorage.setItem("kscore", JSON.stringify(scores));
    }
  };

  // 어딘가(scores)에 저장된 데이터를 table에 보이기
  const scorePrint = () => {
    if (!scores) {
      return false;
    }
    // table의 tbody에 이미 추가된 모든 tr, td 요소 제거
    tbodyScore.innerText = "";
    tbodyScore.innerHTML = "";
    tbodyScore.textContent = "";

    // 전체 데이터(score들) 개수 만큼 반복하면서 TR 생성하기
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      const tr = document.createElement("TR");

      // score 항목들을 TD에 담기
      /**
       * Object.values(객체)
       * 객체의 변수들만 getter 하여
       * 변수의 값들을 배열로 만들어주는 함수
       * scores = [
       *  {
       *    num:"1",
       *    name:"홍길동",
       *    kor:90,
       *    eng: 80,
       *    math: 70,
       *    sc_total:240,
       *    sc_avg: 80
       * },
       *  {
       *    num:"2",
       *    name:"이몽룡",
       *    kor:90,
       *    eng: 80,
       *    math: 70,
       *    sc_total:240,
       *    sc_avg: 80
       * }
       *
       * ]
       */
      const scoreValues = Object.values(score);
      scoreValues.forEach((value) => {
        const td = document.createElement("TD");
        td.textContent = value;
        tr.appendChild(td);
      });
      tbodyScore.appendChild(tr);
    }
  };

  // localStorage에 보관된 데이터를 읽어와서 어딘가에 저장하기
  const scoreLoad = () => {
    const loadScore = localStorage.getItem("kscore");
    // loadScore !== ""
    if (loadScore) {
      scores = JSON.parse(loadScore);
    }
    console.log(scores);
  };

  btnOk?.addEventListener("click", () => {
    /**
     * scoreCheck() 함수는 유효성 검사가 모두 정상으로 완료되면 true를 return 하고,
     * 그렇지 않으면 false를 return 할 것이다 라는 것을 미리 예상하고 작성한 코드
     */
    if (scoreCheck()) {
      scoreInput();
      scoreSave();
      scorePrint();
    }
  }); // btnAdd event end
  scoreLoad;
  scorePrint;
});
