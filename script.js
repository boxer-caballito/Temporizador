let timer;
let isRunning = false;
let totalSeconds = 0;

function startTimer() {
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;
  totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}

function updateTimer() {
  if (totalSeconds <= 0) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('display').textContent = '00:00:00';
    return;
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('display').textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  totalSeconds--;
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  totalSeconds = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
}

function pad(val) {
  return val < 10 ? '0' + val : val;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
