// Function to add items to the cart
function addToCart(productName, price) {
    // Example: Add to cart logic (you can implement your own logic here)
    const item = {
        name: productName,
        price: price
    };

    // Storing items in localStorage for simplicity (you may use a backend or session storage)
    let cart = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    cart.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cart));

    // Show confirmation to user (you can customize this part)
    alert(`Added ${productName} to cart!`);
}

// Function to generate invoice
function generateInvoice() {
    // Retrieve items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    // Example: Dummy invoice generation (you can customize this part)
    let invoiceDetails = '<h3>Invoice Details</h3>';
    let total = 0;
    cartItems.forEach(item => {
        invoiceDetails += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });
    invoiceDetails += `<p><strong>Total: $${total}</strong></p>`;

    // Display invoice details on invoice.html page
    document.getElementById('invoiceDetails').innerHTML = invoiceDetails;

    // Redirect to invoice page
    window.location.href = 'invoice.html';
}

// Admin login functionality
const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;

        // Replace with actual admin authentication logic
        if (username === 'admin' && password === 'admin123') {
            document.getElementById('adminLoginForm').style.display = 'none';
            document.getElementById('adminPanel').style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });
}

// Admin functionalities
function loadProducts() {
    document.getElementById('adminContent').innerHTML = '<h3>Product Table</h3><p>Here is the product table...</p>';
}

function loadSuppliers() {
    document.getElementById('adminContent').innerHTML = '<h3>Suppliers Table</h3><p>Here is the suppliers table...</p>';
}

function loadCustomers() {
    document.getElementById('adminContent').innerHTML = '<h3>Manage Customers</h3><p>List of customers...</p><button onclick="addNewCustomer()">Add New Customer</button>';
}

function addNewCustomer() {
    // Implement logic to add a new customer
    alert('New customer added successfully.');
}

// Customer login functionality
const customerLoginForm = document.getElementById('customerLoginForm');
if (customerLoginForm) {
    customerLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('customerUsername').value;
        const password = document.getElementById('customerPassword').value;

        // Replace with actual customer authentication logic
        if (username === 'customer' && password === 'customer123') {
            document.getElementById('customerLoginForm').style.display = 'none';
            document.getElementById('customerPanel').style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });
}

// Customer functionalities
function viewProducts() {
    // Redirect to products page or load products dynamically
    window.location.href = 'products.html';
}

function viewCart() {
    // Redirect to cart page or show cart items dynamically
    window.location.href = 'cart.html';
}
