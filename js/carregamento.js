export const paginasPermitidas = new Set([
  '/html/pagina-inicial.html',
  '/html/sobre-mim.html',
  '/html/projetos.html',
  '/html/processo-criativo.html',
  '/html/contato.html'
]);

const tempoMinimoDeCarregamento = 1500;
const tempoLimiteDeCarregamento = 15000;

const erro = document.querySelector('#erro-carregamento');
const botaoTentarNovamente = document.querySelector('#tentar-novamente');
const telaCarregamento = document.querySelector('.tela-carregamento');
const parametros = new URLSearchParams(window.location.search);
const caminhoDestino = parametros.get('destino');

async function carregarDestino() {
  if (!caminhoDestino || !paginasPermitidas.has(caminhoDestino)) {
    throw new Error('O endereço da página solicitada é inválido.');
  }

  const destino = new URL(caminhoDestino, window.location.origin);
  const controlador = new AbortController();
  const temporizador = window.setTimeout(
    () => controlador.abort(),
    tempoLimiteDeCarregamento
  );
  const inicio = performance.now();

  try {
    const resposta = await fetch(destino.href, {
      signal: controlador.signal,
      headers: { Accept: 'text/html' },
    });

    if (!resposta.ok) {
      throw new Error(`O servidor respondeu com o status ${resposta.status}.`);
    }

    if (!resposta.headers.get('content-type')?.includes('text/html')) {
      throw new Error('O endereço solicitado não retornou uma página HTML.');
    }

    const html = await resposta.text();
    const pagina = new DOMParser().parseFromString(html, 'text/html');

    if (!pagina.querySelector('main') || !pagina.title) {
      throw new Error('A página recebida está incompleta.');
    }

    const tempoRestante = tempoMinimoDeCarregamento - (performance.now() - inicio);
    if (tempoRestante > 0) {
      await new Promise(resolve => window.setTimeout(resolve, tempoRestante));
    }

    window.location.replace(destino.href);
  } finally {
    window.clearTimeout(temporizador);
  }
}

function mostrarErro(motivo) {
  console.error('Falha ao carregar a página de destino:', motivo);
  telaCarregamento.setAttribute('aria-busy', 'false');
  erro.textContent = motivo instanceof Error
    ? `${motivo.message} Verifique sua conexão e tente novamente.`
    : 'Verifique sua conexão e tente novamente.';
  erro.hidden = false;
  botaoTentarNovamente.hidden = false;
  botaoTentarNovamente.addEventListener('click', iniciarCarregamento, { once: true });
}

function iniciarCarregamento() {
  telaCarregamento.setAttribute('aria-busy', 'true');
  erro.hidden = true;
  botaoTentarNovamente.hidden = true;

  carregarDestino().catch(mostrarErro);
}

if (telaCarregamento) {
  iniciarCarregamento();
}
