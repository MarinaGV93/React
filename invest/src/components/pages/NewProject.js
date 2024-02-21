import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  // Hook que permite fazer redirect (redirecionar) para outra página quando precisar
  const navigate = useNavigate();
  // Criar post, chamando o projeto como argumento
  function createPost(project) {
    // Inicializar o projeto como 0 e o serviços como vazio
    project.cost = 0;
    project.services = [];

    // Valor para monitorar os dados do post na view.
    // Se coloca no back end em vez dessa página
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // Mandar os dados para o servidor, como string
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // Quando der sucesso na adição do projeto
        navigate("/projects", { message: "Projeto criado com sucesso" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto e depois adicione um serviço</p>
      {/* handleSubmit = vai depender do método que manda */}
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
