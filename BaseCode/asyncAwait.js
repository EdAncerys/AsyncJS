'use strict';

console.log('Hello from asyncAwait. Call Stack Starts');
const timeOut = () => {
  setTimeout(() => {
    console.log('Call After 2s');
  }, 2000);
};

async function asyncCallOne() {
  console.log('Making asyncCall One');

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

async function asyncCallTwo() {
  console.log('Making asyncCall Two');

  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  console.log(data);
}

asyncCallOne();
asyncCallTwo();
timeOut();

console.log('End of CallStack');
