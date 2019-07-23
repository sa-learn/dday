/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
function makeCar(car) {
  const price = (car && car.price) || 1;

  return {
    color: 'Red',
    name: 'Kijang',
    price,
  };
}

const car1 = makeCar();
// console.log(car1);
const { color, price } = makeCar();
// console.log(color, price);

const { price: priceTwo } = makeCar({ price: 10 });
// console.log(priceTwo);

const name = 'Bayu';

function makePerson(name) {
  const person = {
    name,
  };

  function setName(newName) {
    const name = 'Zepir';
    console.log(name);

    person.name = newName;
  }

  console.log(name);
  return [person, setName];
}
console.log(name);

// const something = makePerson('Gigih');
// console.log(something);

const [newPerson, setNewPersonName] = makePerson('Gigih');
// console.log(newPerson);
setNewPersonName('Yupoy');
// console.log(newPerson);

function createCounter() {
  let count = 0;

  return {
    getCount: () => `Counter: ${count}`,
    increment: () => {
      count += 1;
    },
  };
}

const counter = createCounter();
// console.log(counter);

let currentCount = counter.getCount();
console.log(currentCount);
counter.increment();

currentCount = counter.getCount();
console.log(currentCount);

function createCallLog() {
  // Buat sesuatu untuk menyimpan log
  let bukuTelpon = [];

  return {
    history: () => bukuTelpon,
    call: (number) => {
      // Simpan number ke log
      bukuTelpon = [...bukuTelpon, number];
    },
    getRecent: () => {
      // Balikin 2 log terakhir
      return bukuTelpon.slice(-2);
    },
  };
}

const callLog = createCallLog();

// []
console.log(callLog.history());

callLog.call('0815');

// ['0815']
console.log(callLog.history());

callLog.call('0813');

// ['0815', '0813']
console.log(callLog.history());

callLog.call('0819999');

// ['0813', '0819999']
console.log(callLog.getRecent());
