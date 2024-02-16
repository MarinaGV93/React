import styles from "./SubmitButton.module.css";

// Só irá receber o texto do botão
function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;
