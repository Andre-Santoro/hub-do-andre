
const html = document.querySelector('html')
const body = document.querySelector("body");

const botaoClaro = document.querySelector('.botao_escuro')
const botaoEscuro = document.querySelector('.botao_claro')

/*Navegador*/
const botaoPaginaPrincipal = document.querySelector('.botao_pagina_principal')
const botaoSobreMim = document.querySelector('.botao_sobre_mim')
const botaoTrabalhos = document.querySelector('.botao_trabalhos')
const botoesCabecalho = document.querySelectorAll('.botao_cabecalho')

const tituloCategoria = document.querySelector('.titulo_categoria')
const textoEsquerdo = document.querySelector('.texto_primario')
const textoDireito = document.querySelector('.texto_secundario')


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

botaoTrabalhos.addEventListener('click', () => {
    alterarData('trabalhos')
    botaoTrabalhos.classList.add('ativo')
})

function alterarData(data) {
    botoesCabecalho.forEach(function (data){
        data.classList.remove('ativo')
    })
    html.setAttribute('data-contexto', data)
    switch (data) {
        case "pagina_principal":
            tituloCategoria.innerHTML = `
            Página principal
            `
            break
        case "sobre_mim":
            tituloCategoria.innerHTML = `
            Sobre mim
            `
            break;
        case "trabalhos":
            tituloCategoria.innerHTML = `
            Trabalhos
            `
            break
        default: 
            break;
    }
}
