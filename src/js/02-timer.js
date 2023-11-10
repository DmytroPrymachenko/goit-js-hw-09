import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let data = null;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    data = selectedDates[0];
    // console.log(data);
    if (data >= Date.now()) {
      refs.startBtn.disabled = false;
    } else alert('Please choose a date in the future');
  },
});

const refs = {
  startBtn: document.querySelector('.js-btn'),
  divDays: document.querySelector('.js-days'),
  divHours: document.querySelector('.js-hours'),
  divMinutes: document.querySelector('.js-minutes'),
  divSeconds: document.querySelector('.js-seconds'),
};

refs.startBtn.addEventListener('click', onStartBtnEvent);
refs.startBtn.disabled = true;

function onStartBtnEvent() {
  timer.start();
}

const timer = {
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      const dataTimer = data - Date.now();
      if (dataTimer < 0) {
        stop();
        return;
      }
      refs.divDays.textContent = this.pad(this.convertMs(dataTimer).days);
      refs.divHours.textContent = this.pad(this.convertMs(dataTimer).hours);
      refs.divMinutes.textContent = this.pad(this.convertMs(dataTimer).minutes);
      refs.divSeconds.textContent = this.pad(this.convertMs(dataTimer).seconds);
      console.log(this.convertMs(dataTimer));
    }, 1000);
  },

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  pad(el) {
    return String(el).padStart(2, '0');
  },
};

// console.log('test2');
