import './Botao.css';

const Botao = ({texto, ...props}) => {
    return (
        <button className='botao' type={props.type}>{texto}</button>
    )
}

export default Botao;