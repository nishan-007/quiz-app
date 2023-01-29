const questions = [
  {
    question: "Wer hat HTML erfunden?",
    ans1: "Robbie Williams",
    ans2: "Lady Gaga",
    ans3: "Tim Berners-Lee",
    ans4: "Justin Bieber",
    right_answer: "ans-3",
  },
  {
    question: "Was bedeutet HTML?",
    ans1: "Hypertext Mark Look",
    ans2: "Hypertext Mark Language",
    ans3: "Hypertext Markup Look",
    ans4: "Hypertext Markup Language",
    right_answer: "ans-4",
  },
  {
    question: "Wie funktioniert HTML?",
    ans1: "Einzelne Befehle: ...{...}",
    ans2: "Einzelne Befehle: {...}...{/...}",
    ans3: "Einzelne Befehle: <...>...</...>",
    ans4: "Einzelne Befehle: (...)...(/...)",
    right_answer: "ans-3",
  },
  {
    question: "Was bedeutet CSS?",
    ans1: "Cascade Style Sheets",
    ans2: "Cascading Style Sheets",
    ans3: "Cool Style Sheets",
    ans4: "Cool Style Sheet",
    right_answer: "ans-2",
  },
  {
    question: "Wie ändert man die Hintergrundfarbe?",
    ans1: "background-color: ...",
    ans2: "back ground color: ...",
    ans3: "backgroundcolor: ...",
    ans4: "back-ground-color: ...",
    right_answer: "ans-1",
  },
];

function quesHTML() {
  return /*html*/ `
      <h5 class="pb-4 text-center">${questions[currentQues]["question"]}</h5>
      <ol class="list-group list-group-flush ques-list " type="A">
        <li class="list-group-item mb-3 border-0" onclick="checkIfCorrect('ans-1')" id="ans-1" data-id="each-ans">
          <button class="btn me-3">1</button>${questions[currentQues]["ans1"]}
        </li>
        <li class="list-group-item mb-3 border-0" onclick="checkIfCorrect('ans-2')" id="ans-2" data-id="each-ans">
          <button class="btn me-3">2</button>${questions[currentQues]["ans2"]}
        </li>
        <li class="list-group-item mb-3 border-0" onclick="checkIfCorrect('ans-3')" id="ans-3" data-id="each-ans">
          <button class="btn me-3">3</button>${questions[currentQues]["ans3"]}
        </li>
        <li class="list-group-item mb-3 border-0" onclick="checkIfCorrect('ans-4')" id="ans-4" data-id="each-ans">
          <button class="btn me-3">4</button>${questions[currentQues]["ans4"]}
        </li>
      </ol>
      <div class="d-flex justify-content-end w-100 btn-wrapper">
        <button class="btn btn-primary" onclick="showNextQues()" disabled>
          <i class="bi bi-chevron-right"></i>
        </button>
      </div> `;
}

function endScreenTemplate() {
  return /*html*/ `
    <div class="end-screen-brain-img mb-3 mt-4">
      <img src="./img/brainresult.png" alt="">
    </div>
    <h5 class="mb-3">Completed <br>
      HTML Quiz
    </h5>
    <div class="w-50 d-flex justify-content-between mb-4">
      <h5 class="your-score">Your Score</h5>
      <span class="final-score"><span class="right-answer-count">10/10</span>/${questions.length}</span>
    </div>
    <button class="btn btn-primary px-5 mb-1">SHARE</button>
    <button class="btn btn-outline-primary border-0" onclick="showQues()">REPLAY</button>`;
}
