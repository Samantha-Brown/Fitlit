import UserRepository from './UserRepository';

class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }
  getFirstName() {
    return this.name.split(' ')[0];
  }

  findFriendsNames() {
    console.log(this.friends.map((friendId) => (userRepoData.getUserData(friendId).name)));
    return this.friends.map((friendId) => (userRepoData.getUserData(friendId).name));

    //output will be array of strings
    //input id numbers if this.friends array
    //we need to access this.friends array
    //then for each element in the array(number)
    //pass that number as the argument of findAUser
    //at this point we will have an array of friends objects
    //access new friends array and return each friends getFirstName

  }
}

export default User;
