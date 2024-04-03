import { parse, v4 as uuidv4 } from "uuid";

import styles from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

function Project() {
  // Pegar o projeto pelo id do BD para imprimir os dados
  const { id } = useParams();
  //   console.log(id);

  // Exbir/esconder projeto. Começa vazio
  const [project, setProject] = useState([]);

  // Exbir/esconder serviço. Começa vazio
  const [services, setServices] = useState([]);

  // Exbir/esconder formulário do projeto
  const [showProjectForm, setShowProjectForm] = useState(false);

  // Mensagem
  const [message, setMessage] = useState();

  // Tipo da mensagem
  const [type, setType] = useState();

  // Exbir/esconder formulário do serviço
  const [showServiceForm, setShowServiceForm] = useState(false);

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
            setServices(data.services);
          })
          .catch((err) => console.log(err));
      }, 300);
    },
    // Monitorando o id
    [id]
  );

  function editPost(project) {
    // Quando for editar
    setMessage("");

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

        setMessage("Projeto atualizado com sucesso");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function createService(project) {
    setMessage("");

    // Último serviço
    const lastService = project.services[project.services.length - 1];

    // Colocar um ID único, utilizando o pacote uuidv4
    lastService.id = uuidv4();

    // Pegar o custo do ultimo serviço
    const lastServiceCost = lastService.cost;

    // Novo custo (custo atual + custo do ultimo serviço)
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // Validação do serviço (se passou do valor máximo)
    // Se valor novo for maior do que o valor que tem do projeto (budget)
    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");

      // Excluir o serviço
      project.services.pop();
      return false;
    } else {
      setMessage("Serviço adicionado com sucesso");
      setType("success");
    }

    // Adicionar custo do serviço no projeto
    project.cost = newCost;

    // Atualização parcial do projeto
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Exibir os serviços
        // console.log(data);

        // Fechar o formuláro
        setShowServiceForm(false);
      })
      .catch((err) => console.log(err));
  }

  function removeService(id, cost) {
    setMessage("");
    // Atualizaçao dos serviços
    const servicesUpdated = project.services.filter(
      // Tirar o serviço com o id que passar pelo removido
      (service) => service.id !== id
    );

    const projectUpdated = project;

    // Remover o serviço
    projectUpdated.services = servicesUpdated;

    // Remover o custo
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Setar o projeto atualizado
        setProject(projectUpdated);

        // Atualizar serviço
        setServices(servicesUpdated);
        setMessage("Serviço removido com sucesso");
        setType("error");
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
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
                    <span>Total utilizado:</span> R${project.cost}
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
            {/* Service */}
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {/* Se não tiver projectForm sendo exibido */}
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              {/* Ver se existem serviços */}
              {services.length > 0 &&
                // Exibir serviços
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
