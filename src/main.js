// import { add } from './math';

// console.log(add(5, 2));

// truthy/falsy
/* 
-  false
-  null
-  undefined
-  0
-  ''

-  0n
-  NaN
-  ""
-  ``
-  document.all
*/

if (null) {
  console.log('Hello');
}

/*
Word-kind Operator
typeof
instanceof

Symbol-kind Operator
+
-
*
/
!
~

Unary Operator
!
~
typeof

Binary Operator
+
-


*/

/*
Logical Operator

- &&
  Dari semua perbandingan,
  ambil falsy pertama,
  Jika tidak ada, ambil truthy terakhir

  console.log('hello' && 'hai');
  console.log('' && 'tidak kosong');
  
- ||
  Dari semua perbandingan,
  ambil truthy pertama,
  Jika tidak ada, ambil falsy terakhir

  console.log('hello' || 'hai');
  console.log('' || 'tidak kosong');
*/

// console.log('' || 'tidak kosong');
// console.log('hello' || 'hai');

// const sesuatu = 6 && 0 && 10;
// console.log(sesuatu);
// console.log('hello' && 'hai');
// console.log('' && 'tidak kosong');

const agus = {
  name: 'Agus',
  level: 99,
  job: {
    name: 'Wizard',
    level: 50,
  },
};

const dimas = {
  name: 'Dimas',
  level: 1,
  job: {
    name: 'Knight',
    level: 50,
  },
};

function sayJob(person) {
  // if (person.job) {
  //   console.log(person.job.name);
  // } else {
  //   console.log('No job');
  // }
  // null di dot / null.sesuatu / undefined.sesuatu
  // console.log(person.job && person.job.name);

  // Guarding dengan && and Defaulting dengan ||
  console.log((person.job && person.job.name) || 'no job');
}

// sayJob(agus);
// sayJob(dimas);

const agusJob = agus.job && agus.job.name;
console.log(agusJob);

const dimasJob = (dimas.job && dimas.job.name) || 'Novice';
console.log(dimasJob);
