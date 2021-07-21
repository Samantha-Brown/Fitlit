import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import testData from '../src/data/sampleData';

describe('User Repository', () => {
  let userRepoData, repo;
  beforeEach(() => {
    userRepoData = testData.userDataSample;
    repo = new UserRepository(userRepoData);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should display user data by specific ID', () => {
    expect(repo.getUserData(1)).to.deep.equal({
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
    })
  })

  it('should return the average step goal for all users', () => {
    expect(repo.getAverageStepGoal()).to.equal(6200)
  })

  it('should return a user\'s friends by name', () => {
    expect(repo.getUserFriendsNames(1)).to.deep.equal('Mae Connelly, Laney Abshire');
  })
});
