import "./Personagem.css";

const Personagem = ({nome, ...props}) => {
  return (
    <li className="listarPersonagem">
      <h3>{nome}</h3>
      <p>{props.titulo}</p>
      <img src={props.imagem} alt={props.descricao_imagem} />
    </li>
  );
};

export default Personagem;
