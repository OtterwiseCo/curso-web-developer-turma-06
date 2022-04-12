import "./Card.css";

function Card(props) {
  const { name, description, age, children } = props;
  console.log(props);
  console.log(children.type);
  return (
    <div className="card">
      <h4>{name}</h4>
      <p id="green">{age}</p>
      {age && <p>A idade foi informada</p>}
      <p>{description}</p>
      {/* { == "p" ? children : ""} */}
    </div>
  );
}

export default Card;
