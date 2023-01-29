const quesWrapper = document.getElementById("ques-wrapper");

let correctAnsCount = 0;
let currentQues = 0;

let SUCCESS_AUDIO = new Audio("./sound/right.mp3");
let FAIL_AUDIO = new Audio("./sound/wrong.mp3");

function showQues() {
  quesWrapper.innerHTML = "";
  if (currentQues >= questions.length) {
    showEndScreen();
  } else {
    showUpnextQues();
  }
}

function showEndScreen() {
  currentQues = 0;
  quesWrapper.innerHTML = endScreenTemplate();
  quesWrapper.classList.add("align-items-center");
  document.querySelector(".right-answer-count").innerHTML = correctAnsCount;
  correctAnsCount = 0;
  document.querySelector(".trophy-wrapper").classList.add("show-trophy");
}

function showUpnextQues() {
  let percentage = (currentQues + 1) / questions.length;
  quesWrapper.classList.remove("align-items-center");
  document.querySelector(".trophy-wrapper").classList.remove("show-trophy");
  quesWrapper.innerHTML = quesHTML();
  const progressbarWrapper = document.getElementById("progress-bar-wrapper");
  const progressbar = document.getElementById("progress-bar");
  progressbarWrapper.classList.add("show-progress-bar");
  progressbar.innerHTML = +(percentage * 100).toFixed(0) + "%";
  progressbar.style.width = +(percentage * 100).toFixed(0) + "%";
}

function showNextQues() {
  currentQues++;
  showQues();
}

function ifDone() {
  let done = false;
  if (!done) {
    done = true;
  }
}
function checkIfCorrect(ans) {
  document.querySelector(".btn-wrapper").firstElementChild.disabled = false;
  let eachAns = document.getElementById(ans);
  let eachAnswer = document.querySelectorAll("[data-id]");
  eachAnswer.forEach(each => each.classList.add("disable"));
  eachAns.classList.add("disable");
  let correctAns = document.getElementById(
    questions[currentQues]["right_answer"]
  );
  if (questions[currentQues]["right_answer"] === ans) {
    eachAns.classList.remove("hover");
    document.getElementById(ans).classList.add("crt-answer");
    eachAns.firstElementChild.classList.add("btn-green");
    correctAnsCount++;
    SUCCESS_AUDIO.play();
  } else {
    eachAns.classList.remove("hover");
    eachAns.classList.add("wrong-answer");
    eachAns.firstElementChild.classList.add("btn-red");
    correctAns.classList.add("crt-answer");
    correctAns.firstElementChild.classList.add("btn-green");
    FAIL_AUDIO.play();
  }
}
