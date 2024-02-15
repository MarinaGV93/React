import styles from "./Container.module.css";

// Container flex que vai poder mudar as directions por classes helps

function Container(props) {
  return (
    // Os elementos filhos que estão encapsulados no componente a cima do Routes, pelas tags, vão ser encaixados dentro dessa DIV
    // Direcionando onde o conteúdo que está 'abrigado' em baixo do componente, vai ser exibido
    // Para colocar classes dinâmicas. Executar JS no class para interpretar as variáveis
    // customClass = Inserir classes que vem da props. Vai ser enviada quando for necessário
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
