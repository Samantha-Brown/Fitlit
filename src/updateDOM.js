import User from './User';
import { retrieveUsersData } from './scripts.js'

const getRandomIndex = () => {
  return Math.floor(Math.random() * 50)};
const index = getRandomIndex();

// export function grabAndImplementUserData() {
//   document.getElementById('welcomeMessage').innerText = `Welcome, ${user.getFirstName(index)}`;
//   document.getElementById('email').innerText = `Email: ${user.email}`;
//   document.getElementById('address').innerText = `Address: ${user.address}`;
//   document.getElementById('strideLength').innerText = `Stride Length: ${user.strideLength}`;
//   document.getElementById('stepGoal').innerText = `Daily Step Goal: ${user.dailyStepGoal}`;
// };

// retrieveUsersData(user)
// .then((user) => {
//   document.getElementById('welcomeMessage').innerText = `Welcome, ${user.getFirstName(index)}`;
//   document.getElementById('email').innerText = `Email: ${user.email}`;
//   document.getElementById('address').innerText = `Address: ${user.address}`;
//   document.getElementById('strideLength').innerText = `Stride Length: ${user.strideLength}`;
//   document.getElementById('stepGoal').innerText = `Daily Step Goal: ${user.dailyStepGoal}`;
// })
