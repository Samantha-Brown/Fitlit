class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  getUserAverageHoursSlept(id) {
    let totalHours = 0
    let newArr = this.sleepData.filter((sleep) => sleep.userID === id);
    newArr.forEach((sleep) => (totalHours += sleep.hoursSlept));
    let avgHours = Math.round(totalHours/newArr.length)
    return avgHours;
  }
  getAverageUserSleepQuality(id) {
    let totalQuality = 0
    let newArr = this.sleepData.filter((sleep) => sleep.userID === id);
    newArr.forEach((sleep) => (totalQuality += sleep.sleepQuality));
    let avgQuality = Math.round(totalQuality/newArr.length);
    return avgQuality;
  }
  getAllUserSleepQualityAvg() {
    let totalQuality = 0;
    let newArr = this.sleepData.filter((sleep) => sleep.userID);
    newArr.forEach((sleep) => (totalQuality += sleep.sleepQuality));
    let avgQuality = Math.round(totalQuality/newArr.length);
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
  findAUser(id) {
    return this.sleepData.filter(aUser => aUser.userID === id)
  }
  selectWeek(id, date) {
    let foundUser = this.findAUser(id);
    let foundUserObj = foundUser.find((user) => user.date === date);
    let selection = foundUser.indexOf(foundUserObj) + 1;
    let foundWeek = foundUser.slice(selection -7, selection);
    return foundWeek;
  }
  findWeeklyHours(id, date) {
    return this.selectWeek(id, date).map((day) => day.hoursSlept);
  }
  findWeeklyQuality(id, date) {
    return this.selectWeek(id, date).map((day) => day.sleepQuality);
  }
}

export default Sleep;
