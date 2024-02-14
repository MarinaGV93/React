// Não tem limite para usar props
function SayMyName(props) {
  return (
    <div>
      {/* Acessar a props  */}
      <p>Oiii {props.nome}, tudo bem?</p>
    </div>
  );
}

export default SayMyName;
