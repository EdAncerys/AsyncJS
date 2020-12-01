'use strict';

console.log('Hello from callBack. CallStack Starts');

const loginUser = (email, password, callBack) => {
  setTimeout(() => {
    console.log(`User login data: ${email} ${password}`);
    callBack({ userEmail: email });
  }, 2000);
};

const userData = (email, callBack) => {
  setTimeout(() => {
    callBack(['Data01', 'Data02', 'Data03']);
  }, 1000);
};

loginUser('frodo@email.com', 'password', (data) => {
  console.log(data);
  userData(data.userEmail, (data) => {
    console.log(data);
  });
});

console.log('End of CallStack');
