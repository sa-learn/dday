/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
function makeEmployee({
  name,
  age,
  domain = 'angrybird',
  job,
  level,
  money,
  grill = false,
  alive = false,
}) {
  return {
    name,
    age,
    email: `${name}@${domain}.com`,
    grill,
    alive,
  };
}

// const irkham = makeEmployee('Raden', '', 22);
const irkham = makeEmployee({
  name: 'Raden',
  age: 22,
});
console.log(irkham);
// const gigih = makeEmployee('Rero', undefined, 22);
const gigih = makeEmployee({
  alive: true,
  domain: 'Exile',
  name: 'Rero',
  age: 22,
  grill: true,
});
console.log(gigih);

/* makeEmployee(
  'Zepir',
  'Ares', 
  false, 
  false, 
  true, 
  true)
*/
