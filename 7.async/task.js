class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }

    addClock(time, callback) { // если не исправлять этот пункт, то проххожу по тестам, если переписать на 2 условия, то выдает ошибку
      if (!(time && callback)) {
    throw new Error("Отсутствуют обязательные аргументы");
    } else if (this.alarmCollection.find((setup) => setup.time === time))
        console.warn("Уже присутствует звонок на это же время");
        this.alarmCollection.push({
        callback: callback,
        time: time,
        canCall: true,
      });
    }

    /*
    addClock(time, callback) { // выдает ошибку, не знаю где косяк
    if (!(time && callback)) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    const matchAlarm = this.alarmCollection.find(
      (setup) => setup.time === time,
    );
    if (matchAlarm) {
      console.warn("Уже присутствует звонок на это же время");
    } else {
      this.alarmCollection.push({
        callback: callback,
        time: time,
        canCall: true,
      });
    }
  }
  */

    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(
        (item) => item.time !== time,
      );
    }
    getCurrentFormattedTime() {
      return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    start() {
      if (this.intervalId) {
        return;
      }
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((setup) => {
          if (setup.time === this.getCurrentFormattedTime()) {
            setup.canCall = false;
            setup.callback();
          }
        });
      }, 1000);
    }
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    resetAllCalls() {
      this.alarmCollection.forEach((setup) => (setup.canCall = true));
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }

  