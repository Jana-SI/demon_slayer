import "./Personagens.css";

// Importa as imagens dos personagens
import tanjiro_img from "../imgs/tanjiro.png";
import nezuko_img from "../imgs/nezuko.png";
import zenitsu_img from "../imgs/zenitsu.png";
import inosuke_img from "../imgs/inosuke.png";
import Kanao_img from "../imgs/kanao.png";
import genya_img from "../imgs/genya.png";
import muzan_img from "../imgs/muzan.png";

import Personagem from "../Personagem/Personagem";

const Personagens = () => {
  // Lista com nome, titulo e imagens dos personagens
  const Personagens = [
    {
      nome: "Tanjiro Kamado",
      titulo: "Caçador de Onis",
      imagem: tanjiro_img,
      descricao_imagem: "imagem do Tanjiro",
    },
    {
      nome: "Nezuko Kamado",
      titulo: "Oni Escolhido",
      imagem: nezuko_img,
      descricao_imagem: "imagem do Tanjiro",
    },
    {
      nome: "Zenitsu Agatsuma",
      titulo: "Caçador de Onis",
      imagem: zenitsu_img,
      descricao_imagem: "imagem do Zenitsu",
    },
    {
      nome: "Inosuke Hashibira",
      titulo: "Caçador de Onis",
      imagem: inosuke_img,
      descricao_imagem: "imagem do Inosuke",
    },
    {
      nome: "Kanao Tsuyuri",
      titulo: "Caçadora de Onis",
      imagem: Kanao_img,
      descricao_imagem: "imagem da Kanao",
    },
    {
      nome: "Genya Shinazugawa",
      titulo: "Caçadora de Onis",
      imagem: genya_img,
      descricao_imagem: "imagem do Genya",
    },
    {
      nome: "Muzan Kibutsuji",
      titulo: "Rei dos Onis",
      imagem: muzan_img,
      descricao_imagem: "imagem do Muzan",
    },
  ];

  return (
    // Renderiza um componente Personagem para cada item no array
    <div className="personagens">
      <ul className="listaPersonagens">
        {Personagens.map((personagem, index) => (
          <Personagem personagem={personagem} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Personagens;
