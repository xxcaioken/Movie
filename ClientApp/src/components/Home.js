import React, { Component } from 'react';
import '../styles/home.css'
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <section>
            <h1>A FREIRA 2</h1>
            <h2>A FREIRA 2</h2>
            <div class="contianter-circulo">
                <div class='circulo'></div>
                <div class='quadrado-01'></div>
                <div class='quadrado-02'></div>
                <div class='quadrado-03'></div>
                <div class='quadrado-04'></div>
            </div>
            <div class="paragrafo">
                <p4>FILME</p4>
                <p5>2023</p5>
            </div>
            <div class="container-play">
                <h3> ASSISTIR </h3>
                <div class='borda-new'></div>
                <p1> NOVO </p1>
                <div class='borda-classificacao'></div>
                <p2> 16+</p2>
                <nav class="play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="127" height="126" viewBox="0 0 127 126" fill="none">
                        <ellipse cx="63.5" cy="63" rx="63.5" ry="63" fill="#363636" />
                        <path d="M88 62.5L51.25 81.9856L51.25 43.0144L88 62.5Z" fill="white" />
                    </svg>
                </nav>
                <div class="borda-01">
                    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="143" viewBox="0 0 166 143" fill="none">
                        <ellipse cx="83" cy="71.5" rx="83" ry="71.5" fill="#A5A5A5" fill-opacity="0.51" />
                    </svg>
                </div>
                <div class="borda-02">
                    <svg xmlns="http://www.w3.org/2000/svg" width="212" height="178" viewBox="0 0 212 178" fill="none">
                        <ellipse cx="106" cy="89" rx="106" ry="89" fill="#BABABA" fill-opacity="0.28" />
                    </svg>
                </div>
            </div>
            <div class="botoes">
                <button id="bt1">Biografia</button>
                <button id="bt2">Elenco</button>
                <button id="bt3">Hist�ria</button>
            </div>
            <div class="footer">
                <p6> TRAILER </p6>
                <video width="300" controls loop autoplay poster="video.jpg"> </video>
                <h4>NOTA</h4>
                <h5>POPULARIDADE</h5>
                <div class="borda-nota"> </div>
                <p7> 6.6 </p7>
                <div class="borda-pop"> </div>
                <p8>1</p8>
            </div>


        </section>

    );
  }
}
