
const html = document.querySelector('html')
const body = document.querySelector("body");

const botaoClaro = document.querySelector('.botao_escuro')
const botaoEscuro = document.querySelector('.botao_claro')

/*Navegador*/
const botaoPaginaPrincipal = document.querySelector('.botao_pagina_principal')
const botaoSobreMim = document.querySelector('.botao_sobre_mim')
const botaoProjetos = document.querySelector('.botao_projetos')
const botoesCabecalho = document.querySelectorAll('.botao_cabecalho')

const tituloCategoria = document.querySelector('.titulo_categoria')
const textoEsquerdo = document.querySelector('.texto_pagina_principal_1')
const textoDireito = document.querySelector('.texto_pagina_principal_2')
const textoSobreMim = document.querySelector('.texto_sobre_mim')
const textoProjetos = document.querySelector('.texto_projetos')
const barraAprendizado = document.querySelector('.progresso-container')
const blocoTexto = document.querySelector('.bloco_texto')

function alterarModo(modo) {
    html.setAttribute('modo', modo)
}

botaoClaro.addEventListener('click', () => {
    alterarModo('claro')
})

botaoEscuro.addEventListener('click', () => {
    alterarModo('escuro')
  })
  
botaoPaginaPrincipal.addEventListener('click', () => {
    alterarData('pagina_principal')
    botaoPaginaPrincipal.classList.add('ativo')
})

botaoSobreMim.addEventListener('click', () => {
    alterarData('sobre_mim')
    botaoSobreMim.classList.add('ativo')
})

botaoProjetos.addEventListener('click', () => {
    alterarData('projetos')
    botaoProjetos.classList.add('ativo')
})

function alterarData(data) {
    botoesCabecalho.forEach(function (botao) {
        botao.classList.remove('ativo');
    });
    html.setAttribute('data-contexto', data);

    switch (data) {
        case "pagina_principal":
            tituloCategoria.innerHTML = `Página principal`;
            textoEsquerdo.innerHTML = 
            `
                &emsp;Bem-vindo ao meu Hub pessoal!
                <br><br>
                &emsp;Aqui você encontrá minha jornada: meus aprendizados, experiências e projetos desenvolvidos.
                Este espaço mostra minha trajetória como desenvolvedor, onde compartilho não só o que fiz, mas o que aprendi.
                <br><br>
                &emsp;Sinta-se à vontade para explorar e conhecer meu trabalho!
            `;
            textoDireito.innerHTML = 
            `
                DESENVOLVEDOR DE SOFTWARE<br><br>AUTOMATIZADOR<br><br>DATA
            `;
            textoSobreMim.innerHTML = ``;
            textoProjetos.innerHTML = ``;
            barraAprendizado.style.display = "block"; // Mostrar a barra
            blocoTexto.style.padding = "3%"
            break;

        case "sobre_mim":
            tituloCategoria.innerHTML = `Sobre mim`;
            textoEsquerdo.innerHTML = ``;
            textoDireito.innerHTML = ``;
            textoSobreMim.innerHTML = 
            `
                Sou um desenvolvedor de software com foco em criar automações e fazer aprendizado de máquina.
                <br><br>
                Tenho experiência com linguagens como Python e JavaScript, além de trabalhar com bibls e bancos de dados relacionais e não-relacionais. Utilizo Git e GitHub no meu fluxo de trabalho e estou sempre explorando novas ferramentas e boas práticas para programar.
                <br><br>
                
                Tenho como meta profissional subir na carreira e fazendo aplicações que contribuam para as pessoas com suas funcionalidades e para o sucesso das equipes em que atuo.
                <br><br>
                <p style="font-size: 25px; color: palevioletred;">Segue abaixo meu currículo para download:</p>
                <br><br>
                <a href="../assets/curriculo.pdf" download class="botao-download">Baixar Currículo</a>
            `;
            textoProjetos.innerHTML = ``;
            barraAprendizado.style.display = "none"; // Esconder a barra
            blocoTexto.style.padding = "0%"
            break;

        case "projetos":
            tituloCategoria.innerHTML = `Projetos`;
            textoEsquerdo.innerHTML = ``;
            textoDireito.innerHTML = ``;
            textoSobreMim.innerHTML = ``;
            textoProjetos.innerHTML = 
            `
                Aqui estão alguns dos projetos que desenvolvi, com foco em resolver problemas ou por diversão ( como esta página! ). Cada um representa uma etapa da minha evolução como dev.
                <br><br>
                <a href="https://github.com/Andre-Santoro/mordomia" target="_blank" rel="noopener noreferrer" style="font-size: 2em;">MordomIA</a>
                <br><br>
                <a href="https://github.com/Andre-Santoro/hub-do-andre" target="_blank" rel="noopener noreferrer" style="font-size: 2em;">Hub pessoal</a>
                </p>
            `;
            barraAprendizado.style.display = "none"; // Esconder a barra
            blocoTexto.style.padding = "0%"
            break;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const barras = document.querySelectorAll('.nivel');
    barras.forEach(barra => {
      const largura = barra.style.width;
      barra.style.width = '0';
      setTimeout(() => {
        barra.style.width = largura;
      }, 200);
    });
  });