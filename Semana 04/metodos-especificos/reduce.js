const numbers = ["10", 10, 10, 10, 10, 10, 10];

const sum = numbers.reduce((acumulador, number) => {
  console.log(acumulador);
  return acumulador + Number(number);
}, 0);

console.log(sum);

const products = [
  { name: "banana", category: "fruta" },
  { name: "alface", category: "verdura" },
  { name: "maçã", category: "fruta" },
  { name: "cenoura", category: "legume" },
  { name: "pêssego", category: "fruta" },
  { name: "couve", category: "verdura" },
  { name: "couve", category: "vegetal" },
];

const newProducts = products.reduce(
  (acc, product) => {
    //console.log(acc);
    acc[product.category] = acc[product.category] + 1;
    return acc;
  },
  { fruta: 0, verdura: 0, legume: 0 }
);
// console.log(newProducts);
