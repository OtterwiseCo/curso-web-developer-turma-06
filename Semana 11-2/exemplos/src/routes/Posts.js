import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getPost, listAllPosts } from "../services/posts";

function Posts() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  // console.log(typeof searchParams.get("userId"));
  const userId = searchParams.get("userId");
  console.log(userId);

  useEffect(() => {
    const request = async () => {
      const response = id ? await getPost(id) : await listAllPosts({ userId });
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
