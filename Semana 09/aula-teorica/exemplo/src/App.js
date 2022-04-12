import { Fragment } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <Fragment>
      <Card name="Gabriel" description="Descrição do Gabriel" age="">
        <p>
          O Gabriel é atualmente professor da Otterwise e responsável pela Turma
          06
        </p>
      </Card>
      <Card name="Diego" description="Descrição do Diego">
        <button>Enviar</button>
      </Card>
      <Card name="Karol" description="Descrição do Karol" />
      <Card name="Guilherme" description="Descrição do Guilherme" />
      <Card name="André" description="Descrição do André" />
    </Fragment>
  );
}

export default App;
