const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

// Read sales data
const data = JSON.parse(
    fs.readFileSync("./data/sales.json", "utf8")
);

// Home
app.get("/", (req, res) => {
    res.send("Online Retail Analytics Backend is Running");
});

// Dashboard API
app.get("/api/dashboard", (req, res) => {
    res.json(data.dashboard);
});

// Products API
app.get("/api/products", (req, res) => {
    res.json(data.products);
});

// Sales API
app.get("/api/sales", (req, res) => {
    res.json(data.sales);
});

// Customers API
app.get("/api/customers", (req, res) => {
    res.json(data.customers);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});