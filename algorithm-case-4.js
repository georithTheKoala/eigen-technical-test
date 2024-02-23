const arrayA = [1, 2, 0];
const arrayB = [4, 5, 6];
const arrayC = [7, 8, 9];

const MATRIX = [arrayA, arrayB, arrayC];
const [A, B, C] = MATRIX;

const penjumlahanDiagonalPertama = [A[0], B[1], C[2]].reduce((a, b) => a + b, 0)
const penjumlahanDiagonalKedua = [A[2], B[1], C[0]].reduce((a, b) => a + b, 0)

const hasilPenguranganDiagonal = (valueA, valueB) => { 
  return valueA - valueB
}


hasilPenguranganDiagonal(penjumlahanDiagonalPertama, penjumlahanDiagonalKedua)

console.log(`Matrix = [[${A}], [${B}], [${C}]]

diagonal pertama = ${A[0]} + ${B[1]} + ${C[2]} = ${penjumlahanDiagonalPertama};
diagonal kedua = ${A[2]} + ${B[1]} + ${C[0]} = ${penjumlahanDiagonalKedua};

maka hasilnya adalah ${penjumlahanDiagonalPertama} - ${penjumlahanDiagonalKedua} = ${hasilPenguranganDiagonal(penjumlahanDiagonalPertama, penjumlahanDiagonalKedua)}`);
