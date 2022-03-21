//Funções
//Funções sem parâmetro e sem retorno
// function otterwise() {
//   console.log("Otterwise");
//   console.log("Escola de Programação");

// }
// //Chamada da Função
// otterwise();

//Funções com Parâmetros e sem Retorno
// function mostraNome(nome) {
//   console.log("Meu nome é: " + nome);
// }
// mostraNome("Gabriel");
// mostraNome("Pedro");
// mostraNome("João");
// let value = "Juca";
// mostraNome(value);

// function soma(numberOne, numberTwo) {
//   console.log(numberOne + numberTwo);
// }
// let valueOne = 3;
// let valueTwo = 50;
// //Chamada da minha função
// soma(valueOne, valueTwo);

//Funções com Parâmetros e com Retorno
//MAIS UTILIZADA
// function multi(valueOne, valueTwo) {

//   return valueOne * valueTwo;
// }

// const resultado = multi(10, 15);
// console.log(resultado);

function soma(valueOne, valueTwo) {
  const sum = valueOne + valueTwo;
  return sum;
}
let result = soma(10, 3);
console.log(result);
let number = 50;
console.log(soma(number, result));
