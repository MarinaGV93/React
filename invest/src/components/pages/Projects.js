import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const location = useLocation();

  /* Acessar o encaminhamento da mensagem */
  // Começar com a mensagem vazia
  let message = "";

  // Se tiver algo no state
  if (location.state) {
    // Ver se a message existe e atribuir na variável
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {/* Componente de mensagem */}
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Projetos</p>
      </Container>
    </div>
  );
}

export default Projects;
