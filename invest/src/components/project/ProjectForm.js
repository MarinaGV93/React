import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

// Componente do projeto pai (NewProject)
function ProjectForm({ btnText }) {
  // Começando com array vazio, esperando a resposta que vai vir da API
  const [categories, setCategories] = useState([]);

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

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orcamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        // options = mandar as categorias
        options={categories}
      />
      {/* Puxar a propriedade do componente pai (NewProject) */}
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
