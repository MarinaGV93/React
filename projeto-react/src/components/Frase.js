// Importar CSS do componente
import styles from "./Frase.module.css";

function Frase() {
  return (
    // Inserir o CSS
    <div className={styles.fraseContainer}>
      <h2 className={styles.fraseContent}>Componente com uma frase</h2>
    </div>
  );
}

export default Frase;
