import "./Footer.css";

const Footer = (props) => {
  const { children } = props;
  return <p className="copywriting">{children}</p>;
};

export default Footer;
