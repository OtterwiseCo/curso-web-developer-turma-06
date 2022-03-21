// [OK] 1. Crie um projeto novo e instale a biblioteca axios.
// [OK] a. Consuma a lista de posts através do endpoint https://jsonplaceholder.typicode.com/posts.
// [OK] b. Consulte o post com ID de valor 2.
// [OK] c. Cadastre um novo post enviando um objeto com os atributos title e body para o endpoint https://jsonplaceholder.typicode.com/posts.
// [OK] d. Faça a edição de um post enviando novos atributos title e body para o post com id 1.
// e. Faça a exclusão post com ID de valor 3.

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async (url, value) => {
  try {
    const response = await axios.get(value ? `${url}/${value}` : `${url}`);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
//getPosts(url);
//getPosts(url, 2);

const createPosts = async (url, data) => {
  try {
    const response = await axios.post(`${url}`, data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const patchPosts = async (url, data) => {
  try {
    const response = await axios.patch(`${url}`, data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const data = {
  title: "Título",
  body: "Texto",
};

//createPosts(url, data);
//patchPosts(url + "/1", data);

const deletePosts = async (url, id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

deletePosts(url);
