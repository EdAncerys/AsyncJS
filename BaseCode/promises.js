'use strict';

console.log('Hello from promises. Call Stack Starts');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('User Data');
    resolve({ userEmail: 'frodo@email.com' });
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
