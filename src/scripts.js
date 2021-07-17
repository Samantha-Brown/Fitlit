// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import {usersData, retrieveSleepData, retrieveActivityData, retrieveHydrationData} from './webApi.js';
// import {grabUserData} from './updateDOM.js';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

//import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';


const getRandomIndex = () => {return Math.floor(Math.random() * 50)};
const index = getRandomIndex();


let sleepData, userRepoData, hydrationData, activityData, user;

const grabAndImplementUserData = () => {
  document.getElementById('h1').innerText = `${user.getFirstName()}`;
  // more user stuff here
  // more dom user stuff here
  //MORE!!!!
  // could export this function
};

const forFun = () => {
  console.log('hello', '<<<>>>>>FUN')
}

const grabAndImplementSleepData = () => {
  let num = sleepData.findAUser(index)
  console.log(sleepData, '<SLEEPDATA>>>', num, '<NUM>>>')
  document.getElementById('anotha1').innerText = `${sleepData.getUserAverageHoursSlept(index)}`
}


//console.log(usersData())
usersData() // Same as: Promise.then(data =>){}
  .then((data) => {
    userRepoData = new UserRepository(data.userData); //userRepoData is an object!

    // console.log(userRepoData.data[20])
    user = new User(userRepoData.data[index])
    // sleep = new Sleep(user)
    // console.log(user);
    grabAndImplementUserData();
  })
  // .then(grabAndImplementUserData)

retrieveSleepData()
  .then((data) => {
    sleepData = new Sleep(data.sleepData);
    console.log(sleepData);
    grabAndImplementSleepData();
  })
  // .then(grabAndImplementSleepData);





  // console.log(data.userData);
  //need to call class methods with this data
  // user and userRepo data are both scoped inside of this function
  // .forEach((user) => {
  //   userRepoShit.push(user);
  // })
