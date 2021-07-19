class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  findAUser(id) {
    return this.hydrationData.filter(aUser => aUser.userID === id)
  }
  calcAverageOunces(id) {
    let totalOunces = 0
    let perDayHydration = this.hydrationData.filter((data) => id === data.userID)
    perDayHydration.forEach((hydration) => (totalOunces += hydration.numOunces));
    let avgOunces = Math.round(totalOunces/perDayHydration.length)
    return avgOunces;
  }
  findByDate(dateSelected) {
  return this.hydrationData.find(data => data.date === dateSelected).numOunces;
  }
  selectWeek(id, date) {
    let foundUser = this.findAUser(id); //array of all specific user hydration data
    let foundUserObj = foundUser.find((user) => user.date === date); // singular object containing inputed date arg
    let selection = foundUser.indexOf(foundUserObj) + 1;
    let foundWeek = foundUser.slice(selection -7, selection);
    return foundWeek;
    // return foundWeek.map((day) => day.numOunces);
  }
  findWeeklyOunces(id, date) {
    return this.selectWeek(id, date).map((day) => day.numOunces);
  };
}



export default Hydration;
