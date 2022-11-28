import React from "react";
import HorizontalContainer from "../containers/horizontalContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import api from "../../utils/api";

const schema = yup.object({
  contact_name: yup.string().required("É necessário preencher o nome do contato"),
  contact_phone: yup.string().phone("BR", false, "Cadastre o telefone com o DDD").required("Campo obrigatório"),
  estimated_time: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
});

function CreateOrder({ onClickCancel, handleNewOrder }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // 2022-11-23T00:00:00.000Z
    const request = await api.post("order", data);

    if (request.status === 201) {
      alert("Ordem cadastrada com sucesso!");
      handleNewOrder();
    } else {
      alert("Erro ao cadastrar ordem, contacte um administrador");
    }
  };

  return (
    <div className="create-order-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <HorizontalContainer>
          <label className="input-container">
            Nome do contato
            <input
              className="input-container__text"
              type="text"
              id="contact_name"
              name="contact_name"
              placeholder="Preencha o nome da pessoa"
              {...register("contact_name")}
            />
            <p className="input-error" role="alert">
              {errors.contact_name?.message}
            </p>
          </label>
          <label className="input-container">
            Telefone do contato
            <input
              className="input-container__text"
              type="text"
              id="contact_phone"
              name="contact_phone"
              placeholder="Preencha o telefone de contato com DDD"
              {...register("contact_phone")}
            />
            <p className="input-error" role="alert">
              {errors.contact_phone?.message}
            </p>
          </label>
          <label className="input-container">
            Informe o horário previsto
            <input
              className="input-container__text"
              type="text"
              id="estimated_time"
              name="estimated_time"
              placeholder="Informe o horário previsto"
              {...register("estimated_time")}
            />
            <p className="input-error" role="alert">
              {errors.estimated_time?.message}
            </p>
          </label>
        </HorizontalContainer>
        <label className="text-area">
          Descrição do pedido
          <textarea name="description" {...register("description")} />
          <p className="input-error" role="alert">
            {errors.description?.message}
          </p>
        </label>

        <div className="form__actions">
          <button className="form__btn" id="cancel" onClick={onClickCancel}>
            Cancelar
          </button>
          <button className="form__btn" id="confirm" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
