import { useState, useEffect } from "react";
import styles from "./Message.module.css";

function Message({ type, msg }) {
  // Alterar a visibilidade da mensagem
  // A mensagem suma depois que passar 3s
  const [visible, setVisible] = useState(false);

  // Fazer o timer
  // Condiciona a mensagem
  useEffect(() => {
    // Se a mensagem não existe
    if (!msg) {
      setVisible(false);
      // Terminar a lógica
      return;
    }
    // Se tiver mensagem
    setVisible(true);

    // Timer
    const timer = setTimeout(() => {
      // Apagar a mensagem em 3s
      setVisible(false);
    }, 3000);
    // Encerrar
    return () => clearTimeout(timer);
  }, [msg]);
  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}

export default Message;
