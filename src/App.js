import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Personagens from "./components/Personagens/Personagens";

function App() {
  return (
    <div className="App">
      <Header />
      <Personagens />
      <Footer/>
    </div>
  );
}

export default App;