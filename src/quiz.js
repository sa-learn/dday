/* eslint-disable linebreak-style */
const c1 = {
  name: 'Kreb',
  level: 50,
  job: {
    name: 'Wizard',
    level: 99,
  },
};

const c2 = {
  name: 'Squid',
  level: 2,
  job: {
    name: 'Hunter',
    level: 0,
  },
};

const c3 = {
  name: 'Squid',
  level: 1,
};

const c4 = {
  name: 'Sandy',
};

function getTotalLevel(character) {
  // Hitung total level menggunakan && atau || atau if
  const baseLevel = character.level || 0;
  const jobLevel = (character.job && character.job.level) || 0;
  const totalLevel = baseLevel + jobLevel;

  return totalLevel;
}

// 149
console.log(getTotalLevel(c1));

// 2
console.log(getTotalLevel(c2));

// 1
console.log(getTotalLevel(c3));

// 0
console.log(getTotalLevel(c4));
