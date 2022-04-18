import "./Header.css";

const Header = (props) => {
  const { children } = props;
  return <h1 className="title-header">{children}</h1>;
};

export default Header;
