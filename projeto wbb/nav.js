const menuIcon = document.getElementById('menu-icon');
const menuLinks = document.getElementById('menu-links');

// Alternar exibição do menu e animação do ícone
menuIcon.addEventListener('click', () => {
    menuLinks.classList.toggle('show'); // Mostra/esconde o menu
    menuIcon.classList.toggle('open'); // Altera o ícone do hambúrguer
});
