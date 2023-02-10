
import Sugestao from "./Sugestao";

const sugestoes = [
  {imagem:"assets/img/bad.vibes.memes.svg" , nome : "bad.vibes.memes"},
  {imagem:"assets/img/chibirdart.svg" , nome : "chibirdart"},
  {imagem:"assets/img/razoesparaacreditar.svg" , nome : "razoesparaacreditar" },
  {imagem:"assets/img/adorable_animals.svg" , nome : "adorable_animals" },
  {imagem:"assets/img/smallcutecats.svg" , nome : "smallcutecats" }
]

export default function Sugestões (){

    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {sugestoes.map((su) => <Sugestao imagem={su.imagem} nome={su.nome}/> )}

        </div>
    );
}