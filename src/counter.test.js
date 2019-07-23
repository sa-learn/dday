/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
function createCounter({ initialCount = 0 } = {}) {
  let count = initialCount;

  return {
    getCount: () => `Counter: ${count}`,
    increment: () => {
      count += 1;
    },
  };
}

// 5 success test
it('should start with 0', () => {
  const counter = createCounter();

  expect(counter.getCount()).toEqual(`Counter: 0`);
});
