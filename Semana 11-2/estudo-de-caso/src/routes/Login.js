import React from "react";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      email,
      password,
    };
    auth.login(data, () => {
      navigate(from);
    });
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          email: <input type="email" name="email" />
        </label>
        <label>
          senha: <input type="password" name="password" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
