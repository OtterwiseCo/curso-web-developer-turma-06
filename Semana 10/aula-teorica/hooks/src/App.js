import { Fragment } from "react";
import ExemploUseState from "./components/ExemploUseState/ExemploUseState";
import "./App.css";
import ExercicioUseState from "./components/ExercicioUseState/ExercicioUseState";
import ExemploUseEffect from "./components/ExemploUseEffect/ExemploUseEffect";

function App() {
  return (
    <Fragment>
      {/* <ExemploUseState />
      <ExemploUseState />
      <ExercicioUseState /> */}

      <ExemploUseEffect userId="5" />
    </Fragment>
  );
}

export default App;
