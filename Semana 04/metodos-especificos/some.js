const users = [
  { name: "João", role: "Professor", id: 1 },
  { name: "Juca", role: "Estudante", id: 3 },
  { name: "Márcia", role: "Estudante", id: 4 },
  { name: "Pedro", role: "Estudante", id: 5 },
  { name: "Matheus", role: "Academico", id: 2 },
  { name: "Júlia", role: "Estudante", id: 6 },
];

const userExist = users.some((element) => {
  console.log(element);
  return element.role === "Academico";
});
console.log(userExist);
