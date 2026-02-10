// Load cart count and items from localStorage
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

if (cartItems.length === 0) {
    cartCount = 0;
    localStorage.setItem('cartCount', 0);
}
const cartCountElement = document.getElementById('cart-count');
// Update cart count display
function updateCartDisplay() {
    cartCountElement.textContent = cartCount;
}
updateCartDisplay();
function addToCart(name, price, image) {
    // Check if item already exists
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, price, image, quantity: 1 });
    }
    cartCount++;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', cartCount);
    updateCartDisplay();
    alert(`${name} added to cart!`);
}

document.getElementById('cart-icon').addEventListener('click', () => {
    window.open('cart.html', '_blank'); // Opens in new tab
});