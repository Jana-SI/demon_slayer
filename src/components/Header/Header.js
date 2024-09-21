import "./Header.css";
import logo from "../imgs/logo.png";

const Header = () => {
  return (
    <header className="cabecalho">
      {/* Header que contém a logo e a mensagem de boas-vindas */}
      <img src={logo} alt="logo" />
      {/* Imagem da logo, usando a variável 'logo' como fonte */}
      <h2>Bem vindo a pagina de Demon Slayer - Kimetsu no Yaiba</h2>
      {/* Mensagem de boas-vindas */}
    </header>
  );
};

export default Header;
