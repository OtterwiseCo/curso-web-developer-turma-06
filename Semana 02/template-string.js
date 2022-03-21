let valueOne = 5;
let valueTwo = 10;
let result = valueOne + valueTwo;

//Formato utilizando a concatenação
console.log(valueOne + " + " + valueTwo + " = " + result);

//Formato utilizando Template String
console.log(`${valueOne} + ${valueTwo} = ${result}`);

let nome = "Gabriel";
let sobrenome = "Barros";
let profissao = "Professor";
let idade = 26;
// console.log(
//   `Meu nome é ${nome} e meu sobrenome é ${sobrenome}, a minha profissão é ${profissao} e eu tenho ${idade} anos.`
// );

let mensagem = `Meu nome é ${nome} e meu sobrenome é ${sobrenome}, a minha profissão é ${profissao} e eu tenho ${idade} anos.`;
//console.log(mensagem);

let user = {
  "name um": "Gabriel",
  "name dois": "Barros",
};
let stringTest = "dois";
console.log(user[`name ${stringTest}`]);
