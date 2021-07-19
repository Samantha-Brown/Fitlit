import './css/styles.css';
import {retrieveUsersData, retrieveSleepData, retrieveActivityData, retrieveHydrationData} from './webApi.js';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
// import { grabAndImplementUserData } from './updateDOM.js'

let sleepData, userRepoData, hydrationData, user;
const date = '2020/01/22';

const getRandomIndex = () => {return Math.floor(Math.random() * 50)};
const index = getRandomIndex(); // will be the user ID


const grabAndImplementUserData = () => {
  document.getElementById('welcomeMessage').innerText = `Welcome, ${user.getFirstName(index)}`;
  document.getElementById('email').innerText = `Email: ${user.email}`;
  document.getElementById('address').innerText = `Address: ${user.address}`;
  document.getElementById('strideLength').innerText = `Stride Length: ${user.strideLength}`;
  document.getElementById('stepGoal').innerText = `Daily Step Goal: ${user.dailyStepGoal}`;
};

const grabAndImplementSleepData = () => {
  document.getElementById('latestSleepHours').innerText = `Last Night's Hour's: ${sleepData.getHoursSleptByDate(index, date)}`;
  document.getElementById('latestSleepQuality').innerText = `Last Night's Sleep Quality: ${sleepData.getSleepQualityByDate(index, date)}`;
  document.getElementById('hoursOverWeek').innerText = `Previous Week's Hours of Sleep: ${sleepData.findWeeklyHours(index, date)}`;
  document.getElementById('qualityOverWeek').innerText = `Previous Week's Quality of Sleep: ${sleepData.findWeeklyQuality(index, date)}`;
  document.getElementById('averageQuality').innerText = `All Time Average Sleep Quality: ${sleepData.getAverageUserSleepQuality(index, date)}`;
  document.getElementById('averageHours').innerText = `All Time Average Hours: ${sleepData.getUserAverageHoursSlept(index)}`;
}

const grabAndImplementHydrationData = () => {
  document.getElementById('todaysWater').innerText = `Water drank today: ${hydrationData.findByDate(index, date)}`;
  document.getElementById('weekOfWater').innerText = `This week's water: ${hydrationData.findWeeklyOunces(index, date)}`;
}

retrieveUsersData() // Same as: Promise.then(data =>){}
  .then((data) => {
    userRepoData = new UserRepository(data.userData); //userRepoData is an object!
    user = new User(userRepoData.data[index])
    console.log(user, '<>>>>USERRRR');
    grabAndImplementUserData();
  });

retrieveSleepData()
  .then((data) => {
    sleepData = new Sleep(data.sleepData);
    console.log(sleepData. '<<>>SLEEPDATA<<>>')
    console.log(sleepData);
    grabAndImplementSleepData();
  });

  retrieveHydrationData()
  .then((data) => {
    hydrationData = new Hydration(data.hydrationData);
    console.log(hydrationData, "<<<<<HERE>>>>>>");
    grabAndImplementHydrationData();
  });
