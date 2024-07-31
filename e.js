document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', description: 'Description for product 1', price: 29.99, img: 'product1.jpg' },
        { id: 2, name: 'Product 2', description: 'Description for product 2', price: 49.99, img: 'product2.jpg' },
        { id: 3, name: 'Product 3', description: 'Description for product 3', price: 19.99, img: 'product3.jpg' },
        { id: 4, name: 'Product 4', description: 'Description for product 4', price: 99.99, img: 'product4.jpg' }
    ];

    const cart = [];

    const productList = document.querySelector('.product-list');
    const cartList = document.querySelector('.cart-list');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    function displayProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
            productList.appendChild(productDiv);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = '';
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${product.name} - $${product.price.toFixed(2)}</p>
            `;
            cartList.appendChild(cartItem);
        });

        const total = cart.reduce((sum, product) => sum + product.price, 0);
        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
    }

    displayProducts();
});
