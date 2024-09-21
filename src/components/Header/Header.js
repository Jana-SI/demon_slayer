import './Header.css';
import logo from "../imgs/logo.png";

const Header = () => {
    return (
        <header className="cabecalho">
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default Header;