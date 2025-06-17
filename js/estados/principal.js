export function carregarPagina() {
  const bloco = document.querySelector('.fade-container');

  bloco.classList.add('fade-out');

  setTimeout(() => {
    document.documentElement.setAttribute("data-contexto", "pagina_principal");

    document.querySelector('.titulo_categoria').textContent = "Página Inicial";
    document.querySelector('.texto_categoria').innerHTML = `
        Seja muito bem-vindo ao meu Hub Pessoal!
        <br><br>
        Neste espaço, compartilho minha trajetória como desenvolvedor de software: meus aprendizados, experiências e projetos que marcaram minha evolução na área da tecnologia.<br>
        Cada parte deste site foi pensada para mostrar não apenas o que sou capaz de construir, mas também o quanto aprendi em cada passo da jornada. 
        <br><br>
        Explore à vontade, conheça meu trabalho e sinta-se convidado a fazer parte dessa caminhada.
        `;
    bloco.classList.remove('fade-out');
  }, 300);
}