'use strict';

console.log('Hello from callBack. CallStack Starts');

const loginUser = (email, password) => {
  setTimeout(() => {
    console.log(`User login data: ${email} ${password}`);
    return { userEmail: email };
  }, 2000);
};

loginUser('frodo@email.com', 'password');
console.log('End of CallStack');
