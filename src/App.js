import "./App.css";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import Personagens from "./components/Personagens/Personagens";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Personagens />
        <Formulario />
      </div>
      <Footer />
    </div>
  );
}

export default App;
