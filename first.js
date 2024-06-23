// Example product data (in real app, this would come from a database)
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'product3.jpg' }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(card);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    // Example: In a real app, you'd add the product to a cart object or database
    alert(`Product ${productId} added to cart!`);
}

// Display products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);
