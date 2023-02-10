import { useState } from "react";

export default function Post (props){

  const [salvarVazio, setSalvarvazio] = useState ("");
  const [salvarCheio, setSalvarCheio] = useState ("esconder-icon");

  const [semLike, setSemLike] = useState("");
  const [like, setLike] = useState("esconder-icon like");

  const [curtidas, setCurtidas] = useState(props.curtidas);

  function salvarPost(){

    if(salvarVazio === "esconder-icon"){
      setSalvarCheio("esconder-icon");
      setSalvarvazio("");
    }
    else{
      setSalvarCheio("");
      setSalvarvazio("esconder-icon");
    }    
}

  function curtirPost(){

    if(semLike === ""){
      setSemLike("esconder-icon");
      setLike("like");

      let parteInteira = curtidas.toString().split('.')[0];
      let parteDecimal = Number(curtidas.toString().split('.')[1]);

      parteDecimal = parteDecimal + 1;
      setCurtidas(parteInteira + '.' + (parteDecimal.toString()));

    } else {

      setSemLike("");
      setLike("esconder-icon like");

      let parteInteira = curtidas.toString().split('.')[0];
      let parteDecimal = Number(curtidas.toString().split('.')[1]);

      parteDecimal = parteDecimal - 1;
      setCurtidas(parteInteira + '.' + (parteDecimal.toString()));
    }
  }

  function curtirPostFoto (){

    if(like === "esconder-icon like"){
      let parteInteira = curtidas.toString().split('.')[0];
      let parteDecimal = Number(curtidas.toString().split('.')[1]);

      parteDecimal = parteDecimal + 1;
      setCurtidas(parteInteira + '.' + (parteDecimal.toString()));
    }
    
    setSemLike("esconder-icon");
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
      <img data-test="post-image" onClick = {curtirPostFoto} src={props.foto} alt={props.alt}/>
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon data-test="link-post" onClick = {curtirPost} class={semLike} name="heart-outline"></ion-icon>
          {/* <ion-icon data-test="link-post" onClick = {curtirPost} class={like} name="heart"></ion-icon> */}

          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon data-test="save-post" onClick = {salvarPost} class={salvarCheio} name="bookmark"></ion-icon>
          <ion-icon data-test="save-post" onClick = {salvarPost} class={salvarVazio}  name="bookmark-outline"></ion-icon>

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