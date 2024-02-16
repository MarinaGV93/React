import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

// Recebe 2 props
// to = para onde vai quando clicar
// text = mudar o texto baseado onde vai usar
function LinkButton({ to, text }) {
  return (
    // Link do Router
    <Link className={styles.btn} to={to}>
      {/* Imprimir o texto dinâmico */}
      {text}
    </Link>
  );
}

export default LinkButton;
