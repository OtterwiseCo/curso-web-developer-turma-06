// Métodos de String:
// slice; (Guilherme)
// substring;
// substr;
// replace; (Guilherme)
// toUpperCase; (Diego)
// toLowerCase; (Diego)
// trim;
// padStart;
// padEnd;
// split.

//slice --> Fatiar
// let name = "Gabriel, Tatiana, Angélica, Rosana,";
// let partOne = name.slice(0, -1);
// console.log(partOne);

// substring
// let name = "Gabriel, Tatiana, Angélica, Rosana,";
// let partOne = name.substring(0, 5);
// console.log(partOne);

//substr
// let name = "Gabriel, Tatiana, Angélica, Rosana,";
// let partOne = name.substr(2, 6);
// console.log(partOne);

// replace
// let trabalho = "w3b d3v3lop3r";
// let result = trabalho.replace("3", "e");
// //console.log(result);
// let resultTwo = trabalho.replaceAll("3", "e");
// //console.log(resultTwo);

//Expressões Regulares (Regex)
//Com as Regex é possível criar máscaras de formatação.
// let frase =
//   "Amanhã é o dia das Mulheres, feliz dia das mulheres para vocês mUlheres. Obrigado mulheres.";
// let resultThree = frase.replace(/mulheres/gi, "meninas");
// console.log(resultThree);

// toUpperCase e toLowerCase;
// let name = "gabriel da silva barros";
// let upperGabriel = name.toUpperCase();
// console.log(upperGabriel);
// let lowerGabriel = upperGabriel.toLowerCase();
// console.log(lowerGabriel);
// console.log(name[0].toUpperCase() + name.slice(1));

// trim;
// let name = "            Gabriel      Barros           ";
// let changeOne = name.trim();
// console.log(changeOne);

// padStart e padEnd;
// let name = "Gabriel";
// let changeName = name
//   .padStart(name.length + "Meu nome é ".length, "Meu nome é ")
//   .padEnd(name.length + 2, "l");
// console.log(changeName);
//console.log(changeName.padEnd(7, "l"));

// split
// let name = "Gabriel da Silva Barros";
// let result = name.split("a");
// console.log(result);
