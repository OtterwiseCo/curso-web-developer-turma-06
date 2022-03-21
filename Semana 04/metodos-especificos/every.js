const users = [
  { name: "João", role: "Professor", id: 1 },
  { name: "Juca", role: "Professor", id: 3 },
  { name: "Márcia", role: "Professor", id: 4 },
  { name: "Pedro", role: "Professor", id: 5 },
  { name: "Matheus", role: "Professor", id: 2 },
  { name: "Júlia", role: "Professor", id: 6 },
];

const allStudents = users.every((elem) => elem.role === "Professor");
console.log(allStudents);
