// // Array para armazenar os produtos
// const products = [
//     { id: 1, name: 'Produto 1', price: 10.00 },
//     { id: 2, name: 'Produto 2', price: 15.00 },
//     { id: 3, name: 'Produto 3', price: 20.00 },
// ];

// // Array para armazenar os itens no carrinho
// const cart = [];

// // Função para calcular o total do carrinho
// function calculateCartTotal() {
//     let total = 0;
//     for (const item of cart) {
//         total += item.price * item.quantity;
//     }
//     return total.toFixed(2);
// }

// // Função para atualizar a exibição do carrinho
// function updateCart() {
//     const cartList = document.getElementById('cart-list');
//     const cartTotal = document.getElementById('cart-total');
//     cartList.innerHTML = '';
//     cartTotal.textContent = `R$ ${calculateCartTotal()}`;
//     for (const item of cart) {
//         const li = document.createElement('li');
//         li.classList.add('cart-item');
//         li.innerHTML = `
//             <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity} = R$ ${(item.price * item.quantity).toFixed(2)}</span>
//             <button class="remove-from-cart" data-id="${item.id}">Remover</button>
//         `;
//         cartList.appendChild(li);
//     }
// }

// // Função para adicionar um produto ao carrinho
// function addToCart(productId) {
//     const product = products.find(p => p.id === productId);
//     if (product) {
//         const existingItem = cart.find(item => item.id === productId);
//         if (existingItem) {
//             existingItem.quantity++;
//         } else {
//             cart.push({ ...product, quantity: 1 });
//         }
//         updateCart();
//     }
// }

// // Event listener para adicionar um item ao carrinho
// document.getElementById('product-list').addEventListener('click', (e) => {
//     if (e.target.classList.contains('add-to-cart')) {
//         const productId = parseInt(e.target.parentElement.getAttribute('data-id'));
//         addToCart(productId);
//     }
// });

// // Event listener para remover um item do carrinho
// document.getElementById('cart-list').addEventListener('click', (e) => {
//     if (e.target.classList.contains('remove-from-cart')) {
//         const productId = parseInt(e.target.getAttribute('data-id'));
//         const index = cart.findIndex(item => item.id === productId);
//         if (index !== -1) {
//             if (cart[index].quantity > 1) {
//                 cart[index].quantity--;
//             } else {
//                 cart.splice(index, 1);
//             }
//             updateCart();
//         }
//     }
// });

// // Inicializar o carrinho
// updateCart();










