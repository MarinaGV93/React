import PropTypes from "prop-types";

// Para o item, precisa pegar o li da lista
function Item({ marca, anoLancamento }) {
  return (
    <>
      <li>
        {marca} - {anoLancamento}
      </li>
    </>
  );
}

// Garantir que as propriedade são String e Number
// propTypes = propriedade do componente
// isRequired = requerido
Item.propTypes = {
  // String
  marca: PropTypes.string.isRequired,
  anoLancamento: PropTypes.number,
};

// Valor default
Item.defaultProps = {
  marca: "Faltou a marca",
  anoLancamento: 0,
};

export default Item;
