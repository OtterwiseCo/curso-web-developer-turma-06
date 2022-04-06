const soma = (numberOne, numberTwo) => Number(numberOne) + Number(numberTwo);

const print = (value) => {
  const paragraph = document.querySelector("#resultado");
  paragraph.innerText = value;
};

window.onload = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const valueOne = document.querySelector("#valueOne");
    const valueTwo = document.querySelector("#valueTwo");
    const operator = document.querySelector("#operator");
    if (operator.value == "soma") {
      const result = soma(valueOne.value, valueTwo.value);
      print(result);
    }

    valueOne.value = "";
  });
};
