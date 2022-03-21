// [OK] Criar uma função para ler a entrada do usuário
// [OK] Criar uma função para buscar as informações do cep passado como parâmetro
// [OK] Criar função para salvar os dados em um arquivo JSON
// [OK] Fazer a integração entre as funções

import { input } from "console-input";
import axios from "axios";
import fs from "fs";

const cepInput = () => input("Digite um CEP:");

const searchCep = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const saveToJSON = (data, fileName) => {
  const parsedJSON = JSON.stringify(data);
  fs.writeFileSync(fileName, parsedJSON);
};

const main = async () => {
  try {
    const cep = cepInput();
    const cepRetornado = await searchCep(cep);
    saveToJSON(cepRetornado, "cep.json");
  } catch (error) {
    console.log(error.message);
  }
};

main();
