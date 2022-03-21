//Função sendo passada como parâmetro
//A função sendo passada como parâmetro em um nome específico
//Callback Function
const mostraSoma = (soma, mostra) => {
  mostra(soma);
};
const mostra = (value) => console.log(value);

mostraSoma(10 + 30, mostra);

//Array de funções
const soma = (valueOne, valueTwo) => valueOne + valueTwo;
const subtrai = (valueOne, valueTwo) => valueOne - valueTwo;
const multiplica = (valueOne, valueTwo) => valueOne * valueTwo;
const divide = (valueOne, valueTwo) => valueOne / valueTwo;

//Funções como valor em um array
const arrayOperacoes = [soma, subtrai, divide, multiplica];
//console.log(arrayOperacoes);
//console.log(arrayOperacoes[0](10, 10));

//Funções como valor em um objeto
const objectOperacoes = {
  soma: soma,
  subtrai: subtrai,
  divide: divide,
  multiplica: multiplica,
};
console.log(objectOperacoes.soma(10, 15));
console.log(objectOperacoes["soma"](10, 15));
