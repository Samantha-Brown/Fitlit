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
    expect(sleep.getUserAverageHoursSlept(1)).to.equal(6.1);
  })

  it('should find a user\'s all time average sleep quality', () => {
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
    expect(sleep.getAverageSleepQuality(2)).to.equal(4.7);
    expect(sleep.getAverageSleepQuality(3)).to.equal(4.7);
    expect(sleep.getAverageSleepQuality(1)).to.equal(2.2);
  })

  it('should show the user the hours slept for a specific date', () => {
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
    expect(sleep.getHoursSleptByDate(1, "2019/06/15")).to.equal(6.1);
    expect(sleep.getHoursSleptByDate(2, "2019/06/16")).to.equal(7);
  });

  it('should show the user their sleep quality for a specific date', () => {
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
    expect(sleep.getSleepQualityByDate(1, "2019/06/15")).to.equal(2.2);
    expect(sleep.getSleepQualityByDate(2, "2019/06/16")).to.equal(4.7);
  })
});
