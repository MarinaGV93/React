function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas:</h3>
      {/* Criar e exibir um looping */}
      {
        // IF ELSE
        itens.length > 0 ? (
          // Mapear cada um dos itens ((item, index (id)) vai executar algo em cada um dos itens)
          itens.map((item, index) => (
            // Imprimir item com o id (key)
            <p key={index}>{item}</p>
          ))
        ) : (
          <p>Não há itens na listas</p>
        )
      }
    </>
  );
}

export default OutraLista;
