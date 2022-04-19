import { useEffect, useState } from "react";
import axios from "axios";

function ExemploUseEffect(props) {
  const [description, setDescription] = useState("");

  const { userId } = props;

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${userId}`
      );
      setDescription(response.data);
    };
    request();
  }, [userId]);

  return <p>{JSON.stringify(description)}</p>;
}

export default ExemploUseEffect;
