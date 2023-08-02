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

// Agrega la función para realizar la búsqueda
function searchProduct() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.toLowerCase();

    // Obtén todas las secciones de productos
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();

        // Oculta los productos que no coinciden con el término de búsqueda
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
