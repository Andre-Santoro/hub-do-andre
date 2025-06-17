export function configurarModo() {
  const html = document.documentElement;
  const botaoClaro = document.querySelector('.claro');
  const botaoEscuro = document.querySelector('.escuro');

  botaoClaro.addEventListener('click', () => {
    html.setAttribute('modo', 'claro');
  });

  botaoEscuro.addEventListener('click', () => {
    html.setAttribute('modo', 'escuro');
  });
}