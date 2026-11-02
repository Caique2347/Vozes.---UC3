import React from "react";
import "./App.css";
import viniImg from "./assets/Vini_ Jr_.jpg";
import aliImg from "./assets/download (3).jpg";
import malalaImg from "./assets/download (9).jpg";
import marieImg from "./assets/Marie Curie.jpg";
import erikaImg from "./assets/download (5).jpg";
import gilImg from "./assets/download (6).jpg";
import pablloImg from "./assets/download (4).jpg";
import seujorgeImg from "./assets/Seu Jorge.jpg";

const corRacismo = "#b5451b";
const corTransfobia = "#1f7a9c";
const corMisoginia = "#b3205f";
const corHomofobia = "#5b3fc4";

function Header() {
  return (
    <header className="header">
      <div className="header-linha">
        <a href="#inicio" className="logo">VOZES<span>.</span></a>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#representantes">Vozes</a>
          <a href="#temas">Temas</a>
          <a href="#dados">Dados</a>
          <a href="#conscientizacao">Conscientização</a>
        </nav>
      </div>
      <span className="faixa"></span>
    </header>
  );
}

function Inicio() {
  return (
    <section className="inicio" id="inicio">
      <div className="inicio-conteudo">
        <span className="etiqueta">EDUCAÇÃO • RESPEITO • IGUALDADE</span>
        <h1>O preconceito não pode ter voz. A igualdade precisa ter.</h1>
        <p>
          Racismo, transfobia, misoginia e homofobia são problemas
          que afetam milhares de pessoas diariamente. Conhecer e combater esses
          preconceitos é o primeiro passo para construir uma sociedade justa.
        </p>
        <a href="#representantes" className="botao">Conheça as vozes</a>
      </div>
      <div className="inicio-imagem">
        <img src={viniImg} alt="Vini Jr" />
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <span className="etiqueta">NOSSO OBJETIVO</span>
      <h2>Informação e representatividade para mudar o mundo.</h2>
      <p>
        Este projeto tem como objetivo conscientizar as pessoas sobre
        diferentes formas de preconceito presentes na sociedade. Damos visibilidade
        a personalidades que enfrentam e combatem o racismo, a transfobia, a misoginia
        e a homofobia na prática.
      </p>
      <div className="sobre-numeros">
        <div>
          <strong>04</strong>
          <span>Causas principais</span>
        </div>
        <div>
          <strong>01</strong>
          <span>Objetivo: igualdade</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Respeito à diversidade</span>
        </div>
      </div>
    </section>
  );
}

