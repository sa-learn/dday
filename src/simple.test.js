/* eslint-disable linebreak-style */
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

it('add dengan 1 dan 1 return 2', () => {
  const result = add(1, 1);

  expect(result).toEqual(2);
});

it('should return 3 when sub(5, 2)', () => {
  const result = sub(5, 2);

  expect(result).toEqual(3);
});

// console.log(
//   add(3, 3),
//   6
// );

// console.log(
//   sub(3, 1),
//   2
// );
