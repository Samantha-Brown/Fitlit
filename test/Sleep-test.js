import { expect } from 'chai';
import Sleep from '../src/Sleep'

describe.only('Sleep', () => {

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    const sleepData = [
      {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  }
];
    const sleep = new Sleep(sleepData);
    expect(sleep).to.be.an.instanceOf(Sleep);
    expect(sleep.sleepData).to.deep.equal(sleepData);
  })

  it('should find a user\'s average hours slept per day', () => {
    const sleepData = [
      {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  }
];
    const sleep = new Sleep(sleepData);
    expect(sleep.getAverageHoursSlept(1)).to.equal(6.1);

  })
});
