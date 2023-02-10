
import Post from "./Post";


const posties = [
    {
        imagem:"assets/img/meowed.svg",
        texto:"meowed", 
        foto:"assets/img/gato-telefone.svg",
        perfil:"respondeai" ,
        perfilFoto : "assets/img/respondeai.svg",
        curtidas: 101.523 ,
        alt:"gato-telefone"
    },

    {
        imagem:"assets/img/barked.svg", 
        texto:"barked" ,
        foto:"assets/img/dog.svg" ,
        perfil:"adorable_animals" ,
        perfilFoto : "assets/img/adorable_animals.svg",
        curtidas:99.159,
        alt:"dog"
    },

    {
        imagem:"http://localhost:3000/assets/img/respondeai.svg", 
        texto:"respondeai" ,
        foto:"https://i.pinimg.com/originals/25/55/9a/25559a1afd4c829297d9701713497a9a.jpg" ,
        perfil:"barked" ,
        perfilFoto : "http://localhost:3000/assets/img/barked.svg",
        curtidas:159.891 ,
        alt:"dog"
    }

]

export default function Posts(){
    
    return ( <div class="posts">
   
    {posties.map((p) => <Post imagem={p.imagem} 
                              texto={p.texto} 
                              foto={p.foto} 
                              perfil={p.perfil} 
                              perfilFoto = {p.perfilFoto} 
                              curtidas = {p.curtidas}
                              alt = {p.alt}/>)}
  </div>);
}