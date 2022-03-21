let idade = 2;

//IF-ELSE Normal
if (idade >= 18) {
  //console.log("É maior de idade");
} else {
  //console.log("Não é maior de idade");
}

//IF Ternário
// idade >= 18
//   ? console.log("É maior de idade")
//   : console.log("Não é maior de idade");

//console.log(idade >= 18 ? "É maior de idade" : "Não é maior de idade");
// const value = idade >= 18 ? "É maior de idade" : "Não é maior de idade";
// console.log(value);

//Exemplo 2 IF Ternário
let vip = false;
let price = vip ? 10 : 100;
console.log(price);

let escolha = "C";

//Aqui está acontecendo as escolhas das opções a partir de um IF-Ternário
console.log(
  "A escolha foi: " +
    (escolha == "A" ? "A" : escolha == "B" ? "B" : escolha == "C" ? "C" : "")
);
