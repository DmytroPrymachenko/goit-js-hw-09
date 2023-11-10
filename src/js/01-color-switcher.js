function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btnStart: document.querySelector('.btn-start'),
  btnStop: document.querySelector('.btn-stop'),
};

refs.btnStart.addEventListener('click', onBtnStartEvent);
refs.btnStop.addEventListener('click', onBtnStopEvent);
function onBtnStartEvent() {
  randomColor.start();
}
function onBtnStopEvent() {
  randomColor.stop();
}

const randomColor = {
  setIntervalId: null,
  isActive: false,
  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.setIntervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 100);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.setIntervalId);
  },
};
// randomColor.start();
