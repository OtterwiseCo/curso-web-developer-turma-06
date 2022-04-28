import React from "react";
import { useAuth } from "../../context/auth-context";

const AuthStatus = () => {
  const auth = useAuth();
  console.log(auth);

  if (!auth.user) {
    return <p>Você não está logado. Perdeu parça</p>;
  }
  return (
    <p>
      Bem vindo {auth.user.name}! <button>Sair</button>
    </p>
  );
};

export default AuthStatus;
