// Getting all DOM elements
const displayEl = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// all Stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Format time in HH:MM:SS format
function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// stopwatch start function
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    displayEl.textContent = formatTime(elapsedTime);
  }, 1000);
  startBtn.disabled = true;
}

// Stopwatch stopping function
function stop() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

// stopwatch reset function
function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayEl.textContent = formatTime(elapsedTime);
  startBtn.disabled = false;
}

// Event listeners
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
