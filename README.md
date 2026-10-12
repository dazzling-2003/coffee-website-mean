# Brew & Bean — MERN Coffee Shop Ordering Website

A responsive coffee shop ordering website built with MongoDB, Express, React, and Node.js.

## Features
- Modern responsive landing page and menu
- Categories and product search
- Product cards with images, descriptions, and prices
- Add to cart, remove items, and update quantities
- Cart persists in browser localStorage
- Checkout form with customer name, phone, email, and delivery/pickup choice
- Order creation through the Express API
- Order confirmation screen with order number and summary
- MongoDB product seeding script
- Demo mode: if MongoDB is unavailable, the API uses sample menu data in memory and still accepts demo orders (orders are not persisted between server restarts)

## Requirements
- Node.js 18+
- npm
- MongoDB local installation or MongoDB Atlas connection string (optional for demo mode)

## Run the project

### 1. Backend
```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```
The API runs at http://localhost:5000.

If MongoDB is not running or `MONGODB_URI` is not configured, the server uses demo data automatically. To persist products and orders, configure MongoDB.

### 2. Frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```
Open the Vite URL shown in the terminal, normally http://localhost:5173.

## MongoDB Atlas
1. Create a free cluster in MongoDB Atlas.
2. Create a database user and allow your IP address in Network Access.
3. Copy the connection string.
4. Put it in `backend/.env` as `MONGODB_URI=your_connection_string`.
5. Restart the backend and run `npm run seed`.

## API endpoints
- `GET /api/health` — API status
- `GET /api/products` — menu products; optional `?category=Coffee` and `?search=latte`
- `POST /api/orders` — create an order
- `GET /api/orders/:id` — retrieve an order by ID (MongoDB mode)

## Notes
- This assessment project does not process online payments. Orders are placed as cash-on-pickup/delivery requests.
- Do not use this demo as a production ordering system without adding authentication, validation/rate limiting, secure operations, privacy controls, and payment-provider integration.
