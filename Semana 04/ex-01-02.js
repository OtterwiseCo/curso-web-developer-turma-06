// Através da string “Maria, Paulo, Moisés, Joel, Ana”,
//imprima todos os nomes um em cada linha no console

let names = "Maria, Paulo, Moisés, Joel, Ana";
let result = names.split(", ");
for (let i = 0; i < result.length; i++) {
  //console.log(result[i]);
}
//console.log(names.replaceAll(", ", "\n"));

// Troque todas as vírgulas na string abaixo por ponto final:
// “Olá, mundo, meu, nome, é, Juca”
let frase = "Olá, mundo, meu, nome, é, Juca";
console.log(frase.replaceAll(",", "."));
console.log(frase.replace(/,/gi, "."));
