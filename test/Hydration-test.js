import { expect } from 'chai';
import Hydration from '../src/Hydration';
import testData from './sampleData';


describe.only('Hydration', () => {
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

  //it('should return a user\'s average daily fluid consumption', () => {

  //   expect(hydration.calcAverageOunces(1)).to.equal(37);
  // });

//   //it('should return 7 days', () => {
//
//     expect(hydration.findWeeklyOunces()).to.deep.equal([75, 47, 37, 75, 47,37, 75]);
//   })
//
 });
