import { useForm } from "react-hook-form";
import { login } from "./services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";
import { Button, Input, Stack, Flex, Text } from "@chakra-ui/react";

//import { Button } from "./components/Button";

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
    <Flex
      as="form"
      mt="20px"
      justifyContent="center"
      onSubmit={handleSubmit(funcao)}
    >
      <Stack spacing={4} w={["100%", "75%", "50%"]}>
        <Text textAlign="center" fontSize="20px">
          Meu Formulário
        </Text>
        <Input type="email" placeholder="E-mail" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <Input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}

        <Button
          _hover={{
            background: "black",
            color: "teal.500",
          }}
          colorScheme="blue"
          type="submit"
        >
          Enviar
        </Button>
        {/* <Button disabled>Botão</Button> */}
      </Stack>
    </Flex>
  );
}

export default App;
