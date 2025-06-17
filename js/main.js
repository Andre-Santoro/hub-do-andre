import { configurarNavegacao } from './navegacao.js';
import { carregarPagina } from './estados/principal.js';
import { carregarSobre } from './estados/sobre.js';
import { carregarProjetos } from './estados/projetos.js';
import { configurarModo } from './tema.js';

window.addEventListener('DOMContentLoaded', () => {
    configurarModo();
    configurarNavegacao();
});

document.querySelector('.claro').addEventListener('click', () => configurarModo('escuro'));
document.querySelector('.escuro').addEventListener('click', () => configurarModo('claro'));

export function alterarData(data) {
    switch (data) {
        case 'pagina_principal':
            carregarPagina();
            break;
        case 'sobre_mim':
            carregarSobre();
            break;
        case 'projetos':
            carregarProjetos();
            break;
    }
}

configurarNavegacao();