import "./Button.css";

const Button = (props) => {
  const { children, variant, isLoading, disabled, ...rest } = props;
  console.log(rest);
  return (
    <button
      className={`button button__${variant}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
};

export default Button;
