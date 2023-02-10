import { useState } from "react";

export default function Post (props){

  /* const [salvarVazio, setSalvarvazio] = useState ("");
  const [salvarCheio, setSalvarCheio] = useState ("esconder-icon"); */

  const [salvar, setSalvar] = useState("bookmark-outline");

  const [curtidas, setCurtidas] = useState(props.curtidas);
  
  const [like, setLike] = useState("");
  const [iconeCoracao, setIconeCoracao] = useState("heart-outline")

  const [animacao, setAnimacao] = useState("esconder");

  function salvarPost(){

    setSalvar(salvar === "bookmark-outline"? "bookmark" : "bookmark-outline");

    /* if(salvarVazio === "esconder-icon"){
      setSalvarCheio("esconder-icon");
      setSalvarvazio("");
    }
    else{
      setSalvarCheio("");
      setSalvarvazio("esconder-icon");
    }     */
}

  function curtirPost(){

    if(like === ""){
      setIconeCoracao("heart");
      setLike("like");

      let parteInteira = curtidas.toString().split('.')[0];
      let parteDecimal = Number(curtidas.toString().split('.')[1]);

      parteDecimal = parteDecimal + 1;
      setCurtidas(parteInteira + '.' + (parteDecimal.toString()));
    }

    else{
      setIconeCoracao("heart-outline");
      setLike("");

        let parteInteira = curtidas.toString().split('.')[0];
        let parteDecimal = Number(curtidas.toString().split('.')[1]);

        parteDecimal = parteDecimal - 1;
        setCurtidas(parteInteira + '.' + (parteDecimal.toString()));
    }
  }

  function curtirPostFoto (){

    if(like !== "like"){
      let parteInteira = curtidas.toString().split('.')[0];
      let parteDecimal = Number(curtidas.toString().split('.')[1]);

      parteDecimal = parteDecimal + 1;
      setCurtidas(parteInteira + '.' + (parteDecimal.toString()));

      setAnimacao("animacao");

      setTimeout(() => {setAnimacao("esconder")}, 1000);
    }
    

    setIconeCoracao("heart");
    setLike("like");

  }

    return ( <div data-test="post" class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.imagem} alt={props.texto}/>
        {props.texto}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img data-test="post-image" onDoubleClick = {curtirPostFoto} src={props.foto} alt={props.alt}/>
      <ion-icon class={animacao} name="heart"></ion-icon>
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon data-test="like-post" onClick = {curtirPost} class={like} name={iconeCoracao}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon data-test="save-post" onClick = {salvarPost} name={salvar}></ion-icon>
          {/* <ion-icon data-test="save-post" onClick = {salvarPost} class={salvarVazio}  name="bookmark-outline"></ion-icon> */}

        </div>
      </div>

      <div class="curtidas">
        <img src={props.perfilFoto} alt={props.perfil}/>
        <div class="texto">
          Curtido por <strong>{props.perfil}</strong> e <strong data-test="likes-number"> outras {curtidas} pessoas</strong>
        </div>
      </div>
    </div>
  </div>)
}