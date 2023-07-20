const search = document.querySelector('.search');
const magnifier = document.querySelector('.magnifier');
const input = document.querySelector('.input');

magnifier.addEventListener('click', () => {
    search.classList.toggle('active');
})