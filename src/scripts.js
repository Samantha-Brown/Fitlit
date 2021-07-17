import './css/styles.css';
import {usersData, retrieveSleepData, retrieveActivityData, retrieveHydrationData} from './webApi.js';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';

let sleepData, userRepoData, hydrationData, activityData, user;

const getRandomIndex = () => {return Math.floor(Math.random() * 50)};
const index = getRandomIndex();


const grabAndImplementUserData = () => {
  document.getElementById('welcomeMessage').innerText = `Welcome, ${user.getFirstName(index)}`;
  document.getElementById('email').innerText = `Email: ${user.email}`;
  document.getElementById('address').innerText = `Address: ${user.address}`;
  document.getElementById('strideLength').innerText = `Stride Length: ${user.strideLength}`;
  document.getElementById('stepGoal').innerText = `Daily Step Goal: ${user.dailyStepGoal}`;
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
    console.log(user, '<>>>>USERRRR');
    grabAndImplementUserData();
  })
  // .then(grabAndImplementUserData)

// retrieveSleepData()
//   .then((data) => {
//     sleepData = new Sleep(data.sleepData);
//     console.log(sleepData);
//     grabAndImplementSleepData();
//   })
  // .then(grabAndImplementSleepData);





  // console.log(data.userData);
  //need to call class methods with this data
  // user and userRepo data are both scoped inside of this function
  // .forEach((user) => {
  //   userRepoShit.push(user);
  // })
