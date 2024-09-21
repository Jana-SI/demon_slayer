import './Botao.css';

const Botao = ({texto, ...props}) => {
    // Renderiza um botão com a classe 'botao' e o texto passado como prop
    return (
        <button className='botao' type={props.type}>{texto}</button>
    )
}

export default Botao;