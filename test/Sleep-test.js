import { expect } from 'chai';
import Sleep from '../src/Sleep'
import testData from '../src/data/sampleData';

describe('Sleep', () => {
  let sleepData, sleep;
  beforeEach(() => {
    sleepData = testData.sleepDataSample;
    sleep = new Sleep(sleepData);
  });

  it('should be a function', () => {

    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {

    expect(sleep).to.be.an.instanceOf(Sleep);
    expect(sleep.sleepData).to.deep.equal(sleepData);
  });

  it('should find a user\'s average hours slept per day', () => {

    expect(sleep.getUserAverageHoursSlept(1)).to.equal(7);
  });

  it('should find a user\'s all time average sleep quality', () => {

    expect(sleep.getAverageUserSleepQuality(2)).to.equal(4.8);
  })


  it('should show the user the hours slept for a specific date', () => {

    expect(sleep.getHoursSleptByDate(1, "2019/06/15")).to.equal(6.1);
    expect(sleep.getHoursSleptByDate(2, "2019/06/15")).to.equal(7);
  });

  it('should show the user their sleep quality for a specific date', () => {

    expect(sleep.getSleepQualityByDate(1, "2019/06/15")).to.equal(2.2);
    expect(sleep.getSleepQualityByDate(2, "2019/06/15")).to.equal(5);
  })

  it('should show the average sleep quality of all user\'s', () => {

    expect(sleep.getAllUserSleepQualityAvg()).to.equal(3);
  });

  it('should return a user hydration data from their ID', () => {

    expect(sleep.findAUser(4)).to.deep.equal([{
      "userID": 4,
      "date": "2019/06/15",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    }])
  });

  it('should return 7 days', () => {

    expect(sleep.selectWeek(1, "2019/06/22")).to.deep.equal([
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 4.1,
        "sleepQuality": 3.6
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 9.6,
        "sleepQuality": 2.9
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 5.1,
        "sleepQuality": 2.6
      },
    ]);
  });

  it('should show hours slept per day over the course of any given week', () => {

    expect(sleep.findWeeklyHours(1, "2019/06/25")).to.deep.equal([5.4, 4.1, 9.6, 5.1, 8.1, 8.9, 4.4])
  })

  it('should show sleep quality per day over the course of any given week', () => {

    expect(sleep.findWeeklyQuality(1, "2019/06/25")).to.deep.equal([3, 3.6, 2.9, 2.6, 3.5, 2.2, 1.6])
  })
});
