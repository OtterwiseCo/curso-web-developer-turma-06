import { useState } from "react";

function ExemploUseState() {
  const [name, setName] = useState([]);
  const [count, changeCount] = useState(0);
  console.log(count);

  return (
    <div>
      {/* <p>{name}</p>
      <button onClick={() => setName("Barros")}>Muda Barros</button>
      <button
        onClick={() => {
          const aux = [...name, "Gabriel"];
          setName(aux);
        }}
      >
        Muda Gabriel{" "}
      </button> */}

      <p>{count}</p>
      <button onClick={() => changeCount(count - 1)}>-1</button>
      <button onClick={() => changeCount(count + 1)}>+1</button>
    </div>
  );
}

export default ExemploUseState;
