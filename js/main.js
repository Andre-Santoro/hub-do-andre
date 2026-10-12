import { renderizarCabecalho } from './componentes/cabecalho.js';
import { configurarModo } from './tema.js';
import { paginasPermitidas } from './carregamento.js';
import { configurarProjetos } from './projetos.js';


window.addEventListener('DOMContentLoaded', () => {
    renderizarCabecalho();
    configurarModo();
    configurarProjetos();

    document.addEventListener('click', evento => {
        const link = evento.target.closest('a.botao_navegacao');

        if (
            !link ||
            evento.button !== 0 ||
            evento.metaKey ||
            evento.ctrlKey ||
            evento.shiftKey ||
            evento.altKey
        ) {
            return;
        }

        const destino = new URL(link.href);

        if (
            destino.origin !== window.location.origin ||
            !paginasPermitidas.has(destino.pathname) ||
            destino.href === window.location.href
        ) {
            return;
        }

        evento.preventDefault();
        const paginaCarregamento = new URL('./html/carregamento.html', window.location.origin);
        paginaCarregamento.searchParams.set('destino', destino.pathname);
        window.location.assign(paginaCarregamento.href);
    });
});