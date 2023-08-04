// Función para cargar los productos desde un API ficticio
function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        { id: 1, name: 'Producto 1', price: 19.99, category: 'tv-video' },
        { id: 2, name: 'Producto 2', price: 19.99, category: 'audio' },
        { id: 3, name: 'Producto 3', price: 19.99, category: 'tv-video' },
        { id: 4, name: 'Producto 4', price: 19.99, category: 'energia' },
        { id: 5, name: 'Producto 5', price: 19.99, category: 'cables' },
        { id: 6, name: 'Producto 6', price: 19.99, category: 'tv-video' },
        { id: 7, name: 'Producto 7', price: 19.99, category: 'audio' },
        { id: 8, name: 'Producto 8', price: 19.99, category: 'tv-video' },
        { id: 9, name: 'Producto 9', price: 19.99, category: 'energia' },
        { id: 10, name: 'Producto 10', price: 19.99, category: 'cables' },
        { id: 11, name: 'Producto 11', price: 19.99, category: 'energia' },
        { id: 12, name: 'Producto 12', price: 19.99, category: 'cables' },
        // Agrega más productos y sus categorías aquí
      ];

      // Creamos un objeto para agrupar los productos por categoría
      const categorizedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {});

      resolve(categorizedProducts);
    }, 1000);
  });
}

// Función para mostrar los productos en la sección de productos
function displayProducts(products) {
  const productsSection = document.querySelector('.products');
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('products-card');
    productCard.innerHTML = `
      <img src="catalog/category/Producto${product.id}.jpg" alt="Producto ${product.id}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price.toFixed(2)}</p>
      <button class="add-to-cart-btn" data-id="${product.id}">Agregar al carrito</button>
    `;
    productsSection.appendChild(productCard);
  });
}

// Función para manejar la suscripción al boletín
function handleSubscription(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  alert(`¡Gracias por suscribirte! Te enviaremos noticias a ${email}.`);
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', async () => {
  // Cargar y mostrar los productos
  const products = await fetchProducts();
  displayProducts(products['tv-video']); // Muestra los productos de la categoría 'tv-video'
  displayProducts(products['audio']); // Muestra los productos de la categoría 'audio'
  displayProducts(products['cables']);
  displayProducts(products['energia']);
  displayProducts(products['seguridad']);
  // Agrega más llamadas a displayProducts para mostrar los productos de otras categorías

  // Manejar el evento de suscripción
  const newsletterForm = document.querySelector('.newsletter form');
  newsletterForm.addEventListener('submit', handleSubscription);
});

// Obtener el elemento select de categorías
const categorySelect = document.querySelector('.category-dropdown');

// Obtener el contenedor de productos
const productContainer = document.getElementById('product-container');

// Obtener todos los productos
const products = document.querySelectorAll('.product-card');

// Escuchar el evento change del select de categorías
categorySelect.addEventListener('change', (event) => {
  // Obtener el valor de la opción seleccionada
  const selectedCategory = event.target.value;

  // Mostrar todos los productos inicialmente
  products.forEach((product) => {
    product.style.display = 'block';
  });

  // Filtrar los productos según la categoría seleccionada
  if (selectedCategory !== 'todas') {
    products.forEach((product) => {
      if (!product.classList.contains(selectedCategory)) {
        product.style.display = 'none';
      }
    });
  }

  // Mostrar el contenedor de productos
  productContainer.classList.add('show');
});

// Obtener el contenedor del carrusel
const sliderContainer = document.querySelector('.slider-container');
// Obtener la barra de desplazamiento
const sliderBar = document.querySelector('.slider-bar');

let isMouseDown = false;

// Agregar evento para detectar el clic del mouse en la barra de desplazamiento
sliderBar.addEventListener('mousedown', () => {
  isMouseDown = true;
  sliderBar.style.background = '#49a078';
});

// Agregar evento para detectar el fin del clic del mouse
document.addEventListener('mouseup', () => {
  isMouseDown = false;
  sliderBar.style.background = '#fff';
});

// Agregar evento para detectar el movimiento del mouse dentro del carrusel
sliderContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  const x = e.pageX - sliderContainer.offsetLeft;
  const percentage = (x / sliderContainer.clientWidth) * 100;
  sliderContainer.style.animation = 'none';
  sliderContainer.style.transform = `translateX(-${percentage}%)`;
});

// Restaurar animación y desplazamiento automático cuando el mouse sale del carrusel
sliderContainer.addEventListener('mouseleave', () => {
  sliderContainer.style.animation = 'sliderAnimation 15s linear infinite';
  sliderContainer.style.transform = 'translateX(0)';
});

// Restaurar animación y desplazamiento automático cuando se suelta el mouse
document.addEventListener('mouseup', () => {
  if (!isMouseDown) {
    sliderContainer.style.animation = 'sliderAnimation 15s linear infinite';
    sliderContainer.style.transform = 'translateX(0)';
  }
});
