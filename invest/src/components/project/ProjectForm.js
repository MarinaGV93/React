import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira o orçamento total" />
      </div>
      <div>
        <select className="category_id">
          <option disable selected>
            Selecione a categoria
          </option>
        </select>
        <div>
          <input type="submit" value="Criar Projeto" />
        </div>
      </div>
    </form>
  );
}

export default ProjectForm;
