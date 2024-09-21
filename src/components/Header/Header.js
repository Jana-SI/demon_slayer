import "./Header.css";
import logo from "../imgs/logo.png";

const Header = () => {
  //Header com logo e mensagem do boas vindas
  return (
    <header className="cabecalho">
      <img src={logo} alt="logo" />
      <h2>Bem vindo a pagina de Demon Slayer - Kimetsu no Yaiba</h2>
    </header>
  );
};

export default Header;
