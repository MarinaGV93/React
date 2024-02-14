import { useState } from "react";

function Form() {
  // Deixar que o evento fique a mostra no front
  // e = evento da submissão
  function cadastrar(e) {
    // preventDefault = parar a execução do formulário e executar o que está em seguida
    e.preventDefault();
    console.log(`Usuário ${name} foi cadastrado com a senha ${password}`);
  }
  // States para salvar os 2  values (valores) que forem passados no input para jogar no método que irá mandar para o back end

  // No states trabalha com constantes
  // Const que tenha o nome do campo que quer tratar. [nome do atributo que vai tratar (ler), o que vai alterar (atribuir para poder mudar o valor que está no atributo)]
  // useState(definir o valor que inicia quando o componente for inicializado (default))
  // const [name, setName] = useState("Marina");

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h1>Meu cadastro:</h1>

      {/* Evento de quando o formulário for enviado */}
      <form onSubmit={cadastrar}>
        <div>
          {/* Usar htmlFor no lugar de for (que se usa no HTML) */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            //Quando setar default no useState
            // value={name}

            // Alterar o valor baseado na mudança de valor do input. Cada letra que digita, modifica o valor no state
            // Ação que recebe o evento (e) e dá um setName no evento
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;
