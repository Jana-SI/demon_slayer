import "./Personagem.css";

const Personagem = ({personagem}) => {
  return (
    <li className="personagemItem">
      <h3>{personagem.nome}</h3>
      <img src={personagem.imagem} alt={personagem.descricao_imagem} />
      <p>{personagem.titulo}</p>
    </li>
  );
};

export default Personagem;
