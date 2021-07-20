class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.find((user) => user.id === id);
  }

  getAverageStepGoal() {
    let goals = 0;
    this.data.forEach((user) => goals += user.dailyStepGoal)
    return Math.round(goals/this.data.length);
  }

  findAUser(id) {
    return this.userData.filter(aUser => aUser.userID === id);
  }
  getUserFriendsNames(id) {
    let friendsNames = [];
    let user = this.getUserData(id);
    user.friends.forEach((friendID) => {
      friendsNames.push(this.getUserData(friendID).name)
    })
    return friendsNames;
  }
}

export default UserRepository;


// filter through the user data and grab the dailyStepGoals
// those get put in their own arrray then
// add each element in the array together &
// divide by this.data.lenght
// ForEach +=
