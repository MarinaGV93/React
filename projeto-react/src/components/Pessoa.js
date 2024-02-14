// Usando mais propriedades
// Usar Struct. Transformar o objeto Props já no nome da propriedade, sem ficar chamando sempre o mesmo objeto
// O objeto que vai receber vai virar alguns valores
function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div>
      {/* <img src={props.foto} /> */}
      <img src={foto} />

      {/* <h2>Nome: {props.nome}</h2> */}
      <h2>Nome: {nome}</h2>

      {/* <p>Idade: {props.idade}</p> */}
      <p>Idade: {idade}</p>

      {/* <p>Profissão: {props.profissao}</p> */}
      <p>Profissão: {profissao}</p>
    </div>
  );
}

export default Pessoa;
