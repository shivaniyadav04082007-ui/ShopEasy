let cart = [];

function addToCart(productName, price) {

    let existingProduct = cart.find(
        product => product.name === productName
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }

    alert(productName + " added to cart 🛒");

    displayCart();
}


function displayCart() {

    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerText = "Total: ₹0";
        return;
    }

    cart.forEach(function(product, index) {

        let item = document.createElement("div");

        item.innerHTML = `
            <p>
                ${product.name} -
                ₹${product.price}
                
                <button onclick="decreaseQuantity(${index})">
                    ➖
                </button>

                <strong>${product.quantity}</strong>

                <button onclick="increaseQuantity(${index})">
                    ➕
                </button>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </p>
        `;

        cartItems.appendChild(item);

        total += product.price * product.quantity;
    });

    cartTotal.innerText = "Total: ₹" + total;
}


function increaseQuantity(index) {

    cart[index].quantity++;

    displayCart();
}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    displayCart();
}


function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();
}

function searchProducts() {

    let searchText = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        let productName = product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function loginUser() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("loginMessage");

    if (email === "" || password === "") {
        message.innerText = "Please enter Email and Password.";
        return;
    }

    message.innerText = "Login successful! 🎉";
}