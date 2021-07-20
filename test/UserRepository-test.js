import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  let userRepo = [{
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      4,
      8
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  },
  {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
      19,
      11,
      42,
      33
    ]
  },
  {
    "id": 4,
    "name": "Mae Connelly",
    "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
    "email": "Marcos_Pollich@hotmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 4000,
    "friends": [
      48,
      7,
      44,
      8
    ]
  },
  {
    "id": 8,
    "name": "Laney Abshire",
    "address": "86416 Koch Inlet, North Kaciefurt MA 80635",
    "email": "Janice_Nitzsche2@yahoo.com",
    "strideLength": 2.8,
    "dailyStepGoal": 2000,
    "friends": [
      11,
      41,
      23,
      49
    ]
  },
];

  beforeEach(() => {
    let repo = new UserRepository(userRepo);
  })

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should display user data by specific ID', () => {
    let repo = new UserRepository(userRepo);
    expect(repo.getUserData(1)).to.deep.equal({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    })
  })

  it('should return the average step goal for all users', () => {
    let repo = new UserRepository(userRepo);
    expect(repo.getAverageStepGoal()).to.equal(6667)
  })

  it.only('should return a user\'s friends by name', () => {
    let repo = new UserRepository(userRepo);
    expect(repo.getUserFriendsNames(1)).to.deep.equal(["Mae Connelly", "Laney Abshire"]);
  })
});
