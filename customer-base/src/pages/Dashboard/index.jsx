import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ContactsContainer, Container, HeaderContainer } from "./styles";
import { FiEdit2 } from "react-icons/fi";
import Card from "../../components/Card";

function Dashboard() {
  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <HeaderContainer>
        <div>
          <h1>Luan Vieira</h1>
          <span>lluancvs@gmail.com</span>
          <span>(71) 99123-1184</span>
          <time>7 de maio de 2021</time>
        </div>
        <div>
          <Button>Adicionar contato</Button>
          <Button>Sair</Button>
        </div>
      </HeaderContainer>
      <h2>Meus contatos</h2>
      <ContactsContainer>
        {[1, 2, 3].map((_) => (
          <Card
            name="Felipe Carneiro"
            email="felipe.carneiro@gmail.com"
            phone="(71) 99123-1184"
            date="7 de maio de 2023"
            onClick={() => {}}
          />
        ))}
      </ContactsContainer>
    </Container>
  );
}
export default Dashboard;
