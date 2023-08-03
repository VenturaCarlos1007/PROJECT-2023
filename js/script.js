// Función para cargar los productos desde un API ficticio
function fetchProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = [
          { id: 1, name: 'Producto 1', price: 19.99 },
          { id: 2, name: 'Producto 2', price: 29.99 },
          { id: 3, name: 'Producto 3', price: 39.99 },
        ];
        resolve(products);
      }, 1000);
    });
  }
  
  // Función para mostrar los productos en la sección de productos
  function displayProducts(products) {
    const productsSection = document.querySelector('.products');
    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
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
    displayProducts(products);
  
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
