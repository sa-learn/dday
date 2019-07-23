/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
function createCounter({ count = 3 } = {}) {
  return {
    getCount: () => `Counter: ${count}`,
    increment: () => {
      count += 1;
    },
  };
}

const counter = createCounter({ count: 99 });

console.log(counter.getCount());

// const count = param.count;
// const { count } = param;

// gimana kalau param = undefined
// param.count
// undefined.count
// MELEDAK
