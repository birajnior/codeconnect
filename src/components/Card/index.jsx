import "./styles.css";
import Capa from "./assets/1.png";
import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
import Chat from "./assets/chat.svg";
import Icon from "./assets/icon.png";

export default function Card() {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={Capa} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>Titulo do post</h3>
          <p>Resumo do post</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="Códigos" />
              15
            </li>
            <li>
              <img src={Share} alt="Compartilhamentos" />
              20
            </li>
            <li>
              <img src={Chat} alt="Comentários" />
              36
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={Icon} alt="Imagem do usuário" />
            @moni
          </div>
        </div>
      </div>
    </article>
  );
}
