document.addEventListener('DOMContentLoaded', function () {
    const categories = document.getElementById('categories');
    const products = document.getElementById('products');
    const productInfo = document.getElementById('product-info');

    categories.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const category = event.target.dataset.category;
            products.innerHTML = '';
            const categoryProducts = getProductsByCategory(category);
            categoryProducts.forEach(product => {
                const li = document.createElement('li');
                li.textContent = product.name;
                li.addEventListener('click', function () {
                    showProductInfo(product);
                });
                products.appendChild(li);
            });
        }
    });

    function showProductInfo(product) {
        productInfo.innerHTML = `<h2>${product.name}</h2>
                                 <p>$ ${product.price}</p>
                                 <p>${product.description}</p>
                                 <button id="buy-btn">Buy</button>`;
        const buyBtn = document.getElementById('buy-btn');
        buyBtn.addEventListener('click', function () {
            alert('Product purchased');
            productInfo.innerHTML = '';
            products.innerHTML = '';
        });
    }

    function getProductsByCategory(category) {
        const products = [
            { name: 'Phone', price: 100, category: 'electronics', description: 'Modern smartphone.' },
            { name: 'Computer', price: 500, category: 'electronics', description: 'Powerful computer.' },
            { name: 'Headphones', price: 50, category: 'electronics', description: 'Quality headphones.' },
            { name: 'T-shirt', price: 20, category: 'clothing', description: 'Classic t-shirt.' },
            { name: 'Jeans', price: 30, category: 'clothing', description: 'Stylish jeans.' },
            { name: 'Jacket', price: 70, category: 'clothing', description: 'Warm jacket.' },
            { name: 'Book', price: 15, category: 'books', description: 'Exciting book.' },
            { name: 'Magazine', price: 5, category: 'books', description: 'Popular magazine.' },
            { name: 'Audiobook', price: 25, category: 'books', description: 'Captivating audiobook.' }
        ];

        return products.filter(product => product.category === category).slice(0, 3);
    }
});
