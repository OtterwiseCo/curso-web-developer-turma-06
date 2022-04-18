import Article from "../Article/Article";
import "./Main.css";

const data = [
  { title: "Título 1", description: "Descrição 1" },
  { title: "Título 2", description: "Descrição 2" },
  { title: "Título 3", description: "Descrição 3" },
];

const createArticles = () => {
  const result = data.map((elem) => {
    return <Article title={elem.title} description={elem.description} />;
  });
  console.log(result);
  return result;
};

const Main = () => {
  return (
    <div>
      {
        /* {data.map((elem) => {
        return <Article title={elem.title} description={elem.description} />;
      })} */
        createArticles()
      }
    </div>
  );
};

export default Main;
