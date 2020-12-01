'use strict';

const userDataOne = (email) => {
  setTimeout(() => {
    console.log('User Data One');
    return `User Data One email ${email}`;
    // callBack([`User Data One email ${email}`]);
  }, 1000);
};

const userDataTwo = (email) => {
  setTimeout(() => {
    console.log('User Data Two');
    callBack([`User Data Two email ${email}`]);
  }, 2000);
};

const userDataThree = (email) => {
  setTimeout(() => {
    console.log('User Data Three');
    callBack([`User Data Three email ${email}`]);
  }, 3000);
};

async function asyncCall() {
  console.log('Making asyncCall');

  const dataOne = await userDataOne('frodo@email.com');
  const dataTwo = await userDataTwo('ben@email.com');
  const dataThree = await userDataThree('dover@email.com');

  console.log(userDataOne, userDataTwo, userDataThree);
}

asyncCall();
