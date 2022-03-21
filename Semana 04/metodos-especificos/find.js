//Exemplo 01
// let values = [0, 5, 3, 7, 2, 6, 2];
// let busca = 0;
// const response = values.find((elem) => elem === busca);
// if (response || response === 0)
//   console.log(`O Elemento ${response} foi encontrado`);
// else console.log(`O Elemento não foi encontrado`);

const users = [
  { name: "João", role: "Professor", id: 1 },
  { name: "Juca", role: "Estudante", id: 3 },
  { name: "Márcia", role: "Estudante", id: 4 },
  { name: "Pedro", role: "Estudante", id: 5 },
  { name: "Matheus", role: "Professor", id: 2 },
  { name: "Júlia", role: "Estudante", id: 6 },
];

console.log(users.find((elem) => elem.role === "Professor"));