function Representantes() {
  const pessoas = [
    { nome: "Vini Jr.", causa: "Combate ao Racismo", cor: corRacismo, papel: "Jogador de futebol e uma das principais vozes globais na luta contra o racismo no esporte.", imagem: viniImg },
    { nome: "Muhammad Ali", causa: "Combate ao Racismo", cor: corRacismo, papel: "Lenda do boxe e ativista histórico pelos direitos civis e pela igualdade racial.", imagem: aliImg },
    { nome: "Malala Yousafzai", causa: "Combate à Misoginia", cor: corMisoginia, papel: "Ativista pelo direito das mulheres à educação e a mais jovem ganhadora do Prêmio Nobel da Paz.", imagem: malalaImg },
    { nome: "Marie Curie", causa: "Combate à Misoginia", cor: corMisoginia, papel: "Cientista pioneira na física e química que superou barreiras de gênero no meio acadêmico.", imagem: marieImg },
    { nome: "Maysa Massafera", causa: "Representatividade Trans", cor: corTransfobia, papel: "Influenciadora e apresentadora que tornou pública sua identidade como mulher trans e ajuda a dar visibilidade às pessoas trans.", imagem: erikaImg },
    { nome: "Gil do Vigor", causa: "Combate à Homofobia", cor: corHomofobia, papel: "Economista e comunicador que usa sua visibilidade para combater o preconceito e incentivar a educação.", imagem: gilImg },
    { nome: "Pabllo Vittar", causa: "Combate à Homofobia e Transfobia", cor: corHomofobia, papel: "Artista drag queen que leva a representatividade LGBTQIAPN+ para a música mundial.", imagem: pablloImg },
    { nome: "Seu Jorge", causa: "Combate ao Racismo", cor: corRacismo, papel: "Cantor e ator que valoriza a cultura negra e denuncia as desigualdades através da arte.", imagem: seujorgeImg }
  ];

  return (
    <section className="representantes" id="representantes">
      <div className="titulo-secao">
        <span className="etiqueta">VOZES E INSPIRAÇÕES</span>
        <h2>Pessoas que lutam contra a discriminação</h2>
        <p>Figuras públicas e históricas que usam suas trajetórias para promover a igualdade.</p>
      </div>
      <div className="container-cards">
        {pessoas.map((item, index) => (
          <article className="card-pessoa" key={index}>
            <div className="foto-container">
              <img src={item.imagem} alt={item.nome} />
            </div>
            <h3>{item.nome}</h3>
            <span className="causa-tag" style={{ color: item.cor, borderColor: item.cor }}>
              {item.causa}
            </span>
            <p>{item.papel}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Temas() {
  const listaTemas = [
    { titulo: "Racismo", cor: corRacismo, desc: "Discriminação ou preconceito contra pessoas por causa de sua cor, raça ou origem étnica. Manifesta-se em atitudes cotidianas e estruturas sociais." },
    { titulo: "Transfobia", cor: corTransfobia, desc: "Rejeição, preconceito ou violência contra pessoas trans e travestis por conta de sua identidade de gênero." },
    { titulo: "Misoginia", cor: corMisoginia, desc: "Ódio, desprezo ou preconceito contra mulheres, manifestado na desvalorização social, violência e desigualdade." },
    { titulo: "Homofobia", cor: corHomofobia, desc: "Discriminação, aversão ou violência contra pessoas por sua orientação sexual ou afetiva." }
  ];

  return (
    <section className="temas" id="temas">
      <div className="titulo-secao">
        <span className="etiqueta">CONHEÇA OS PROBLEMAS</span>
        <h2>Quatro formas de preconceito</h2>
        <p>Entender cada uma dessas lutas é fundamental para combater a injustiça.</p>
      </div>
      <div className="container-cards">
        {listaTemas.map((t, i) => (
          <article className="card-tema" key={i} style={{ borderTop: `6px solid ${t.cor}` }}>
            <h3 style={{ color: t.cor }}>{t.titulo}</h3>
            <p>{t.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Estatisticas() {
  const dados = [
    { numero: "76,5%", titulo: "Violência contra pessoas negras", descricao: "Percentual das vítimas de homicídio no Brasil que eram pessoas negras, segundo dados do Atlas da Violência." },
    { numero: "5.575", titulo: "Notificações contra pessoas trans", descricao: "Casos de violência registrados contra pessoas transexuais e travestis em um único ano." },
    { numero: "66,7%", titulo: "Diferença em casos letais", descricao: "Taxa de violência letal maior contra mulheres negras quando comparada a mulheres não negras." },
    { numero: "8.028", titulo: "Casos registrados de violência LGBTQIAPN+", descricao: "Ocorrências registradas referentes a denúncias de preconceito e violência motivados por orientação ou gênero." }
  ];

  return (
    <section className="dados" id="dados">
      <div className="titulo-secao">
        <span className="etiqueta">A REALIDADE EM NÚMEROS</span>
        <h2>Estatísticas para conscientização</h2>
        <p>Os números refletem a necessidade urgente de agir contra a discriminação.</p>
      </div>
      <div className="dados-container">
        {dados.map((dado, index) => (
          <article className="dado-card" key={index}>
            <h3>{dado.numero}</h3>
            <h4>{dado.titulo}</h4>
            <p>{dado.descricao}</p>
          </article>
        ))}
      </div>
      <p className="fonte">
        Fontes: Relatórios de segurança pública, pesquisas oficiais e Atlas da Violência. Os dados reforçam a urgência do combate à desigualdade.
      </p>
    </section>
  );
}

function Conscientizacao() {
  const atitudes = [
    "Respeitar a identidade e o nome social de cada indivíduo.",
    "Não propagar piadas, comentários ou atitudes preconceituosas.",
    "Apoiar e dar espaço para vozes de grupos marginalizados.",
    "Denunciar casos de agressão, assédio e discriminação.",
    "Buscar informação continuamente para desconstruir preconceitos.",
    "Posicionar-se ativamente ao presenciar atos de injustiça."
  ];

  return (
    <section className="conscientizacao" id="conscientizacao">
      <div className="conscientizacao-conteudo">
        <span className="etiqueta">FAÇA A DIFERENÇA</span>
        <h2>Como agir no dia a dia?</h2>
        <p>A mudança social exige atitudes concretas. Pequenos hábitos diários ajudam a criar um ambiente seguro para todos.</p>
        <div className="lista-atitudes">
          {atitudes.map((atitude, index) => (
            <div className="atitude" key={index}>
              <span>{index + 1}</span>
              <p>{atitude}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FraseFinal() {
  return (
    <section className="frase-final">
      <span>REFLEXÃO</span>
      <h2>A diversidade enriquece o mundo. O preconceito o limita.</h2>
      <p>Construir o futuro exige respeito, empatia e inclusão.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h2>VOZES<span>.</span></h2>
      <p>Educação, conscientização e respeito à diversidade.</p>
      <p className="footer-final">Projeto de conscientização contra o preconceito.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Representantes />
      <Temas />
      <Estatisticas />
      <Conscientizacao />
      <FraseFinal />
      <Footer />
    </>
  );
}