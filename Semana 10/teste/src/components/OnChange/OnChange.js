import { useState } from "react";

function OnChange() {
  const [valueInput, setValueInput] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setValueInput(event.target.value);
        }}
      />
      <p>{valueInput}</p>
    </div>
  );
}

export default OnChange;
