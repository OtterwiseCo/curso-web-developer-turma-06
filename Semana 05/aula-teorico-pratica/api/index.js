//GET --> PEGA
//POST --> ENVIA
//PUT --> EDITAR
//PATCH --> EDITAR
//DELETE --> APAGAR

//FAKE API --> https://jsonplaceholder.typicode.com/

import axios from "axios";

// const getPosts = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     console.log(response.data);
//     //return response.data;
//   } catch (error) {
//     console.log(error.response.status);
//     //console.log("Deu erro!!!");
//     //return error.message;
//   }
// };
// getPosts();

// const setPosts = async (info) => {
//   try {
//     const response = await axios.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       info
//     );
//     console.log(response);
//     //return response.data;
//   } catch (error) {
//     console.log(error.response.status);
//     //console.log("Deu erro!!!");
//     //return error.message;
//   }
// };

// const data = {
//   title: "Meu Título",
//   body: "Meu Texto",
//   userId: 10,
// };

//setPosts(data);

// const putPosts = async (info, value) => {
//   try {
//     const response = await axios.put(
//       `https://jsonplaceholder.typicode.com/posts/${value}`,
//       info
//     );
//     console.log(response);
//     //return response.data;
//   } catch (error) {
//     console.log(error.response.status);
//     //console.log("Deu erro!!!");
//     //return error.message;
//   }
// };

// const data = {
//   title: "Meu Título",
//   userId: 10,
// };

// putPosts(data, 10);

// const patchPosts = async (info, value) => {
//   try {
//     const response = await axios.patch(
//       `https://jsonplaceholder.typicode.com/posts/${value}`,
//       info
//     );
//     console.log(response);
//     //return response.data;
//   } catch (error) {
//     console.log(error.response.status);
//     //console.log("Deu erro!!!");
//     //return error.message;
//   }
// };

// const data = {
//   title: "Meu Título",
//   userId: 10,
// };

// patchPosts(data, 1);

const deletePosts = async (value) => {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${value}`
    );
    console.log(response.data);
    //return response.data;
  } catch (error) {
    console.log(error.response.status);
    //console.log("Deu erro!!!");
    //return error.message;
  }
};

deletePosts(1);
