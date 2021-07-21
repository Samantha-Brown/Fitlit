import { expect } from 'chai';
import Hydration from '../src/Hydration';
import testData from '../src/data/sampleData';


describe('Hydration', () => {
  let hydrationData, hydration;
  beforeEach(() => {
    hydrationData = testData.hydrationDataSample;
    hydration = new Hydration(hydrationData);
  });

  it('should be a function', () => {

    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {

    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should return a user hydration data from their ID', () => {

    expect(hydration.findAUser(2)).to.deep.equal([{"userID": 2,
      "date": "2019/06/15",
      "numOunces": 373737}])
  });

  it('should return a user\'s average daily fluid consumption', () => {

    expect(hydration.calcAverageOunces(1)).to.equal(70);
  });

  it('should return 7 days', () => {

    expect(hydration.selectWeek(1, "2019/06/23")).to.deep.equal([
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 85
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 42
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 87
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 94
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 84
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 39
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numOunces": 75
      }
    ]);
  });

  it('should show the latest week\'s numOunces data', () => {

    expect(hydration.findWeeklyOunces(1, "2019/06/23")).to.deep.equal('85 ounces, 42 ounces, 87 ounces, 94 ounces, 84 ounces, 39 ounces, 75')
  })

});
