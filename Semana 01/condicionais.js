//Comandos Condicionais

// let saldo = 500;
// let compras = 100;

// if (saldo >= compras) {
//   console.log("Compras Realizadas com Sucesso");
// } else {
//   console.log("Saldo Insuficiente");
// }

// let number = 0;
// if (number > 0) {
//   console.log("Positivo");
// } else if (number < 0) {
//   console.log("Negativo");
// } else {
//   console.log("Zero");
// }

//Menu
// 1 - Pizza Muito Pequena
// 2 - Pizza Pequena
// 3 - Pizza Média
// 4 - Pizza Grande
// 5 - Pizza Muito Grande
// Opção Inválida

// let opcao = 10;

// if (opcao === 1) {
//   console.log("Pizza Muito Pequena");
// } else if (opcao === 2) {
//   console.log("Pizza Pequena");
// } else if (opcao === 3) {
//   console.log("Pizza Média");
// } else if (opcao === 4) {
//   console.log("Pizza Grande");
// } else if (opcao === 5) {
//   console.log("Pizza Muito Grande");
// } else {
//   console.log("Opção Inválida");
// }

let opcao = 1;
switch (opcao) {
  case 1:
    console.log("Pizza Muito Pequena");
    break;
  case 2:
    console.log("Pizza Pequena");
    break;
  case 3:
    console.log("Pizza Média");
    break;
  case 4:
    console.log("Pizza Grande");
    break;
  case 5:
    console.log("Pizza Muito Grande");
    break;
  default:
    console.log("Opção Inválida");
    break;
}
