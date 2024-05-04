

const answers = [
  "B", // 1
  "A", // 2
  "A", // 3
  "A", // 4
  "A", // 5
  "B", // 6
  "B", // 7
  "A", // 8
  "B", // 9
  "A", // 10
  "A", // 11
  "B"  // 12
];

let score = 0;

const renderQuestions = () => {
  const questionsContainer = document.getElementById("questions");
  questions.forEach((question, index) => {
    const optionA = `<label><input type="radio" name="question${index}" value="A"> A, 有</label><br>`;
    const optionB = `<label><input type="radio" name="question${index}" value="B"> B, 沒有</label><br>`;
    const questionHTML = `<div>${question}<br>${optionA}${optionB}</div><br>`;
    questionsContainer.innerHTML += questionHTML;
  });
};

const calculateScore = () => {
  score = 0;
  questions.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && selectedOption.value === answers[index]) {
      score += 1;
    }
  });
};

const showResult = () => {
  const resultContainer = document.getElementById("result");
  let resultMessage = "";
  if (score >= 0 && score <= 3) {
    resultMessage = "麵糊狗狗\n沙發馬鈴薯";
  } else if (score >= 4 && score <= 6) {
    resultMessage = "甜甜圈狗狗\n填不滿的無底洞";
  } else if (score >= 7 && score <= 9) {
    resultMessage = "可麗露狗狗\n元氣IDOL";
  } else if (score >= 10 && score <= 11) {
    resultMessage = "總匯狗狗\n金牌選手";
  }
  resultContainer.textContent = `結果：\n${resultMessage}`;
};

document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", () => {
    calculateScore();
    showResult();
  });
});
