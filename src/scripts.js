// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import {usersData, retrieveSleepData, retrieveActivityData, retrieveHydrationData} from './webApi.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

//import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';

let sleepData, userRepoData, hydrationData, activityData, user;

const grabDataFunction = () => {
  document.getElementById('h1').innerText = `${user.getFirstName()}`;
  // more user stuff here
  // more dom user stuff here
  //MORE!!!!
  // could export this function
}
//console.log(usersData())
usersData() // Same as: Promise.then(data =>){}
  .then((data) => {
    userRepoData = new UserRepository(data.userData);
    // console.log(userRepoData.data[20])
    user = new User(userRepoData.data[20])
    // console.log(user);
}).then(grabDataFunction);

retrieveHydrationData()





  // console.log(data.userData);
  //need to call class methods with this data
  // user and userRepo data are both scoped inside of this function
  // .forEach((user) => {
  //   userRepoShit.push(user);
  // })
