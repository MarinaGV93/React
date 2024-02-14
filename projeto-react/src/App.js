// Puxar o conteúdo de outra página
// import "./App.css";
// import HelloWorld from "./components/HelloWorld";
// import SayMyName from "./components/SayMyName";
// import Pessoa from "./components/Pessoa";
// import Frase from "./components/Frase";
// import List from "./components/List";
// import Evento from "./components/Evento";
// import Form from "./components/Form";
// import Condicional from "./components/Condicional";
// import OutraLista from "./components/OutraLista";
// import { useState } from "react";
// import SeuNome from "./components/SeuNome";
// import Saudacao from "./components/Saudacao";

// Componentes do Router
// Chamar de BrowserRouter de Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

// Função principal
function App() {
  // const [nome, setNome] = useState();
  // // Lista do componente pai

  // const meusItens = ["HTM", "CSS", "React"];

  // Criar variável
  // const name = "marina";
  // // const nome = "João";

  // // Colocar o nome em letras maiúsculas
  // const newName = name.toUpperCase();

  // // Criar função
  // function sum(a, b) {
  //   return a + b;
  // }

  // // Alterar atributos
  // const url = "https://via.placeholder.com/150";

  return (
    // Precisar ter um wrapper, algo para envolver todo o conteúdo
    // <div className="App">
    //   <h1>Testando CSS</h1>
    //   Frase />
    //   <h1>Olááá</h1>
    //   <p>Meu primeiro app com React</p>

    //   Chamando a variável
    //   <p>Olá {newName}</p>

    //   Fazendo calculo
    //   <p>Soma: {2 + 2}</p>

    //   Chamando a função
    //   <p>Soma: {sum(1, 2)}</p>

    //   Usar a imagem com a url dinâmica
    //   <img src={url} alt="Minha imagem" />

    //   Chamar componente
    //   <HelloWorld />

    //   Usar com atributo
    //   <SayMyName nome="Marina" />

    //   Reaproveitar componente
    //   <SayMyName nome="Maria" />

    //   Passando a variável
    //   <SayMyName nome={nome} />

    //   <Pessoa
    //     nome="Júlia"
    //     idade="25"
    //     profissao="Manicure"
    //     foto="https://via.placeholder.com/150"
    //   />
    //   <List />
    //   <h1>Testando eventos</h1>
    //   <Evento />
    //   <Evento numero="2" />
    //   <Form />
    //   <h1>Renderização condicional</h1>
    //   <Condicional />
    //   <h1>Renderização de listas</h1>
    //   <OutraLista itens={meusItens} />
    //   <OutraLista itens={[]} />
    //   <h1>State Lift</h1>
    //   // Onde está o input
    //   <SeuNome setNome={setNome} />
    //   <Saudacao nome={nome} />
    // </div>

    // Envolver todo o componente em Router
    // Vai adaptar toda a aplicação em Router
    <Router>
      {/* NavBar */}
      <NavBar />
      {/* Configurar os links no react, dizendo que essas são as páginas */}
      <Routes>
        {/* Declarar as rotas, páginas */}
        {/* Página / */}
        {/* exact = Quando o componente for exatamente a página (/)
        element = componente */}
        <Route exact path="/" element={<Home />} />

        {/* Página Empresa */}
        <Route path="/empresa" element={<Empresa />} />

        {/* Página Contato */}
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

//export = Função de disponibilizar conteúdo do arquivo para outro
export default App;
