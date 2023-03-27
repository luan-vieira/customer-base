import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),

    password: yup
      .string()
      .min(8, "Mínimo 8 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>

          <Input
            register={register}
            icon={FiMail}
            label="Email"
            placeholder="Digite seu email"
            name="email"
            error={errors.email?.message}
          />

          <Input
            register={register}
            icon={FiLock}
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            name="password"
            error={errors.password?.message}
          />

          <Button type="submit">Entrar</Button>
          <p>
            Não tem uma conta? Faça seu <Link to="/signup">Cadastro</Link>
          </p>
        </form>
      </Content>
    </Container>
  );
}
export default Login;
