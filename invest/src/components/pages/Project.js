import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";

function Project() {
  // Pegar o projeto pelo id do BD para imprimir os dados
  const { id } = useParams();
  //   console.log(id);

  const [project, setProject] = useState([]);

  const [showProjectForm, setShowProjectForm] = useState(false);

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

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {/* Se vai ter o project.name, entao vai exibir algo, se não, vai exibir outra coisa */}
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
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
                  <p>Detalhes do projeto</p>
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
