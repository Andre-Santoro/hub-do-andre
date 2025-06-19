import { carregarPagina } from './estados/principal.js';
import { carregarSobre } from './estados/sobre.js';
import { carregarProjetos } from './estados/habilidades.js';

export function configurarNavegacao() {
  const botoes = document.querySelectorAll('.botao_cabecalho');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      botoes.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');

      const classe = botao.classList;
      if (classe.contains('botao_pagina_principal')) carregarPagina();
      else if (classe.contains('botao_sobre_mim')) carregarSobre();
      else if (classe.contains('botao_projetos')) carregarProjetos();
    });
  });

  // Inicializa com a página principal
  carregarPagina();
}