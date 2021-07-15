class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData; //[{}, {}, ...,{}]
  }
  getUserAverageHoursSlept(id) {
    let totalHours = 0
    let newArr = this.sleepData.filter((sleep) => sleep.userID === id);
    newArr.forEach((sleep) => (totalHours += sleep.hoursSlept));
    let avgHours = totalHours/newArr.length
    return avgHours;
  }
  getAverageSleepQuality(id) {
    let totalQuality = 0
    let newArr = this.sleepData.filter((sleep) => sleep.userID === id);
    newArr.forEach((sleep) => (totalQuality += sleep.sleepQuality));
    let avgQuality = totalQuality/newArr.length;
    return avgQuality;
  }
  getHoursSleptByDate(id, date) {
    let hoursForDay = this.sleepData.filter((sleep) => (sleep.userID === id && sleep.date === date))[0].hoursSlept;
    return hoursForDay;
  }
  getSleepQualityByDate(id, date) {
    let qualityForDay = this.sleepData.filter((sleep) => (sleep.userID === id && sleep.date === date))[0].sleepQuality;
    return qualityForDay;
  }
}

export default Sleep;
