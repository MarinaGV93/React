import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Project() {
  // Pegar o projeto pelo id do BD para imprimir os dados
  const { id } = useParams();
  //   console.log(id);

  const [project, setProject] = useState([]);

  // Chamar o projeto
  useEffect(
    () => {
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
    },
    // Monitorando o id
    [id]
  );
  return <p>{project.name}</p>;
}

export default Project;
