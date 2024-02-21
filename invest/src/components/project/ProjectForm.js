import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

// Componente do projeto pai (NewProject)
// projectData = dados do projeto
function ProjectForm({ handleSubmit, btnText, projectData }) {
  // Começando com array vazio, esperando a resposta que vai vir da API
  const [categories, setCategories] = useState([]);

  // Quando enviar o projeto pra edição, vai passar pra página pai também, para iniciá-los ou não
  // Inicia com o projectData, que recebe do componente pai, ou um objeto vazio
  const [project, setProject] = useState(projectData || {});

  // Renderizar 1 vez somente quando precisar acessar o FETCH e utilizar
  useEffect(() => {
    // Request para API em GET
    fetch("http://localhost:5000/categories", {
      method: "GET",
      // Receber json
      headers: {
        "Content-type": "application/json",
      },
    })
      // Pegar a resposta e transformar (retornar) em JSON
      .then((resp) => resp.json())
      // Pegar os dados e colocar no HOOK setCategories
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  });

  // Método submit. Recebe o evento
  const submit = (e) => {
    e.preventDefault();
    // console.log(project);
    // Executa o método passado pela prop e passa o projeto que está cadastrado no formulário como argumento
    handleSubmit(project);
  };

  // Já cria um projeto independente do input que preenche
  function handleChange(e) {
    // Alterar o nome do projeto
    // Destruct - Pega todo o dado do projeto, que é o state e que o nome do input (name ou budget) vai ser igual o valor
    setProject({ ...project, [e.target.name]: e.target.value });
    // console.log(project);
  }

  // Já cria um projeto independente do select que escolhe
  function handleCategory(e) {
    // Alterar o category que vai ser outro objeto
    setProject({
      ...project,
      category: {
        // Passar o id, que vai ser o valor do input
        id: e.target.value,
        // Passar o nome, que vai acessar a opção selecionada pelo índice e acessar o text
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    // console.log(project);
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orcamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        // options = mandar as categorias
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      {/* Puxar a propriedade do componente pai (NewProject) */}
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
