const siteRoot = new URL('../../', import.meta.url);

const paginas = [
  { nome: 'pagina-inicial', caminho: new URL('html/pagina-inicial.html', siteRoot).href, rotulo: 'Página Inicial', botao: 'botao_pagina_principal' },
  { nome: 'sobre-mim', caminho: new URL('html/sobre-mim.html', siteRoot).href, rotulo: 'Sobre mim', botao: 'botao_sobre_mim' },
  { nome: 'projetos', caminho: new URL('html/projetos.html', siteRoot).href, rotulo: 'Projetos', botao: 'botao_projetos' },
  { nome: 'processo-criativo', caminho: new URL('html/processo-criativo.html', siteRoot).href, rotulo: 'Processo Criativo', botao: 'botao_processo_criativo' },
  { nome: 'contato', caminho: new URL('html/contato.html', siteRoot).href, rotulo: 'Contato', botao: 'botao_contato'},
];

const cabecalho = document.getElementById('cabecalho');
const paginaAtual = paginas.find(pagina => document.body.classList.contains(pagina.nome));

export function renderizarCabecalho() {
  if (!cabecalho || !paginaAtual) {
    throw new Error('Não foi possível identificar o cabeçalho ou a página atual.');
  }

  cabecalho.innerHTML = `

    <nav class="navegacao" aria-label="Navegação principal">
      <img class="logo" src="${new URL('assets/favicon.png', siteRoot).href}" alt="Logo da página" />
      ${paginas.map(pagina => `
        <a
          class="botao botao_navegacao ${pagina.botao} ${pagina === paginaAtual ? ' ativo' : ''}"
          href="${pagina.caminho}"
          ${pagina === paginaAtual ? 'aria-current="page"' : ''}
        >${pagina.rotulo}</a>
      `).join('')}
      <a class="botao botao_download_cv" href="${new URL('assets/curriculo.pdf', siteRoot).href}" download="curriculo.pdf">Baixe meu CV</a>
    </nav>

    <ul class="tema" aria-label="Escolher tema">
      <li><button class="botao botao_tema escuro ativo" type="button" aria-label="Ativar tema escuro"></button></li>
      <li><button class="botao botao_tema claro" type="button" aria-label="Ativar tema claro"></button></li>
    </ul>
  `;
}
