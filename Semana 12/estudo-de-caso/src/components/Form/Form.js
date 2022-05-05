import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import "./Form.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("Nome do carro é obrigatório"),
  brand: yup.string().required("Marca do carro é obrigatório"),
  color: yup.string().required("Cor do carro é obrigatório"),
  type: yup.string().required("Tipo do carro é obrigatório"),
});

const saveData = (id, data) => {
  localStorage.setItem(`car-${id}`, JSON.stringify(data));
};

const getData = (id) =>
  new Promise((resolve) => {
    setTimeout(
      () => resolve(JSON.parse(localStorage.getItem(`car-${id}`))),
      2000
    );
  });

const Form = () => {
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(id && true);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    const request = async () => {
      const data = await getData(id);
      setIsLoading(false);
      if (!data) {
        setNotFound(true);
        return;
      }
      Object.entries(data).forEach(([key, value]) => {
        setValue(key, value);
      });
    };
    if (id) {
      request();
    }
  }, [id]);

  const onSubmit = (data) => {
    if (id) {
      saveData(id, data);
      toast.success("Carro atualizado com sucesso");
    } else {
      saveData(localStorage.length + 1, data);
      reset();
      toast.success("Carro criado com sucesso");
    }
  };

  if (isLoading) {
    return <h1>Carregando</h1>;
  }

  if (notFound) {
    return <div>Carro não encontrado</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome do Carro:
        <input type="text" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <select defaultValue={""} {...register("brand")}>
        <option value="" disabled hidden>
          Selecione uma marca
        </option>
        <option value="bmw">BMW</option>
        <option value="fiat">Fiat</option>
        <option value="volkswagen">Volkswagen</option>
        <option value="chevrolet">Chevrolet</option>
      </select>
      {errors.brand && <span>{errors.brand.message}</span>}
      <label>
        Cor do Carro:
        <input type="text" {...register("color")} />
        {errors.color && <span>{errors.color.message}</span>}
      </label>
      <label>
        Tipo do Carro:
        <input type="text" {...register("type")} />
        {errors.type && <span>{errors.type.message}</span>}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
