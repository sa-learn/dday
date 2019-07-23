/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// Destructuring (array vs object)

const murid = {
  nama: 'Raden',
  umur: 22,
};

// const nama = murid.nama;
// const { nama } = murid;

// const umur = murid.umur;
// const { umur } = murid;

const { nama, umur } = murid;

const { 'nama': namaMurid, umur: umurMurid } = murid;

// console.log(nama);
// console.log(umur);

// console.log(namaMurid);
// console.log(umurMurid);

const guru = {
  nama: 'Kreb',
  umur: 29,
  profesi: {
    nama: 'Guru',
    gaji: 0,
  },
};

// const {
//   profesi: { nama },
// } = guru;
// console.log(nama);

const { umur, ...lainnya } = guru;
// console.log(umur);
// console.log(lainnya);

const guruDua = {
  // umur: guru.umur,
  // profesi: guru.profesi,
  ...guru,
  nama: 'Sandy',
};

// console.log(guruDua);

const dompet = {
  rupiah: 5000,
  dollar: 5,
  poundsterling: 1,
  rupee: 0,
};

const dompetSetelahTransaksi = {
  ...dompet,
  dollar: 0,
  rupee: 3,
};

// console.log(dompetSetelahTransaksi);

// array
const numbers = [1000, 1, 2, 3];

// const firstNumber = numbers[0];
const [firstNumber, ...others] = numbers;
console.log(firstNumber);
console.log(others);

const oneTwoThreeFour = [...others, 4]; // 1, 2, 3, 4

console.log(oneTwoThreeFour);
