'use strict';

console.log('Hello from promises. Call Stack Starts');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('User Data');
    // resolve({ userEmail: 'frodo@email.com' });
    reject(new Error('User Not loggedIn'));
  }, 2000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));

// Fetch data at the same time from API

const dataOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Getting dataOne back');
    resolve({ data: [1, 2, 3, 4] });
  }, 4000);
});

const dataTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Getting dataTwo back');
    resolve({ data: 'Some text' });
  }, 2000);
});

Promise.all([dataOne, dataTwo]).then((result) => console.log(result));
