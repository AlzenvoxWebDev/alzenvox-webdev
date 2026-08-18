const botaoMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

if (botaoMenu && menu) {
    const fecharMenu = () => {
        menu.classList.remove('menu-aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.setAttribute('aria-label', 'Abrir menu');
    };

    botaoMenu.addEventListener('click', () => {
        const aberto = menu.classList.toggle('menu-aberto');
        botaoMenu.setAttribute('aria-expanded', String(aberto));
        botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', fecharMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            fecharMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 850) {
            fecharMenu();
        }
    });
}
