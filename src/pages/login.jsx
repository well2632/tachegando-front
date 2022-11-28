import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import "yup-phone";

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // Lógica de validação com backend
    // Salvo id no localstorage
    navigate("/plataforma");
  };

  return (
    <div className="page" id="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input-container">
          E-mail
          <input
            className="input-container__text"
            type="text"
            id="email"
            name="email"
            placeholder="Informe seu usuário"
            {...register("email")}
          />
          <p className="input-error" role="alert">
            {errors.email?.message}
          </p>
        </label>
        <label className="input-container">
          Senha
          <input
            className="input-container__text"
            type="text"
            id="password"
            name="password"
            placeholder="Informe sua senha"
            {...register("password")}
          />
          <p className="input-error" role="alert">
            {errors.password?.message}
          </p>
        </label>
        <button type="submit" className="login__submit-btn">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
