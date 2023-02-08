
export default function Story(props){

   return ( <div class="story">
   <div class="imagem">
     <img src={props.imagem} alt={props.texto}/>
   </div>
   <div class="usuario">
   {props.texto}
   </div>
 </div>);
}