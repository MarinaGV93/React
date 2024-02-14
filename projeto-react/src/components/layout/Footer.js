// Importar ícones Font Awesome
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}>
        {/* Usar ícone */}
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p>Nosso rodapé</p>
    </footer>
  );
}

export default Footer;
