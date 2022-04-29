import React from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);

  if (!auth.user) {
    return <p>Você não está logado. Perdeu parça</p>;
  }
  return (
    <p>
      Bem vindo {auth.user.name}!{" "}
      <button
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </p>
  );
};

export default AuthStatus;
