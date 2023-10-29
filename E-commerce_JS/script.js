// UI elements 
let productListDiv = document.querySelector('#product_list_div');
let productList = document.querySelector('#product_list');
let cartDiv = document.querySelector('#cart_div');
let cartList = document.querySelector('#cart_list');
let clearCartBtn = document.querySelector('#clear_cart_btn');


fetchProducts()

// function for fetching the products using an API
function fetchProducts(){
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(response => {
        if (!response.ok) {
            throw new Error('No response found');
        }
        return response.json();
    })
    .then(data => {
        showProducts(data);  
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// function for showing the products
function showProducts(products){
    let productCard, product;

    for(i in products){
        product = products[i];
        productCard = document.createElement('div');
        productCard.innerHTML = 
        `<div class="card mb-3">
            <div class="row no-gutters">
            <div class="col-md-3 m-2 d-flex justify-content-center align-items-center">
                <img src="${product.image}" alt="product-img" style="width: 100px; height:130px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h4 class="card-title" id="title_${product.id}">${product.title}</h4>
                    <p class="text-primary" id="price_${product.id}" style="font-size: 35px">${product.price}$</p>
                    <button 
                        class="btn btn-warning" 
                        id="addToCartBtn_${product.id}"
                        onclick = "addProductToCart(${product.id})"
                    >Add to cart</button>
                </div>
            </div>
            </div>
        </div>`;
        productList.appendChild(productCard);
    }
}


// function for adding a product to the cart
function addProductToCart(productId){
    let title = document.getElementById(`title_${productId}`).innerText;
    let price = document.getElementById(`price_${productId}`).innerText;
    let cartProduct = document.createElement('div');

    cartProduct.setAttribute('class', 'card mb-3');
    cartProduct.setAttribute('id', `cart_product_${productId}`);
    cartProduct.innerHTML = 
    `<div class="card-body">
        <h6 class="card-title">${title}</h6>
        <p class="text-primary" style="font-size: 20px">${price}</p>
        <button class="btn btn-danger" onclick="removeProduct(${productId})">Remove</button>
    </div>`;

    cartList.appendChild(cartProduct); 
    let btn = document.getElementById(`addToCartBtn_${productId}`);
    btn.disabled = true;
}


// function for removing a product to the cart
function removeProduct(productId){
    let selectedProduct = document.getElementById(`cart_product_${productId}`);
    let btn = document.getElementById(`addToCartBtn_${productId}`); 
    btn.disabled = false;
    cartList.removeChild(selectedProduct);
}