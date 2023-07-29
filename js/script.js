// JavaScript para mostrar/ocultar el menú de categorías al hacer clic en el ícono de hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('navMenu');
const categoryMenu = document.querySelector('.category-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    categoryMenu.classList.toggle('show'); // Agregamos esta línea para mostrar/ocultar el menú de categorías
});

// JavaScript para agregar el producto al carrito y mostrar la alerta
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;

        // Agregar clase 'show' para mostrar la alerta con una transición
        const alertBox = document.createElement('div');
        alertBox.classList.add('alert-box');
        alertBox.textContent = `¡${productName} ha sido agregado al carrito!`;
        document.body.appendChild(alertBox);

        // Eliminar la alerta después de 3 segundos
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 3000);
    });
});

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const categoryMenu = document.getElementById('categoryMenu');

    navMenu.classList.toggle('show');
    categoryMenu.classList.toggle('show'); // Agregamos esta línea para mostrar/ocultar el menú de categorías
}
