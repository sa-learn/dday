/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
function add(a, b) {
  return a + b;
}

function decrement(a, b) {
  return a - b;
}

export const PI = 3.14;

const math = {
  add,
  decrement,
};

export { add, decrement };
export default math;

/*
{
  add: add
}
*/
