// Initialize cart quantity
let cartQuantity = 0; // Starting with 0 items in the cart
// Function to update the cart icon with the quantity
function updateCartQuantity() {
  const quantityElement = document.getElementById("cartQuantity");
  quantityElement.textContent = cartQuantity; // Set the cart quantity
  if (cartQuantity > 0) {
    quantityElement.style.display = "inline-block"; // Show quantity if it's greater than 0
  } else {
    quantityElement.style.display = "none"; // Hide quantity if it's 0
  }
}
// Function to add an item to the cart
function addItemToCart() {
  cartQuantity++; // Increment the cart quantity
  updateCartQuantity(); // Update the displayed quantity
}
// Event listener for all "ADD TO CART" buttons
const addToCartButtons = document.querySelectorAll('.menubutton');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    addItemToCart(); // Call addItemToCart when a button is clicked
  });
});
// Handling the cart icon display
document.addEventListener("DOMContentLoaded", function() {
  // Creating cart icon and quantity display dynamically
  const cartIcon = document.createElement("div");
  cartIcon.classList.add("cart"); 
  cartIcon.innerHTML = `
    <i id="cartIcon" class="fa-solid fa-cart-shopping"> Cart </i>
    <span id="cartQuantity" style="display:none; position: absolute; top: 0; right: 0; background: red; color: white; border-radius: 50%; padding: 3px 8px; font-size: 12px;">0</span>
  `;
  // Append the cart icon to the header (you can change the position based on where you want it)
  document.querySelector('header .header').appendChild(cartIcon);
  // Update the cart quantity when the page is loaded (this ensures the cart starts with 0)
  updateCartQuantity();
});
