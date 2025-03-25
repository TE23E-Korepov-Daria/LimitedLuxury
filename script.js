// Get references to the button and the popup
const myButton = document.getElementById("myButton");
const myPopup = document.getElementById("myPopup");

// Function to toggle the popup's visibility
function togglePopup() {
    myPopup.classList.toggle("show");
}

// Event listener for the button click
myButton.addEventListener("click", togglePopup);

// Close the popup if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (!myPopup.contains(event.target) && event.target !== myButton) {
        myPopup.classList.remove("show");
    }
});


let cartCount = 0; // Keeps track of items in the cart

// Add event listener to all 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        cartCount++; // Increment cart count
        document.getElementById('cart-count').textContent = cartCount; // Update cart display
    });
});