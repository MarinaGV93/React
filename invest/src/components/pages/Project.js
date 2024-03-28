import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";

function Project() {
  // Pegar o projeto pelo id do BD para imprimir os dados
  const { id } = useParams();
  //   console.log(id);

  const [project, setProject] = useState([]);

  const [showProjectForm, setShowProjectForm] = useState(false);

  // Mensagem
  const [message, setMessage] = useState();

  // Tipo da mensagem
  const [type, setType] = useState();

  // Chamar o projeto
  useEffect(
    () => {
      setTimeout(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data);
          })
          .catch((err) => console.log(err));
      }, 300);
    },
    // Monitorando o id
    [id]
  );

  function editPost(project) {
    // Quando tiver o valor total de orçamento menor que o custo feito do projeto
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto");
      setType("error");

      // Parar tudo (não atualizar o projeto)
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      // Só atualiza o que mandar
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      // Mandar o projeto como texto
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Alterar o projeto com os dados que vieram atualizados
        setProject(data);

        // Esconder o formulário
        setShowProjectForm(false);
        // setShowProjectForm(!showProjectForm);

        setMessage("Projeto atualizado");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {/* Se vai ter o project.name, entao vai exibir algo, se não, vai exibir outra coisa */}
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {/* Imprimir a mensagem */}
            {/* Se tiver algo preenchido no setMessage... */}
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {/* Se não tiver projectForm sendo exibido */}
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R${project.const}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
