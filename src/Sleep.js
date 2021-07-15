class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  getAverageHoursSlept() {
    let totalHours = 0
    let newArr = this.sleepData.filter((sleep) => sleep.userID === 1);
    newArr.forEach((sleep) => (totalHours += sleep.hoursSlept));
      console.log(totalHours);
    let avgHours = totalHours/newArr.length
    return avgHours;
  }
}

export default Sleep;
