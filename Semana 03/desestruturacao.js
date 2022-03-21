//Destructuring Assignment

//Desestruturação de Objetos
const user = {
  name: "Barros",
  idade: 26,
  cpf: 3333,
  cnh: "A",
  historico_escolar: { historia: 10, geografia: 5, portugues: 6 },
};

//console.log(user.name);
//console.log(user.idade);

const { name, idade } = user;
//console.log(name);
//console.log(idade);

const {
  historico_escolar: { historia },
} = user;
//console.log(historia);

//Desestruturação de Array
const names = ["Barros", "Luis", "Karoline", "André", "Aline"];
//console.log(names[0]);

const [primeiroName, , terceiroName] = names;
// console.log(primeiroName);
// console.log(terceiroName);
// console.log(`${primeiroName}  ${terceiroName}`);

//Desestruturação de objeto como parâmetro
const getName = ({ name }) => name;
console.log(getName(user));

const getPrimeiraPosicao = ([primeira]) => primeira;
// console.log(getPrimeiraPosicao(names));

let valueOne = 50;
let valueTwo = 70;

// console.log("Valor 1: " + valueOne);
// console.log(`Valor 2 ${valueTwo}`);

//Trocando valores via desestruturação
[valueOne, valueTwo] = [valueTwo, valueOne];

// console.log("Valor 1: " + valueOne);
// console.log(`Valor 2 ${valueTwo}`);

//Mudando o nome da variável ao fazer a desestruturação
const { idade: age } = user;
console.log(age);
