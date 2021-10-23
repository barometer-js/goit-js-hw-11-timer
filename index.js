class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.deltaTime = 0;
    this.days = document.querySelector('[data-value="days"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.mins = document.querySelector('[data-value="mins"]');
    this.secs = document.querySelector('[data-value="secs"]');
  }
  start() {
    this.style();
    setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.targetDate - currentTime;
      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
      this.updateClockface(days, hours, mins, secs);
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  updateClockface(days, hours, mins, secs) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
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
});

myBirthdayCountdown.start();
