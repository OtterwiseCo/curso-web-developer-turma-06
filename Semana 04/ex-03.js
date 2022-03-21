// Levando em consideração o array abaixo, adicione um novo elemento
// ao final do array com seu nome e imprima no console na ordem inversa.
// [{name: “joao”}, {name: “pedro”}]

let array = [{ name: "joao" }, { name: "pedro" }];
array.push({ name: "Gabriel" });
console.log(array.reverse());
