import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Olá Você está na Home</h1>
      <Link to="/posts">Ir para a página de posts</Link>
    </div>
  );
}

export default Home;
