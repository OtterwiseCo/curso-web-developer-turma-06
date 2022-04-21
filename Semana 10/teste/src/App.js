import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card/Card";

function App() {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(15);

  // console.log("Renderizoooooou De novoooo");

  return (
    <div>
      <Card title="Título 1" description="Desc 1" />
      <Card title="Título 2" description="Desc 2" />
      <Card title="Título 3" description="Desc 3" />
      <Card title="Título 4" description="Desc 4" />
      <Card title="Título 5" description="Desc 5" />

      {/* <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Muda Estado
      </button>

      <p>{count2}</p>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Muda Estado
      </button> */}
    </div>
  );
}

export default App;
