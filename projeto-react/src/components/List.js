import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        {/* Para declarar número, colocar em {} */}
        <Item marca="Ferrari" anoLancamento={1985} />
        <Item marca="BMW" anoLancamento={1964} />
        <Item />
      </ul>
    </>
  );
}

export default List;
