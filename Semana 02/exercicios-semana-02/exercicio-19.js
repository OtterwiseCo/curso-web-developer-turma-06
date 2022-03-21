// 19 - Crie um algoritmo que tem como entrada um array de strings e
//trata essas string substituindo os números por letra de acordo com a
//tabela a seguir, além disso, deve remover os espaços em branco nas palavras
//no começo e fim da string, se existirem.

// Tabela:
// 1 : i
// 3 : e
// 4 : a
// 5 : s
// 0 : o

let palavras = [
  "  h3ll0 w0rld",
  "  w3b d3v3l0p3r  ",
  "0tterw1s3",
  "j4v4scr1pt ",
  "j4r4r4c4",
];

for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i];
  let aux = "";
  for (let j = 0; j < palavra.length; j++) {
    if (palavra[j] == "1") {
      aux = aux + "i";
    } else if (palavra[j] == "3") {
      aux += "e";
    } else if (palavra[j] == "4") {
      aux += "a";
    } else if (palavra[j] == "5") {
      aux += "s";
    } else if (palavra[j] == "0") {
      aux += "o";
    } else if (palavra[j] == " ") {
      aux += "";
    } else {
      aux += palavra[j];
    }
  }
  palavras[i] = aux;
}
console.log(palavras);
