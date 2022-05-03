import { useForm } from "react-hook-form";
import { login } from "./services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

import { Button } from "./components/Button";

function App() {
  const schema = yup
    .object({
      email: yup.string().email().required("E-mail é Obrigatório"),
      password: yup
        .string()
        .min(5, "Mínimo 5 caracteres")
        .required("Senha é Obrigatória"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const funcao = async (data) => {
    try {
      console.log(data);
      const response = await login(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(watch("example")); // watch input value by passing the name of it
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(funcao)}>
      <input type="email" placeholder="E-mail" {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" {...register("password")} />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Enviar</button>
      <Button disabled>Botão</Button>
    </form>
  );
}

export default App;
