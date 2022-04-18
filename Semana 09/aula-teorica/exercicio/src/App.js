import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header>Título da Página</Header>
      <Main />
      <Footer>Desenvolvido por Turma 06</Footer>
    </Fragment>
  );
}

export default App;
