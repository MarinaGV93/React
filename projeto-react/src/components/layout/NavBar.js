import { Link } from "react-router-dom";

// Importar CSS
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    //   Pode definir rotas e componentes que vão fazer parte do layout, que se repetem de view para view */}
    <ul className={styles.list}>
      {/* Links para acessar a partir da URL
      Tag LINK = tag A no HTML
      Tag TO = tag HREF no HTML, com a rota  */}
      <li className={styles.item}>
        <Link to={"/"}>Home</Link>
      </li>
      <li className={styles.item}>
        <Link to={"/empresa"}>Empresa</Link>
      </li>
      <li className={styles.item}>
        <Link to={"/contato"}>Contato</Link>
      </li>
    </ul>
  );
}

export default NavBar;
