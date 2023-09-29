const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const login = document.querySelector('.login');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    login.classList.toggle('ativo');
});

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth <= 785) {
    login.style.display = 'none'; // Oculta o botão "Log In" em telas menores quando a página carrega
}

window.addEventListener('resize', () => {
    const newViewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (newViewportWidth <= 785 && !menu.classList.contains('ativo')) {
        login.style.display = 'none'; // Oculta o botão "Log In" em telas menores quando o menu não está ativo
    } else {
        login.style.display = 'inline-block'; // Mostra o botão "Log In" em telas maiores ou quando o menu está ativo
    }
});