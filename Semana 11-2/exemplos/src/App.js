import "./App.css";
import { useEffect } from "react";
import { listAllUsers, createUser } from "./services/users";
import { listAllPosts } from "./services/posts";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Posts from "./routes/Posts";

function App() {
  // useEffect(() => {
  //   const request = async () => {
  //     const response = await listAllPosts();
  //     console.log(response.data);
  //   };
  //   request();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Posts />} />
      <Route path="*" element={<p>Rota não encontrada. 404</p>} />
    </Routes>
  );
}

export default App;
