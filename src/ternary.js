/* eslint-disable linebreak-style */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
// ternary

// && ||
// condition ? sesuatu : sesuatu

const lebihDariLima = 3 > 5 ? true : false;
console.log(lebihDariLima);

const krab = {
  name: 'Mr. Krab',
  level: 99,
  job: {
    name: 'Restaurant Owner',
    level: 5,
  },
};

const sandy = {
  name: 'Sandy',
  level: 0,
};

const jobLevelKrab = krab.job ? krab.job.level : 0;
console.log(jobLevelKrab);

const jobLevelSandy = sandy.job ? sandy.job.level : 0;
console.log(jobLevelSandy);

let jlk;
if (krab.job) {
  jlk = krab.job;
} else {
  jlk = 0;
}
