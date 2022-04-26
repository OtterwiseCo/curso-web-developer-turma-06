import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost, listAllPosts } from "../services/posts";

function Posts() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const response = id ? await getPost(id) : await listAllPosts();
      console.log(response.data);
      setData(response.data);
    };
    request();
  }, []);

  if (!data) return <p>Não há posts a serem exibidos</p>;
  if (id) return <p>{data.title}</p>;
  return data.map((post) => <p>{post.title}</p>);
}

export default Posts;
