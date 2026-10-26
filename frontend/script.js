// Dashboard Data

fetch("http://localhost:5000/api/dashboard")
    .then(response => response.json())
    .then(data => {

        document.getElementById("totalSales").textContent =
            "₹" + data.totalSales.toLocaleString("en-IN");

        document.getElementById("totalOrders").textContent =
            data.totalOrders.toLocaleString("en-IN");

        document.getElementById("totalCustomers").textContent =
            data.totalCustomers.toLocaleString("en-IN");

        document.getElementById("totalProducts").textContent =
            data.totalProducts.toLocaleString("en-IN");

    })
    .catch(error => {
        console.error("Dashboard Error:", error);
    });


// Products Data

let products = [];

fetch("http://localhost:5000/api/products")
    .then(response => response.json())
    .then(data => {

        products = data;

        displayProducts(products);

    })
    .catch(error => {
        console.error("Products Error:", error);
    });


// Display Products

function displayProducts(data) {

    const tableBody = document.getElementById("productTable");

    tableBody.innerHTML = "";

    data.forEach(product => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.sales.toLocaleString("en-IN")}</td>
        `;

        tableBody.appendChild(row);
    });
}


// Product Search

document.getElementById("searchProduct").addEventListener("input", function () {

    const searchText = this.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);

});


// Sales Data

fetch("http://localhost:5000/api/sales")
    .then(response => response.json())
    .then(data => {

        document.getElementById("monthlySales").textContent =
            "₹" + data.monthlySales.toLocaleString("en-IN");

        document.getElementById("averageOrder").textContent =
            "₹" + data.averageOrder.toLocaleString("en-IN");

    })
    .catch(error => {
        console.error("Sales Error:", error);
    });


// Customer Data

fetch("http://localhost:5000/api/customers")
    .then(response => response.json())
    .then(data => {

        document.getElementById("activeCustomers").textContent =
            data.activeCustomers.toLocaleString("en-IN");

        document.getElementById("newCustomers").textContent =
            data.newCustomers.toLocaleString("en-IN");

        document.getElementById("returningCustomers").textContent =
            data.returningCustomers.toLocaleString("en-IN");

    })
    .catch(error => {
        console.error("Customer Error:", error);
    });