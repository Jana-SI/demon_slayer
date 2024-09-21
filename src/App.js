import "./App.css";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import Personagens from "./components/Personagens/Personagens";
import Trailer from "./components/Trailer/Trailer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Personagens/>
        <Trailer/>
      </div>
      <div className="form-container">
        <Formulario />
      </div>
      <Footer />
    </div>
  );
}

export default App;
