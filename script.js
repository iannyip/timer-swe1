// Global declarations
let timeRunCallBack;
let timer = 0;

// Create elements
const timerContainer = document.createElement('div');
const lapDataElement = document.createElement('div');
const rightContainer = document.createElement('div');
const elapsedTimeElement = document.createElement('div');
const startStopContainer = document.createElement('div');
const resetLapContainer = document.createElement('div');
const btnStart = document.createElement('button');
const btnStop = document.createElement('button');
const btnReset = document.createElement('button');
const btnLap = document.createElement('button');

// Apply css layouts
timerContainer.classList.add('timerContainer');
lapDataElement.classList.add('lapdata');
rightContainer.classList.add('right-container');
elapsedTimeElement.classList.add('timeboard');
startStopContainer.classList.add('btnContainer');
resetLapContainer.classList.add('btnContainer');
btnStart.classList.add('button-style');
btnStop.classList.add('button-style');
btnReset.classList.add('button-style');
btnLap.classList.add('button-style');

// timerContainer.innerHTML = 'timerContainer';
lapDataElement.innerHTML = 'Lap Board';
elapsedTimeElement.innerHTML = 'timer';
btnStart.innerHTML = 'Start';
btnStop.innerHTML = 'Stop';
btnReset.innerHTML = 'Reset';
btnLap.innerHTML = 'Lap';

// Append Elements
document.body.appendChild(timerContainer);
timerContainer.appendChild(lapDataElement);
timerContainer.appendChild(rightContainer);
rightContainer.appendChild(elapsedTimeElement);
rightContainer.appendChild(startStopContainer);
rightContainer.appendChild(resetLapContainer);
startStopContainer.appendChild(btnStart);
startStopContainer.appendChild(btnStop);
resetLapContainer.appendChild(btnReset);
resetLapContainer.appendChild(btnLap);

// Callback functions
const startTime = () => {
  timeRunCallBack = setInterval(() => {
    console.log('running');
    timer += 1;
    const ms = (`0${timer % 100}`).slice(-2);
    const sec = (`0${Math.floor(timer / 100) % 60}`).slice(-2);
    const min = (`0${Math.floor(Math.floor(timer / 100) / 60)}`).slice(-2);
    elapsedTimeElement.innerHTML = `${min} : ${sec} : ${ms}`;
  }, 10);
};

const stopTime = () => {
  console.log('stopping');
  clearInterval(timeRunCallBack);
};

const resetTime = () => {
  console.log('resetting');
  elapsedTimeElement.innerHTML = '00 : 00 : 00';
  timer = 0;
};

// Add event listeners
btnStart.addEventListener('click', startTime);
btnStop.addEventListener('click', stopTime);
btnReset.addEventListener('click', resetTime);
