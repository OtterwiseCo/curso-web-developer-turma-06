const users = [
  { name: "João", role: "Professor", id: 1 },
  { name: "Juca", role: "Estudante", id: 3 },
  { name: "Pedro", role: "Estudante", id: 5 },
  { name: "Matheus", role: "Professor", id: 2 },
  { name: "Júlia", role: "Estudante", id: 6 },
  { name: "Márcia", role: "Estudante", id: 4 },
];

const newUsersCrescente = users.sort((firstElem, secondElem) => {
  //Retorno 1 (ou um número positivo) first fica DEPOIS
  //Retorno -1 (ou um número negativo) first fica ANTES
  //Retorno 0 //Tanto faz
  if (firstElem.id < secondElem.id) return -1;
  if (firstElem.id > secondElem.id) return 1;
  return 0;
});

const newUsersDecrescente = users.sort((firstElem, secondElem) => {
  //Retorno 1 (ou um número positivo) first fica DEPOIS
  //Retorno -1 (ou um número negativo) first fica ANTES
  //Retorno 0 //Tanto faz
  if (firstElem.id < secondElem.id) return 1;
  if (firstElem.id > secondElem.id) return -1;
  return 0;
});

const newUsersTwoCrescente = users
  .sort((firstElem, secondElem) => firstElem.id - secondElem.id)
  .slice(0, 3);

const newUsersTwoDecrescente = users.sort((a, b) => b.id - a.id);
//Retorno 1 (ou um número positivo) first fica DEPOIS
//Retorno -1 (ou um número negativo) first fica ANTES
//Retorno 0 //Tanto faz

console.log(newUsersTwoCrescente);
