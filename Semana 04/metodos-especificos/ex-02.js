// Levando em consideração o array de usuários abaixo: [{id: 3, name: “joao”, active: false},
//{id: 2, name: “gabriel” active: false}, {id: 1, name: “mari”, active: true},
//{id: 0, name: “miguel”, active: false}]
// Escreva um programa que imprime na tela o nome de todos os usuários ativos
// Escreva um programa que imprime na tela quantos usuários não estão ativos
// Escreva um programa que imprime na tela se existe algum usuário ativo
// Escreva um programa que imprime na tela o array ordenado por id em ordem crescente

const users = [
  { id: 3, name: "joao", active: false },
  { id: 2, name: "gabriel", active: false },
  { id: 1, name: "mari", active: true },
  { id: 0, name: "miguel", active: false },
];

const actives = users
  .filter((element) => element.active)
  .forEach((elem) => console.log(elem.name));
console.log(actives);

const notActives = users.filter((element) => !element.active).length;
console.log(notActives);

const existActive = users.some((element) => element.active)
  ? "Existe"
  : "Não Existe";
console.log(existActive);

const orderC = users.sort((a, b) => a.id - b.id);
console.log(orderC);
