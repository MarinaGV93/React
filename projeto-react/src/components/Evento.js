import Button from "./evento/Button";

function Evento({ numero }) {
  function meuEvento() {
    // console.log(`Fui disparado ${numero}`);
    console.log(`Ativando primeiro evento`);
  }

  // Adicionando outro método no componente filho
  function segundoEvento() {
    console.log(`Ativando o segundo evento`);
  }

  return (
    <>
      <p>Clique para dispara o evento</p>

      {/* Ao clicar, chama uma função (evento) */}
      {/* Passar por meio de props */}
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />

      {/* <button onClick={meuEvento}>Disparar</button> */}
    </>
  );
}

export default Evento;
