export function carregarProjetos() {
    const bloco = document.querySelector('.fade-container');

    bloco.classList.add('fade-out');

    setTimeout(() => {
        document.documentElement.setAttribute("data-contexto", "projetos");

        document.querySelector('.titulo_categoria').textContent = "Habilidades e competências";
        document.querySelector('.texto_categoria').innerHTML = `
        Aqui está uma lista de linguagens, frameworks, ferramentas e competências que aprendi e desenvolvi ao decorrer de minha formação acadêmica.

    <div class="grid_habilidades">
    <div class="card_habilidade">
      <i class="devicon-java-plain colored"></i>
      <p>Java</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-spring-plain colored"></i>
      <p>Spring</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-javascript-plain colored"></i>
      <p>Javascript</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-react-plain colored"></i>
      <p>React</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-csharp-plain colored"></i>
      <p>C#</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-dotnetcore-plain colored"></i>
      <p>.NET Core</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-postgresql-plain colored"></i>
      <p>SQL - PostgreSQL</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-mongodb-plain colored"></i>
      <p>NoSQL - MongoDB</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-docker-plain colored"></i>
      <p>Docker</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-git-plain colored"></i>

      <i class="devicon-github-original colored"></i>
      <p>Git & Github</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-html5-plain colored"></i>
      <i class="devicon-css3-plain colored"></i>
      <p>HTML & CSS</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-python-plain colored"></i>
      <p>Python</p>
    </div>
  </div>
  `;
        bloco.classList.remove('fade-out');
    }, 300);
}