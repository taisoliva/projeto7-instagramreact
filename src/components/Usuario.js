
import { useState } from "react";



export default function Usuario(props){

  const [nomeUsuario, setNomeUsuario] = useState(props.nome);
  const [imagemUsuario, setImagemUsuario] = useState(props.imagem);

  function mudarNome (){
    const novoNome = prompt("Digite o novo nome de perfil:");

    if(novoNome !== ""){
      setNomeUsuario(novoNome);
    }
  }

  function mudarImagem(){
    const novoImagem = prompt("Url nova imagem:");

    if(novoImagem !== ""){
      setImagemUsuario(novoImagem);
    }
  }


    return (
        <div class="usuario">
          <img onClick={mudarImagem} src={imagemUsuario} alt={nomeUsuario}/>
          <div class="texto">
            <span>
              <strong>{nomeUsuario}</strong>
              <ion-icon onClick={mudarNome} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}