import { useEffect } from "react";
import axios from "axios";

//API -> https://jsonplaceholder.typicode.com/users

function RequestUseEffect(props) {
  const { id } = props;

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(response.data);
    };
    request();
  }, [id]);

  return <p></p>;
}

export default RequestUseEffect;
