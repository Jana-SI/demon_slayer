import Botao from '../Botao/Botao';
import Input from '../Input/Input';
import './Formulario.css';

const Formulario = () => {
    return (
        <form className="form">
            <Input name="Nome" id="nome" type="text"/>
            <Input name="Email" id="email" type="email"/>
            <Input name="Sua mensagem" id="textarea" type="textarea"/>
            <Botao texto="Enviar" type="button"/>
        </form>
    )
}

export default Formulario;