// Array para armazenar os produtos
const products = [
    //Pizzas M (Meio a Meio)
    { id: 101, name: '1/2 Pizza Mussarela M', price: 5.00 },
    { id: 102, name: '1/2 Pizza Calabresa M', price: 5.00 },
    { id: 103, name: '1/2 Pizza Mista M', price: 5.00 },
    { id: 104, name: '1/2 Pizza Calamista M', price: 5.00 },
    { id: 105, name: '1/2 Pizza 3 Queijos M', price: 6.00 },
    { id: 106, name: '1/2 Pizza Frango M', price: 6.50 },
    { id: 107, name: '1/2 Pizza Margherita M', price: 7.50 },
    { id: 108, name: '1/2 Pizza Siciliana M', price: 7.50 },
    { id: 109, name: '1/2 Pizza Hot-Dog M', price: 7.50 },
    { id: 110, name: '1/2 Pizza Moda Casa M', price: 8.00 },
    { id: 111, name: '1/2 Pizza Chocolate M', price: 9.00 },
    { id: 112, name: '1/2 Pizza Carne de Sol M', price: 10.00 },

    //Pizzas G (Meio a Meio)
    { id: 151, name: '1/2 Pizza Mussarela G', price: 10.00 },
    { id: 152, name: '1/2 Pizza Calabresa G', price: 10.00 },
    { id: 153, name: '1/2 Pizza Mista G', price: 10.00 },
    { id: 154, name: '1/2 Pizza Calamista G', price: 10.00 },
    { id: 155, name: '1/2 Pizza 3 Queijos G', price: 12.00 },
    { id: 156, name: '1/2 Pizza Frango G', price: 13.00 },
    { id: 157, name: '1/2 Pizza Margherita G', price: 15.00 },
    { id: 158, name: '1/2 Pizza Siciliana G', price: 15.00 },
    { id: 159, name: '1/2 Pizza Hot-Dog G', price: 15.00 },
    { id: 160, name: '1/2 Pizza Moda Casa G', price: 16.00 },
    { id: 161, name: '1/2 Pizza Chocolate G', price: 18.00 },
    { id: 162, name: '1/2 Pizza Carne de Sol G', price: 20.00 },

    //Pizzas M (Inteiras)
    { id: 201, name: 'Pizza Mussarela M', price: 10.00 },
    { id: 202, name: 'Pizza Calabresa M', price: 10.00 },
    { id: 203, name: 'Pizza Mista M', price: 10.00 },
    { id: 204, name: 'Pizza Calamista M', price: 10.00 },
    { id: 205, name: 'Pizza 3 Queijos M', price: 12.00 },
    { id: 206, name: 'Pizza Frango M', price: 13.00 },
    { id: 207, name: 'Pizza Margherita M', price: 15.00 },
    { id: 208, name: 'Pizza Siciliana M', price: 15.00 },
    { id: 209, name: 'Pizza Hot-Dog M', price: 15.00 },
    { id: 210, name: 'Pizza Moda Casa M', price: 16.00 },
    { id: 211, name: 'Pizza Chocolate M', price: 18.00 },
    { id: 212, name: 'Pizza Carne de Sol M', price: 20.00 },

    //Pizzas G (Inteiras)
    { id: 251, name: 'Pizza Mussarela G', price: 20.00 },
    { id: 252, name: 'Pizza Calabresa G', price: 20.00 },
    { id: 253, name: 'Pizza Mista G', price: 20.00 },
    { id: 254, name: 'Pizza Calamista G', price: 20.00 },
    { id: 255, name: 'Pizza 3 Queijos G', price: 24.00 },
    { id: 256, name: 'Pizza Frango G', price: 26.00 },
    { id: 257, name: 'Pizza Margherita G', price: 30.00 },
    { id: 258, name: 'Pizza Siciliana G', price: 30.00 },
    { id: 259, name: 'Pizza Hot-Dog G', price: 30.00 },
    { id: 260, name: 'Pizza Moda Casa G', price: 32.00 },
    { id: 261, name: 'Pizza Chocolate G', price: 36.00 },
    { id: 262, name: 'Pizza Carne de Sol G', price: 40.00 },

    //Calzones M
    { id: 301, name: 'Calzone Mussarela M', price: 10.00 },
    { id: 302, name: 'Calzone Calabresa M', price: 10.00 },
    { id: 303, name: 'Calzone Mista M', price: 10.00 },
    { id: 304, name: 'Calzone Calamista M', price: 10.00 },
    { id: 305, name: 'Calzone 3 Queijos M', price: 12.00 },
    { id: 306, name: 'Calzone Frango M', price: 13.00 },
    { id: 307, name: 'Calzone Margherita M', price: 15.00 },
    { id: 308, name: 'Calzone Siciliana M', price: 15.00 },
    { id: 309, name: 'Calzone Hot-Dog M', price: 15.00 },
    { id: 310, name: 'Calzone Moda Casa M', price: 16.00 },
    { id: 311, name: 'Calzone Chocolate M', price: 18.00 },
    { id: 312, name: 'Calzone Carne de Sol M', price: 20.00 },

    //Calzones G
    { id: 351, name: 'Calzone Mussarela G', price: 20.00 },
    { id: 352, name: 'Calzone Calabresa G', price: 20.00 },
    { id: 353, name: 'Calzone Mista G', price: 20.00 },
    { id: 354, name: 'Calzone Calamista G', price: 20.00 },
    { id: 355, name: 'Calzone 3 Queijos G', price: 24.00 },
    { id: 356, name: 'Calzone Frango G', price: 26.00 },
    { id: 357, name: 'Calzone Margherita G', price: 30.00 },
    { id: 358, name: 'Calzone Siciliana G', price: 30.00 },
    { id: 359, name: 'Calzone Hot-Dog G', price: 30.00 },
    { id: 360, name: 'Calzone Moda Casa G', price: 32.00 },
    { id: 361, name: 'Calzone Chocolate G', price: 36.00 },
    { id: 362, name: 'Calzone Carne de Sol G', price: 40.00 },

    //Salgados P
    { id: 401, name: 'Salgado Risole de Carne P', price: 1.00 },
    { id: 402, name: 'Salgado Coxinha de Frango P', price: 1.00 },
    { id: 403, name: 'Salgado Coxinha de Calabresa P', price: 1.00 },
    { id: 404, name: 'Salgado Enroladinho P', price: 1.00 },
    { id: 405, name: 'Salgado Bola Mista P', price: 1.00 },

    //Salgados G
    { id: 451, name: 'Salgado Risole de Carne G', price: 2.00 },
    { id: 452, name: 'Salgado Coxinha de Frango G', price: 2.00 },
    { id: 453, name: 'Salgado Coxinha de Calabresa G', price: 2.00 },
    { id: 454, name: 'Salgado Enroladinho G', price: 2.00 },
    { id: 455, name: 'Salgado Bola Mista G', price: 2.00 },

    //Bebidas
    { id: 501, name: 'Refrigerante Coca-Cola Lata 350ml', price: 6.00 },
    // { id: 502, name: 'Calamista', price: 15.00 },
    // { id: 503, name: 'Calabresa', price: 15.00 },
    // { id: 504, name: 'Mussarela', price: 15.00 },
    // { id: 505, name: '3 Queijos', price: 16.50 },
    // { id: 506, name: 'Frango', price: 16.50 },
    // { id: 507, name: 'Moda da Casa', price: 22.50 },

    // Adicione mais produtos conforme necessário
];

// Array para armazenar os itens no carrinho
const cart = [];

// Função para calcular o total do carrinho
function calculateCartTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }
    return total.toFixed(2);
}

// Função para atualizar a exibição do carrinho
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = '';
    cartTotal.textContent = `R$ ${calculateCartTotal()}`;
    for (const item of cart) {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity} = R$ ${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-from-cart" data-id="${item.id}">Remover</button>
        `;
        cartList.appendChild(li);
    }
}

// Função para adicionar um produto ao carrinho
function addToCart(productId, productListId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }
}

// Event listener para adicionar um item ao carrinho
document.getElementById('itens').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.parentElement.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Event listener para remover um item do carrinho
document.getElementById('cart-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1);
            }
            updateCart();
        }
    }
});

// Inicializar o carrinho
updateCart();
