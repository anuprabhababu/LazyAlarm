const clock = document.getElementById("clock");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const alarmSound = document.getElementById("alarmSound");

const mathChallenge = document.getElementById("mathChallenge");
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");

let correctAnswer = 0;

// Update Clock
setInterval(() => {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}, 1000);

// Set Alarm for 5 seconds (demo)
setAlarmBtn.addEventListener("click", () => {
  setAlarmBtn.disabled = true;
  setAlarmBtn.textContent = "Alarm will ring in 5 seconds...";
  setTimeout(() => {
    ringAlarm();
  }, 5000);
});

function ringAlarm() {
  alarmSound.play();
  generateMathQuestion();
  mathChallenge.classList.remove("hidden");
}

// Generate random math question
function generateMathQuestion() {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  correctAnswer = a + b;
  questionEl.textContent = `${a} + ${b} = ?`;
}

// Handle math answer
submitAnswer.addEventListener("click", () => {
  const userAnswer = parseInt(answerInput.value);
  if (userAnswer === correctAnswer) {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    mathChallenge.classList.add("hidden");
    answerInput.value = "";
    alert("Nice! Alarm stopped. 😎");
    setAlarmBtn.disabled = false;
    setAlarmBtn.textContent = "Set Alarm (5 sec demo)";
  } else {
    alert("Wrong answer! Try again 😅");
  }
});
