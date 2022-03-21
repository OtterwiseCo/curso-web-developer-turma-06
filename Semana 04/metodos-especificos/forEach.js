//Métodos Específicos de Array
// forEach (Guilherme) (Diego) (Luís)
// map (Guilherme) (Luís)
// filter (Guilherme) (Luís)
// find (Guilherme) (Luís)
// every (Luís)
// some (Luís)
// sort (Guilherme) (Luís)
// reduce (Guilherme) (Luís)

let names = [
  "Barros",
  "João",
  "Beatriz",
  "Mariane",
  "Matheus",
  "Miguel",
  "Felipe",
];

let value = names.forEach((element, index, arrayOriginal) => {
  console.log(`Indice: ${index} - Elemento: ${element}`);
  names[index] = "X";
});
console.log(names);
console.log(value); //forEach sempre retorna undefined.
