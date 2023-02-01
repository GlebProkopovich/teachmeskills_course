const select = elId => document.querySelector(elId);

let minutes = "00",
  seconds = "00",
  interval;

const startBtn = select("#startBtn"),
  stopBtn = select("#stopBtn");

let timer = select("#time");

timer.innerHTML = `${minutes} : ${seconds}`;

const startTimer = () => {
  seconds++;
  seconds < 10 && (seconds = `0${seconds}`);
  if (seconds === 60) {
    minutes++;
    seconds = 0;
    minutes < 10 && (minutes = `0${minutes}`);
  }
  timer.innerHTML = `${minutes} : ${seconds}`
};

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});



