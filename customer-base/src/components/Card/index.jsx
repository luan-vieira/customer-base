import { Container } from "./styles";
import { FiMail, FiPhone, FiChevronsRight } from "react-icons/fi";
import Button from "../Button";

function Card({ name, date, email, phone, onClick }) {
  return (
    <Container>
      <h1>{name}</h1>
      <hr />
      <span>
        <FiMail /> {email}
      </span>
      <hr />
      <span>
        <FiPhone /> {phone}
      </span>
      <hr />
      <Button onClick={onClick}>Editar </Button>
      <Button onClick={onClick}>Remover</Button>
      <hr />
      <time>
        <FiChevronsRight />
        Adicionado em: {date}.
      </time>
    </Container>
  );
}

export default Card;
