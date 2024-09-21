// Importa o hook useState do React
import { useState } from "react";

// importa componentes botão e input
import Botao from "../Botao/Botao";
import Input from "../Input/Input";

import "./Formulario.css";

const Formulario = () => {
  // Declara estados para armazenar os valores dos campos do formulário e a mensagem de sucesso
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  // Função chamada ao enviar o formulário
  const Enviar = (e) => {
    e.preventDefault();// Previne o comportamento padrão do formulário

    // Verifica se todos os campos estão preenchidos
    if (nome.trim() && email.trim() && mensagem.trim()) {

      // Atualiza a mensagem de sucesso
      setMensagemSucesso("Mensagem Enviada com sucesso!");

      // Limpa os campos do formulário
      setNome("");
      setEmail("");
      setMensagem("");
    } else {
      // Exibe mensagem de erro se campos não estão preenchidos
      setMensagemSucesso("Por favor, preencha todos os campos");
    }
  };

  return (
    <form className="form" onSubmit={Enviar}>{/* Formulário que chama a função Enviar ao ser submetido */}
      <caption>Fale Conosco</caption>{/* Título do formulário */}
      <Input name="Nome" id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>{/* Campo para o nome */}
      <Input name="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />{/* Campo para o email */}
      <Input name="Sua mensagem" id="text" type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>{/* Campo para a mensagem */}
      <Botao texto="Enviar" type="submit" />{/* Botão de envio */}
      {mensagemSucesso && <p>{mensagemSucesso}</p>}{/* Exibe a mensagem de sucesso se existir */}
    </form>
  );
};

export default Formulario;
