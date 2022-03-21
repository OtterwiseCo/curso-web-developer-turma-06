//Exemplo 01
// let values = [10, 5, 3, 7, 2, 6, 2];
// const newValues = values.map((element, index, array) => element * 10);
// console.log(values);
// console.log(newValues);

//Exemplo 02
let names = [
  "Barros",
  "João",
  "Beatriz",
  "Mariane",
  "Matheus",
  "Miguel",
  "Felipe",
];

const newNames = names.map((element) => {
  return {
    name: element,
    cidade: "Porto Alegre",
  };
});

console.log(names);
console.log(newNames);
