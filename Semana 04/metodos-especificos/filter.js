//Exemplo 01
// const users = [
//   { name: "João", role: "Professor" },
//   { name: "Juca", role: "Estudante" },
//   { name: "Márcia", role: "Estudante" },
//   { name: "Pedro", role: "Estudante" },
//   { name: "matheus", role: "Estudante" },
//   { name: "Júlia", role: "Estudante" },
// ];
// const newUsers = users.filter(
//   (user) =>
//     (user.role == "Estudante" && user.name[0] == "M") || user.name[0] == "m"
// );
// console.log(newUsers);

//Exemplo 02
const numbers = [-8, 12, 76, 100, -230, -7, 120];
const pairs = numbers.filter((elem) => elem % 2 == 0);

console.log(pairs);
console.log(pairs.length);
