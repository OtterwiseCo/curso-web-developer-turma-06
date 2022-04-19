import { useState } from "react";

function ExercicioUseState() {
  const [name, setName] = useState(true);
  return (
    <div>
      <button onClick={() => setName(!name)}>Troca</button>
      {name ? <p>Gabriel da Silva Barros</p> : ""}
    </div>
  );
}

export default ExercicioUseState;
