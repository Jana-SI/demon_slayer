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
    // Formulário que chama a função Enviar ao ser submetido, espera: nome, email e mensagem.
    <form className="form" onSubmit={Enviar}>
      <caption>Fale Conosco</caption>
      <Input name="Nome" id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <Input name="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input name="Sua mensagem" id="text" type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
      <Botao texto="Enviar" type="submit" />
      {mensagemSucesso && <p>{mensagemSucesso}</p>}
    </form>
  );
};

export default Formulario;