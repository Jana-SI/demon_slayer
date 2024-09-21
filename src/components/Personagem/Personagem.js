import "./Personagem.css";

const Personagem = ({ personagem }) => {
  // Componente responsável por apresentar lista de personagens, com seus nomes, imagens e descrição.
  return (
    <li className="personagemItem">
      <h3>{personagem.nome}</h3>
      <img src={personagem.imagem} alt={personagem.descricao_imagem} />
      <p>{personagem.titulo}</p>
    </li>
  );
};

export default Personagem;