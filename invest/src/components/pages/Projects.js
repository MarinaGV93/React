import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import Loading from "../layout/Loading";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {
  // Salvar os projetos
  const [projects, setProjects] = useState([]);

  // Sempre iniciando
  const [removeLoading, setRemoveLoading] = useState(false);

  // Mensagem
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();

  /* Acessar o encaminhamento da mensagem */
  // Começar com a mensagem vazia
  let message = "";

  // Se tiver algo no state
  if (location.state) {
    // Ver se a message existe e atribuir na variável
    message = location.state.message;
  }

  // Buscar os projetos do banco
  useEffect(() => {
    // Atrasar o loading
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        // Entrega um projeto
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);

          // Quando carregar os projetos, para o loading
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  // Remover projeto
  function removeProject(id) {
    // Acessar o id do projeto
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        // Excluir o projeto do array
        setProjects(projects.filter((project) => project.id !== id));

        // Mensagem de remoçao
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      {/* Componente de mensagem */}
      {message && <Message type="success" msg={message} />}

      {/* Mensagem de remoçao */}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {/* Exibir projetos dinamicamente */}
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {/* removeLoading = false */}
        {!removeLoading && <Loading />}

        {/* Quando nao tiver projetos */}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
