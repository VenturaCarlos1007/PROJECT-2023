const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        alert(`¡${productName} ha sido agregado al carrito!`);
    });
});

Console.log("Hola Mundo");


Console.log("Hola");
