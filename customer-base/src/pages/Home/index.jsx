import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

function Home() {
  return (
    <Container>
      <Content>
        <h1>
          customer<span>.</span>base
        </h1>
        <span>Cadastre seus contatos de forma simples e fácil</span>
        <div>
          <Link to="/signup">
            {" "}
            <Button>Cadatre-se</Button>
          </Link>

          <Link className="classlink" to="/login">
            {" "}
            <Button>Login </Button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
export default Home;
