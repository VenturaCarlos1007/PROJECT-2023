const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('navMenu');
const categoryMenu = document.querySelector('.category-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    categoryMenu.classList.toggle('show'); 
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;

        const alertBox = document.createElement('div');
        alertBox.classList.add('alert-box');
        alertBox.textContent = `¡${productName} ha sido agregado al carrito!`;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 3000);
    });
});

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const categoryMenu = document.getElementById('categoryMenu');

    navMenu.classList.toggle('show');
    categoryMenu.classList.toggle('show'); 
}
