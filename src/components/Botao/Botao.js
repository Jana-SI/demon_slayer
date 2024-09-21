import './Botao.css';

const Botao = ({texto, ...props}) => {
    return (
        <button className='botao' type={props.type}>{texto}</button>// Renderiza um botão com a classe 'botao' e o texto passado como prop
    )
}

export default Botao;