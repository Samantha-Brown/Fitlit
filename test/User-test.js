import { expect } from 'chai';
import User from '../src/User';
import testData from '../src/data/sampleData';


describe('User', () => {
  let userData, pageUser;
  beforeEach(() => {
    userData = testData.userDataSample;
    pageUser = new User(userData[0]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', () => {

    expect(pageUser).to.be.an.instanceOf(User);
  });

  it('should store the id of the user', () => {

    expect(pageUser.id).to.equal(1);
  });

  it('should store the name of the user', () => {

    expect(pageUser.name).to.equal('Luisa Hane');
  });

  it('should store the address of the user', () => {

    expect(pageUser.address).to.deep.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  });

  it('should store the email of the user', () => {

    expect(pageUser.email).to.deep.equal('Diana.Hayes1@hotmail.com');
  });

  it('should store the stride length of the user', () => {

    expect(pageUser.strideLength).to.deep.equal(4.3);
  });

  it('should store the daily step goal of the user', () => {

    expect(pageUser.dailyStepGoal).to.deep.equal(10000);
  });

  it('should store the friends of the user', () => {

    expect(pageUser.friends).to.deep.equal([16, 4, 8]);
  });

  it('should return a user\'s first name only', () => {
    expect(pageUser.getFirstName()).to.equal('Luisa');
  });
});
// (4) Mae Connelly (8) Laney Abshire (16) Garnett Cruickshank
