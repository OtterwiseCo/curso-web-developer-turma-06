import { useEffect, useState } from "react";
import axios from "axios";

//API -> https://jsonplaceholder.typicode.com/users

function RequestEffectState() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      console.log(response.data);
    };
    request();
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Muda Valor
      </button>
    </div>
  );
}

export default RequestEffectState;
