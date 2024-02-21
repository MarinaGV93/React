import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        // Ou vazio para deixar a primeira opção selecionado
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {/* Imprimir as options
        renomear em OPTION */}
        {options.map((option) => (
          // Renderizar em options
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
