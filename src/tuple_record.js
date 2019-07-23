/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
const suyama = {
  name: 'Suyama',
  age: 22,
};

const nancy = {
  name: 'Nancy DaVolio',
  age: 22,
};

const buchanan = {
  name: 'Buchanan',
  age: 22,
};

const students = [suyama, nancy, buchanan];

// console.log(students);

for (const s of students) {
  // if (s.name === 'Suyama') {
  //   console.log(s.name, s.age);
  // }
  if (s.age > 20) {
    console.log(s.name, s.age);
    
  }
}

const studentsMap = {
  Suyama: suyama,
  'Nancy DaVolio': nancy,
  Buchanan: buchanan,
};

console.log(studentsMap['Buchanan']);

// console.log(studentsMap['Sandy'].name, studentsMap['Sandy'].age);

for (const s of Object.values(studentsMap)) {
  if (s.age > 20) {
    console.log(s.name, s.age);
  }
}


const tupleOfStudent = [suyama, nancy, buchanan];

const tuple1 = [5];

const tuple2 = [1, 6];

const tuple3 = ['Irkham', 20, true];
console.log('name', tuple3[0]);
console.log(tuple3[1]);
console.log(tuple3[2]);

const [name, age, single] = tuple3;
console.log(name);
console.log(age);
console.log(single);

