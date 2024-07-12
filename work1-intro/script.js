const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('.menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('op-menu');
    menu.classList.toggle('open');
}