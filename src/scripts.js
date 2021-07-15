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
let sleepData, userRepoData, hydrationData, activityData;


// function getUserData() {
//   return usersData()
//   .then(data => {
//     console.log(data);
//   userRepoData = data
// console.log(userRepoData);
// })
// };
// getUserData();
// console.log(userRepoData);
