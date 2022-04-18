import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="container">
      <Button variant="solid">Botão</Button>
      <Button variant="outline">Botão</Button>
      <Button variant="solid" isLoading>
        Botão
      </Button>
      <Button variant="solid" disabled>
        Botão
      </Button>
      <Button variant="outline" disabled>
        Botão
      </Button>

      <Button variant="solid" onClick={() => console.log("Clicou")}>
        Botão
      </Button>

      <Text fontSize="sm">Olá</Text>
      <Text fontSize="md">Olá</Text>
      <Text fontSize="lg">Olá</Text>

      <Text as="h1" fontSize="lg">
        Olá
      </Text>

      <Text as="h1" fontSize="lg" className="text-red">
        Vermelho
      </Text>
    </div>
  );
}

export default App;
