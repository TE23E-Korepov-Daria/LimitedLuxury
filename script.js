//Sidebar menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    let sidebar = document.getElementById('sidebar');
    // Toggle sidebar visibility
    sidebar.style.left = (sidebar.style.left === '0px') ? '-250px' : '0px';
});

// Function to close the sidebar
function closeSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-250px'; // Hide the sidebar
}

// Add event listener to the close button
document.getElementById('close-sidebar').addEventListener('click', closeSidebar);


let cartCount = 0; // Keeps track of items in the cart

// Add event listener to all 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        cartCount++; // Increment cart count
        document.getElementById('cart-count').textContent = cartCount; // Update cart display
    });
});