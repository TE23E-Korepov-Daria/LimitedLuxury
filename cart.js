 // Funktion för att visa kundvagnens innehåll
 function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Rensa innehållet i kundvagnen
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Din kundvagn är tom.</p>";
        totalPriceElement.textContent = "Total: 0 SEK";
        return;
    }

    // Visa varje produkt i kundvagnen
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.productName}" class="cart-image">
            <div class="cart-details">
                <h3>${item.productName}</h3>
                <p>Pris: ${item.price.toLocaleString()} SEK</p>
            </div>
            <button class="remove-button" onclick="removeFromCart(${index})">Ta bort</button>
        `;
        cartContainer.appendChild(cartItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: ${totalPrice.toLocaleString()} SEK`;
}

// Funktion för att ta bort en produkt från kundvagnen
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// Kör när sidan laddas
document.addEventListener('DOMContentLoaded', displayCart);