import "./Article.css";

const Article = (props) => {
  const { title, description } = props;
  return (
    <div className="article-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Article;
