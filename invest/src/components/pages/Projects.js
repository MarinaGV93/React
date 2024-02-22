import Message from "../layout/Message";
import { useLocation } from "react-router-dom";

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
    <div>
      <h1>Meus Projetos</h1>
      {/* Componente de mensagem */}
      {message && <Message type="success" msg={message} />}
    </div>
  );
}

export default Projects;
