export function configurarModo() {
  const html = document.documentElement;
  const botaoClaro = document.querySelector('.claro');
  const botaoEscuro = document.querySelector('.escuro');
  const modoSalvo = localStorage.getItem('modo');
  const modoInicial = modoSalvo === 'claro' || modoSalvo === 'escuro'
    ? modoSalvo
    : html.getAttribute('modo') === 'claro' ? 'claro' : 'escuro';

  html.setAttribute('modo', modoInicial);
  botaoClaro.classList.toggle('ativo', modoInicial === 'claro');
  botaoEscuro.classList.toggle('ativo', modoInicial === 'escuro');

  botaoClaro.addEventListener('click', () => {
    html.setAttribute('modo', 'claro');
    localStorage.setItem('modo', 'claro');
    botaoEscuro.classList.remove('ativo');
    botaoClaro.classList.add('ativo');
  });

  botaoEscuro.addEventListener('click', () => {
    html.setAttribute('modo', 'escuro');
    localStorage.setItem('modo', 'escuro');
    botaoClaro.classList.remove('ativo');
    botaoEscuro.classList.add('ativo');
  });
}