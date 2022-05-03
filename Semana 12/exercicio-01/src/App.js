import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createPost } from "./services/posts";

function App() {
  const schema = yup
    .object({
      title: yup.string().required("Título Obrigatório"),
      body: yup
        .string()
        .min(30, "Mínimo 30 Caracteres")
        .required("Conteúdo Obrigatório"),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await createPost(data);
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Título do Post" {...register("title")} />
      {errors.title && <span>{errors.title.message}</span>}
      <textarea placeholder="Conteúdo do Post" {...register("body")} />
      {errors.body && <span>{errors.body.message}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
