
import Story from "./Story";

const stories = [
  { imagem: "assets/img/9gag.svg", texto: "9gag" },
  { imagem:"assets/img/meowed.svg", texto:"meowed" },
  { imagem:"assets/img/barked.svg", texto:"barked"},
  { imagem: "assets/img/nathanwpylestrangeplanet.svg", texto: "nathanwpylestrangeplanet"},
  { imagem:"assets/img/wawawicomics.svg", texto: "wawawicomics" },
  { imagem:"assets/img/respondeai.svg", texto: "respondeai"},
  { imagem:"assets/img/filomoderna.svg", texto: "filomoderna"},
  { imagem:"assets/img/memeriagourmet.svg", texto:"memeriagourmet" }
];

export default function Stories () {
  
    return (
        <div class="stories">
          
          {stories.map((s) => <Story imagem = {s.imagem} texto={s.texto}/> )}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    );
}