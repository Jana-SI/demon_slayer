import { useState } from "react";
import Botao from "../Botao/Botao";
import Input from "../Input/Input";
import "./Formulario.css";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const Enviar = (e) => {
    e.preventDefault();
    console.log('Nome:', nome, 'Email:', email, 'Mensagem:', mensagem);


    if (nome.trim() && email.trim() && mensagem.trim()) {
      setMensagemSucesso("Mensagem Enviada com sucesso!");

      setNome("");
      setEmail("");
      setMensagem("");
    } else {
      setMensagemSucesso("Por favor, preencha todos os campos");
    }
  };

  return (
    <form className="form" onSubmit={Enviar}>
      <Input name="Nome" id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <Input name="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input name="Sua mensagem" id="text" type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
      <Botao texto="Enviar" type="submit" />
      {mensagemSucesso && <p>{mensagemSucesso}</p>}
    </form>
  );
};

export default Formulario;
