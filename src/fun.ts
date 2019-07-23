// type Contoh = number | string | boolean;

type Employee = {
  email: string;
  name: string;
  position: 'Low' | 'Middle' | 'Boss';
};

type GetPosition = (e: Employee) => string;

const zep: Employee = {
  email: 'asd@asd.com',
  name: 'Anjay Mbar',
  position: 'Boss',
};

const getPosition = (e: Employee) => {
  return e.position;
};

// tslint:disable-next-line: no-console
console.log(
  getPosition(zep),
);

export {};
