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
    { id: 101, name: '1/2 Mista', price: 5.00 },
    { id: 102, name: '1/2 Calamista', price: 5.00 },
    { id: 103, name: '1/2 Calabresa', price: 5.00 },
    { id: 104, name: '1/2 Mussarela', price: 5.00 },
    { id: 105, name: '1/2 3 Queijos', price: 5.75 },
    { id: 106, name: '1/2 Frango', price: 5.75 },
    { id: 107, name: '1/2 Moda da Casa', price: 8.75 },

    //Pizzas G (Meio a Meio)
    { id: 151, name: '1/2 Mista', price: 5.00 },
    { id: 152, name: '1/2 Calamista', price: 5.00 },
    { id: 153, name: '1/2 Calabresa', price: 5.00 },
    { id: 154, name: '1/2 Mussarela', price: 5.00 },
    { id: 155, name: '1/2 3 Queijos', price: 5.75 },
    { id: 156, name: '1/2 Frango', price: 5.75 },
    { id: 157, name: '1/2 Moda da Casa', price: 8.75 },

    //Pizzas M (Inteiras)
    { id: 201, name: 'Mista', price: 10.00 },
    { id: 202, name: 'Calamista', price: 10.00 },
    { id: 203, name: 'Calabresa', price: 10.00 },
    { id: 204, name: 'Mussarela', price: 10.00 },
    { id: 205, name: '3 Queijos', price: 11.50 },
    { id: 206, name: 'Frango', price: 11.50 },
    { id: 207, name: 'Moda da Casa', price: 17.50 },

    //Pizzas G (Inteiras)
    { id: 251, name: 'Mista', price: 10.00 },
    { id: 252, name: 'Calamista', price: 10.00 },
    { id: 253, name: 'Calabresa', price: 10.00 },
    { id: 254, name: 'Mussarela', price: 10.00 },
    { id: 255, name: '3 Queijos', price: 11.50 },
    { id: 256, name: 'Frango', price: 11.50 },
    { id: 257, name: 'Moda da Casa', price: 17.50 },

    //Calzones
    { id: 301, name: 'Mista', price: 15.00 },
    { id: 302, name: 'Calamista', price: 15.00 },
    { id: 303, name: 'Calabresa', price: 15.00 },
    { id: 304, name: 'Mussarela', price: 15.00 },
    { id: 305, name: '3 Queijos', price: 16.50 },
    { id: 306, name: 'Frango', price: 16.50 },
    { id: 307, name: 'Moda da Casa', price: 22.50 },

    //Salgados
    { id: 401, name: 'Mista', price: 15.00 },
    { id: 402, name: 'Calamista', price: 15.00 },
    { id: 403, name: 'Calabresa', price: 15.00 },
    { id: 404, name: 'Mussarela', price: 15.00 },
    { id: 405, name: '3 Queijos', price: 16.50 },
    { id: 406, name: 'Frango', price: 16.50 },
    { id: 407, name: 'Moda da Casa', price: 22.50 },

    //Bebidas
    { id: 501, name: 'Coca-Cola Lata 330ml', price: 15.00 },
    { id: 502, name: 'Calamista', price: 15.00 },
    { id: 503, name: 'Calabresa', price: 15.00 },
    { id: 504, name: 'Mussarela', price: 15.00 },
    { id: 505, name: '3 Queijos', price: 16.50 },
    { id: 506, name: 'Frango', price: 16.50 },
    { id: 507, name: 'Moda da Casa', price: 22.50 },

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