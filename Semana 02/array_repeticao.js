//let arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(arrayValues);
// console.log(arrayValues[0]);
// console.log(arrayValues[1]);
// console.log(arrayValues[2]);
// console.log(arrayValues[3]);
// console.log(arrayValues[4]);
// console.log(arrayValues[5]);
// console.log(arrayValues[6]);
// console.log(arrayValues[7]);
// console.log(arrayValues[8]);
// console.log(arrayValues[9]);

//Repetição mostrando os elementos de 0 até 14
// for (let i = 0; i <= 14; i++) {
//   console.log(arrayValues[i]);
// }

//Utilizando o tamanho do array pela propriedade length
// for (let i = 0; i < arrayValues.length; i++) {
//   console.log(arrayValues[i]);
// }

//Mostrar o meu array de trás pra frente
// for (let i = arrayValues.length - 1; i >= 0; i--) {
//   console.log(arrayValues[i]);
// }

//Exercício 02
// Crie um algoritmo que imprime todos os valores de um array qualquer, menos o ultimo elemento.
let arrayValues = [3, 2, 67, 89, 56, 3, 22, 235, 67, 89, 20, 21];

for (let i = 0; i < arrayValues.length - 1; i++) {
  console.log(arrayValues[i]);
}
