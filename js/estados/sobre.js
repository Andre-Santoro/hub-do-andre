export function carregarSobre() {
  const bloco = document.querySelector('.fade-container');

  bloco.classList.add('fade-out');

  setTimeout(() => {
    document.documentElement.setAttribute("data-contexto", "sobre_mim");

    document.querySelector('.titulo_categoria').textContent = "Sobre mim";
    document.querySelector('.texto_categoria').innerHTML = ` 
                <div class="foto_github">
                <img src="https://github.com/Andre-Santoro.png" alt="Foto de perfil" class="foto_perfil">
                </div>

                Sou desenvolvedor de software com foco em criar aplicações web robustas e de alta qualidade. <br>Tenho especialização em Java com o framework Spring, além de experiência no uso de ferramentas como Docker e Git para garantir um fluxo de trabalho eficiente e escalável.
                <br><br>
                Busco crescer profissionalmente entregando soluções que agreguem ao dia-a-dia das pessoas e contribuam para o sucesso das equipes em que atuo, sempre com atenção à qualidade, intuitividade e descrição ao consumidor e boas práticas de desenvolvimento.
                <br><br>
                Confira meus projetos que realizei no meu Github: <a href="https://github.com/Andre-Santoro" rel=”noopener” target="_blank">Github</a>
                <br><br>
                Conecte e troque mensagem comigo no meu Linkedin: <a href="https://www.linkedin.com/in/andre-santoro-7999b02b6/" rel=”noopener” target="_blank">Linkedin</a>

                `;
    bloco.classList.remove('fade-out');
  }, 300);
}