import "./Personagem.css";

const Personagem = ({personagem}) => {
  return (
    <li className="personagemItem">
      <h3>{personagem.nome}</h3>
      <p>{personagem.titulo}</p>
      <img src={personagem.imagem} alt={personagem.descricao_imagem} />
    </li>
  );
};

export default Personagem;
