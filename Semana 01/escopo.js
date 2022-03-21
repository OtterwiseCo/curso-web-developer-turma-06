//Escopo
// let value = 10;

// if (value >= 10) {
//   value = 15;
// }

// console.log(value);

// let num = 9;

// if (num < 10) {
//   let value = 20;
//   console.log(value);
// }
// console.log(value);

let number3 = 50;

function soma(numberOne, numberTwo) {
  let result = numberOne + numberTwo + number3;
  return result;
}

console.log(soma(10, 5));

//Sobre Escopo: O que está fora, não consegue enxergar o que está dentro;
//Porém, o que está dentro, consegue enxergar o que está fora no escopo acima.
