import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Signup() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    phone: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo 8 digitos")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
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
          <h1>Cadastro</h1>
          <Input
            register={register}
            icon={FiUser}
            label="Nome completo"
            placeholder="Seu nome"
            name="name"
            error={errors.name?.message}
          />
          <Input
            register={register}
            icon={FiMail}
            label="Email"
            placeholder="Seu melhor email"
            name="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            icon={FiPhone}
            label="Telefone"
            placeholder="(71) 99999-9999"
            name="phone"
            error={errors.phone?.message}
          />
          <Input
            register={register}
            icon={FiLock}
            label="Senha"
            placeholder="Uma senha bem segura"
            type="password"
            name="password"
            error={errors.password?.message}
          />
          <Input
            register={register}
            icon={FiLock}
            label="Confirmação de senha"
            placeholder="Confirmação de senha"
            type="password"
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />

          <Button type="submit">Enviar</Button>
          <p>
            Já tem uma conta? Faça seu <Link to="/login">Login</Link>
          </p>
        </form>
      </Content>
    </Container>
  );
}
export default Signup;
