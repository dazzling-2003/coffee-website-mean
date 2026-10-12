/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("brewandbean");

use("brewandbean");

db.orders.insertMany([
  {
    customerName: "Manoj",
    customerEmail: "manoj@example.com",
    items: [
      {
        productName: "Espresso",
        quantity: 2,
        price: 120
      }
    ],
    totalAmount: 240,
    status: "Pending",
    createdAt: new Date()
  },
  {
    customerName: "Customer 2",
    customerEmail: "customer2@example.com",
    items: [
      {
        productName: "Cappuccino",
        quantity: 1,
        price: 160
      }
    ],
    totalAmount: 160,
    status: "Pending",
    createdAt: new Date()
  }
]);

// Check inserted orders
db.orders.find();
