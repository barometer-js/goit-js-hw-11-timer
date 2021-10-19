const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const { days, hours, mins, secs } = refs;

class CountdownTimer {
  constructor({ selector, targetDate, markup }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.markup = markup;
    this.deltaTime = 0;
  }
  start() {
    setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.targetDate - currentTime;
      console.log(this.targetDate);
      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
      console.log(days, hours, mins, secs);
      this.updateClockface(days, hours, mins, secs);
      this.style();
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  updateClockface(days, hours, mins, secs) {
    this.markup.days.textContent = `${days}`;
    this.markup.hours.textContent = `${hours}`;
    this.markup.mins.textContent = `${mins}`;
    this.markup.secs.textContent = `${secs}`;
  }
  style() {
    this.selector.style.fontFamily = "sans-serif";
    this.selector.style.display = "flex";
    this.selector.style.alignItems = "center";
    this.selector.style.justifyContent = "center";
    this.selector.style.fontSize = "18px";
  }
}

const myBirthdayCountdown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 11, 2022"),
  markup: { days, hours, mins, secs },
});

myBirthdayCountdown.start();
