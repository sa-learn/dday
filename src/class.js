/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

class DataStore {
  map = {};

  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }
}

const d = new DataStore();
d.set('gigih', 'Lvl 62 Musa');

// 5
console.log(d.get('gigih'));

d.set('zepir', 'Joki Sakti');

// 2
console.log(d.get('zepir'));

function createCounter(initialCount) {
  let count = initialCount;

  return {
    getCount: () => count,
    increment: () => {
      count += 1;
    },
  };
}

const cc = createCounter();
const CC = createCounter();

console.log(cc.getCount === CC.getCount);

class Counter {
  constructor(initialCount = 0) {
    this.count = initialCount;
  }

  getCount() {
    return this.count;
  }

  increment() {
    this.count += 1;
  }
}

const c = new Counter();
const C = new Counter();

console.log(c.getCount === C.getCount);

console.log(c.getCount());

c.increment();

console.log(c.getCount());

console.log(c.count);

const { getCount } = c;
// console.log(getCount());

const something = {
  count: 99,
};

something.getCount = getCount;
console.log(something.getCount());
