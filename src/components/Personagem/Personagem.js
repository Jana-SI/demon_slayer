import "./Personagem.css";

const Personagem = ({ personagem }) => {
  return (
    <li className="personagemItem">
      {/* Item da lista que representa um personagem */}
      <h3>{personagem.nome}</h3>
      {/* Nome do personagem */}
      <img src={personagem.imagem} alt={personagem.descricao_imagem} />
      {/* Imagem do personagem com descrição alternativa */}
      <p>{personagem.titulo}</p>
      {/* descrição adicional do personagem */}
    </li>
  );
};

export default Personagem;
