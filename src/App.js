import "./App.css";

// importação dos components
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import Personagens from "./components/Personagens/Personagens";
import Trailer from "./components/Trailer/Trailer";

function App() {
  return (
    <div className="App">
      <Header /> {/* Renderiza o cabeçalho */}
      <div className="container">
        {/* Container para os personagens e trailer */}
        <Personagens />
        {/* Renderiza a lista de personagens */}
        <Trailer>
        <h2>Demon Slayer: Kimetsu no Yaiba Castelo Infinito</h2>
        <p>Confira o que vem por aí!</p>
        </Trailer>
        {/* Renderiza o trailer */}
      </div>
      <div className="form-container">
        {/* Container para o formulário */}
        <Formulario />
        {/* Renderiza o formulário de contato */}
      </div>
      <Footer />
      {/* Renderiza o rodapé */}
    </div>
  );
}

export default App;
