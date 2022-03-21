//Função para Somar dois Valores
function soma(valueOne, valueTwo) {
  return valueOne + valueTwo;
}
//console.log(soma(10, 14));

//Função Anônima (Anônima porque não possui nome)
const sum = function (valueOne, valueTwo) {
  return valueOne + valueTwo;
};
//console.log(sum);
//console.log(sum(10, 20));

//Arrow Function
// const somar = (valueOne, valueTwo) => {
//   return valueOne + valueTwo;
// };

//Arrow Function com Retorno implícito
const somar = (valueOne, valueTwo) => valueOne + valueTwo;
console.log(somar(10, 114));

const maiorIdade = (idade) => idade >= 18;

if (maiorIdade(20)) {
  console.log("É maior de idade");
} else {
  console.log("Não é maior de idade");
}

//Retornar uma função
//Pouco utilizado no momento, vai fazer sentido quando chegarmos mais
//próximos do React
function somaa(numberOne) {
  return function (numberTwo) {
    return numberOne + numberTwo;
  };
}
console.log(somaa(5)(3));
