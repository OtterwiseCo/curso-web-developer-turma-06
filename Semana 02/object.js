//Guardando informações sobre o objeto garrafa no javascript
//let tampa = "verde";
let conteudo = "água";
let volume = "500ml";
let material = "plastico";
let formato = "cilindrico";
let cor = "transparente";

// console.log(tampa);
// console.log(conteudo);
// console.log(volume);

//Objetos em Javascript
//propriedade: valor
let garrafa = {
  tampa: "verde",
  conteudo: "água",
  volume: "500ml",
  material: "plastico",
  formato: "cilindrico",
  cor: "transparente",
  reciclavel: true,
  "data de validade": "23/03/2024",
};

//Mostrando valores de um objeto
// console.log(garrafa);
// console.log(garrafa.volume);
// console.log(garrafa.formato);
// console.log(garrafa.reciclavel);
// console.log(garrafa["data de validade"]);

//Pegando um valor a partir de uma propriedade armazenada em uma string
// let tampa = "tampa";
// console.log(garrafa[tampa]);
//console.log(garraga["tampa"])

let historicoUsuario = {
  nome: "Barros",
  "datas de acesso": ["21/02/2022", "22/02/2022", "23/02/2022"],
};

//console.log(historicoUsuario);
//console.log(historicoUsuario["datas de acesso"]);
//console.log(historicoUsuario["datas de acesso"][0]);
//console.log(historicoUsuario["datas de acesso"].length);

let dev = {
  name: "Barros Dev",
  cargo: "front-end",
  projeto: {
    "data de criação": "23/02/2022",
    linguagens: ["JS", "Java", "C++"],
  },
};

//console.log(dev);
//Mudando o valor de uma propriedade dentro de um objeto
dev.projeto["data de criação"] = "22/02/2022";
//console.log(dev);

//Criando um array de objetos
let arrayPessoas = [
  { name: "Barros", nascimento: "21/08/1995" },
  { name: "Karoline", nascimento: "28/04/1994" },
];
//console.log(arrayPessoas);
//console.log(arrayPessoas[0].nascimento);

let newProp = "nascimento";
let valorProp = "21/08/1995";
let user = {
  name: "Barros",
};
user[newProp] = valorProp;
//console.log(user[newProp]);
console.log(user);
