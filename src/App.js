import React, {Component} from "react";
import "./style.css";

import Alface from "./imagens/alface.png";
import Beterraba from "./imagens/beterraba.png";
import Cenoura from "./imagens/cenoura.png";
import Cereja from "./imagens/cereja.png";
import Laranja from "./imagens/laranja.png";
import Limao from "./imagens/limao.png";
import Manga from "./imagens/manga.png";
import Tomate from "./imagens/tomate.png";
import Compras from "./imagens/compras.png";

class HortiFruti extends Component{

  state = {
    ImgHortiFruti:[
      {imagem: `${Alface}`, titulo: "Alface"},
      {imagem: `${Beterraba}`, titulo: "Beterraba"},
      {imagem: `${Cenoura}`, titulo: "Cenoura"},
      {imagem: `${Cereja}`, titulo: "Cereja"},
      {imagem: `${Laranja}`, titulo: "Laranja"},
      {imagem: `${Limao}`, titulo: "Limao"},
      {imagem: `${Manga}`, titulo: "Manga"},
      {imagem: `${Tomate}`, titulo: "Tomate"}
    ]
  };
  render(){
    return(
      <>
     
        
        <section className="map">
          <h1>HortiFruti VNW</h1>
          <h2>Nossos Produtos</h2>
            {this.state.ImgHortiFruti.map ((item)=>(
            <div className="Box">
              <img src= {item.imagem} alt ={item.titulo}/>
            </div>
          ))}
          <div className="retangulo">
          </div>
        </section>


      </>
    )
  }
}

export default HortiFruti ;
