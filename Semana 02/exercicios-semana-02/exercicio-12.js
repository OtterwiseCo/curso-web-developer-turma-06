let array = [1, 2, 3, 4, -5, 6, 7, 8, 9, -10];
let pos = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] < array[pos]) {
    pos = i;
  }
}
console.log("Menor Valor: " + array[pos]);
console.log("Posição: " + pos);
