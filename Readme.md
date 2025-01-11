# Grocery Booking API

## Overview
The Grocery Booking API allows administrators to manage grocery items and users to place orders for available items. This project is built using **Node.js**, **TypeScript**, **Express**, and **MongoDB**, and is containerized using **Docker** for seamless deployment.

---

## Features

### Roles
- **Admin**:
  - Add, update, view, and delete grocery items.
  - Manage inventory levels.
- **User**:
  - View available grocery items.
  - Place an order with multiple items.

### Tech Stack
- **Node.js** (Backend)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **TypeScript** (Type-safe development)
- **Docker** (Containerization)

---

## Setup Instructions

### Prerequisites
- Node.js (>= 16.x)
- MongoDB
- Docker (if running via container)

### Local Development

# Grocery App API

A Node.js application with JWT authentication for secure API requests.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [/create-token](#create-token)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
```

#### **2. Install dependencies**
```bash
yarn install
```

#### **3. Configure MongoDB connection**
Update the MongoDB connection string in `src/app.ts`:
```typescript
mongoose.connect('mongodb://localhost:27017/grocery', { useNewUrlParser: true, useUnifiedTopology: true });
```

#### **4. Start the development server**
```bash
yarn dev
```
Server will run at `http://localhost:3000`

#### **5. Build for production**
```bash
yarn build
```

#### **6. Start the production server**
```bash
yarn start
```

---

### Docker Deployment

#### **1. Build the Docker image**
```bash
docker build -t grocery-booking-api .
```

#### **2. Run the Docker container**
```bash
docker run -p 3000:3000 grocery-booking-api
```

#### **3. Using Docker Compose**
If you have `docker-compose.yml`:
```bash
docker-compose up
```

---

## API Endpoints

### **Admin Endpoints**

#### Add a Grocery Item
- **POST** `/api/admin/groceries`
- **Body**:
```json
{
  "name": "Apple",
  "price": 1.5,
  "stock": 100
}
```
- **Response**:
```json
{
  "_id": "64b8c9f7d92e",
  "name": "Apple",
  "price": 1.5,
  "stock": 100
}
```

#### View All Grocery Items
- **GET** `/api/admin/groceries`
- **Response**:
```json
[
  {
    "_id": "64b8c9f7d92e",
    "name": "Apple",
    "price": 1.5,
    "stock": 100
  }
]
```

#### Update a Grocery Item
- **PUT** `/api/admin/groceries/:id`
- **Body**:
```json
{
  "name": "Banana",
  "price": 1.0
}
```
- **Response**:
```json
{
  "message": "Grocery updated successfully"
}
```

#### Delete a Grocery Item
- **DELETE** `/api/admin/groceries/:id`
- **Response**:
```json
{
  "message": "Grocery deleted successfully"
}
```

### **User Endpoints**

#### View Available Groceries
- **GET** `/api/groceries`
- **Response**:
```json
[
  {
    "_id": "64b8c9f7d92e",
    "name": "Apple",
    "price": 1.5,
    "stock": 100
  }
]
```

#### Book an Order
- **POST** `/api/orders`
- **Body**:
```json
{
  "userId": "64b8ca101a5d",
  "items": [
    {
      "groceryId": "64b8c9f7d92e",
      "quantity": 2
    }
  ]
}
```
- **Response**:
```json
{
  "_id": "64b8cae29b92",
  "userId": "64b8ca101a5d",
  "items": [
    {
      "groceryId": "64b8c9f7d92e",
      "quantity": 2
    }
  ],
  "totalAmount": 3.0,
  "createdAt": "2025-01-10T08:30:00Z"
}
```

---

## Notes
- Ensure MongoDB is running locally or update the connection string for your environment.
- Use `Docker Compose` for an easier multi-container setup.

"# grocery-app" 
