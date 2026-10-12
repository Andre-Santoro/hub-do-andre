export function configurarProjetos() {
  const grade = document.querySelector('.grid_habilidades');

  if (!grade) {
    return;
  }

  const cartoes = [...grade.querySelectorAll('.card_habilidade')];

  cartoes.forEach((cartao, indice) => {
    const detalhes = cartao.querySelector('.card_detalhes');
    const botao = cartao.querySelector('.card_botao');

    if (!detalhes || !botao) {
      throw new Error('Cada card de projeto precisa de uma seção de detalhes e um botão.');
    }

    const detalhesId = `detalhes-projeto-${indice + 1}`;
    detalhes.id = detalhesId;
    detalhes.hidden = true;
    detalhes.setAttribute('aria-label', `Detalhes de ${cartao.querySelector('.card_titulo')?.textContent.trim() || 'projeto'}`);

    botao.type = 'button';
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-controls', detalhesId);
  });

  grade.addEventListener('click', evento => {
    const botao = evento.target.closest('.card_botao');

    if (!botao || !grade.contains(botao)) {
      return;
    }

    const cartao = botao.closest('.card_habilidade');
    const detalhes = cartao.querySelector('.card_detalhes');
    const expandido = cartao.classList.contains('card_habilidade--expandido');

    if (expandido) {
      cartao.classList.remove('card_habilidade--expandido');
      grade.classList.remove('grid_habilidades--expandido');
      detalhes.hidden = true;
      botao.textContent = 'Ver detalhes';
      botao.setAttribute('aria-expanded', 'false');

      for (const outroCartao of cartoes) {
        outroCartao.hidden = false;
      }

      return;
    }

    for (const outroCartao of cartoes) {
      outroCartao.hidden = outroCartao !== cartao;
    }

    cartao.classList.add('card_habilidade--expandido');
    grade.classList.add('grid_habilidades--expandido');
    detalhes.hidden = false;
    botao.setAttribute('aria-expanded', 'true');
    botao.textContent = 'Exibir outros projetos';
  });
}
