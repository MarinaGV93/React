import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "./Navbar.module.css";

// Importar logo
import logo from "../../img/logo.png";

// Se fosse um sistema com login (autenticação), pode usar props para desviá-lo para uma página

function Navbar() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Invest" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
