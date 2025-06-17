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
      <i class="devicon-java-plain"></i>
      <p>Java</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-spring-plain"></i>
      <p>Spring</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-python-plain"></i>
      <p>Python</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-django-plain"></i>
      <p>Django</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-csharp-plain"></i>
      <p>C#</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-dotnetcore-plain"></i>
      <p>.NET Core</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-postgresql-plain"></i>
      <p>SQL - PostgreSQL</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-mongodb-plain"></i>
      <p>NoSQL - MongoDB</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-docker-plain"></i>
      <p>Docker</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-git-plain"></i>

      <i class="devicon-github-original"></i>
      <p>Git & Github</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-html5-plain"></i>
      <i class="devicon-css3-plain"></i>
      <p>HTML & CSS</p>
    </div>
    <div class="card_habilidade">
      <i class="devicon-javascript-plain"></i>
      <p>Javascript</p>
    </div>
  </div>
  `;
        bloco.classList.remove('fade-out');
    }, 300);
}