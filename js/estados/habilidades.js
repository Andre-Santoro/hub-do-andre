export function carregarProjetos() {
    const bloco = document.querySelector('.fade-container');
    bloco.classList.add('fade-out');

    const listaHabilidades = ["java", "spring", 
      "javascript", "react", 
      'postgresql', 'mongodb', 
      'docker', 'git', 'github',
      'html5', 'css3', 
      'python',
      'linux',
      'tailwindcss']
    


    setTimeout(() => {
        document.documentElement.setAttribute("data-contexto", "projetos");

        document.querySelector('.titulo_categoria').textContent = "Habilidades e competências";

    let listaHabilidadesHtml = `Aqui está uma lista de linguagens, frameworks, ferramentas, competências e habilidades que aprendi e desenvolvi ao decorrer 
    de minha formação acadêmica.
    <div class="grid_habilidades">
    `;

    for (let habilidade of listaHabilidades) {
        listaHabilidadesHtml+= `
            <div class="card_habilidade">
              <i class="devicon-${habilidade}-plain colored"></i>
              <p>${habilidade.charAt(0).toUpperCase() + habilidade.slice(1)}</p>
            </div>
        `
    };
            
    listaHabilidadesHtml+='</div>';

   document.querySelector('.texto_categoria').innerHTML = listaHabilidadesHtml;
        bloco.classList.remove('fade-out');
    }, 300);
}
