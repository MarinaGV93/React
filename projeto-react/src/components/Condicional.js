import { useState } from "react";

function Condicional() {
  // Criar um state
  const [email, setEmail] = useState();

  // Passar por esse método para depois fazer a submissão do email
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    // Colocar o email virar userEmail
    setUserEmail(email);
    console.log(userEmail);
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <div>
      <h2>Cadastre seu email:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite o seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar email
        </button>
        {/* {se tem o email} && (faz) */}
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
