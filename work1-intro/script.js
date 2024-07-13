toggleHam = (x) => {
    x.classList.toggle("change");

    let navMenu = document.querySelector('#navMenu');
    if (navMenu.className === 'menu') {
        navMenu.className += ' menu-active';
    } else {
        navMenu.className = 'menu';
    }
}