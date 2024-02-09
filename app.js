const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuContainer = document.getElementById('menuContainer');

function toggleMenu() {
    if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
        menuContainer.style.display = 'block';
        closeMenu.style.display = 'block';
        openMenu.style.display = 'none';
    } else {
        menuContainer.style.display = 'none';
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block';
    }
}

openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});