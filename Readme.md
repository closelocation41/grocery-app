# Grocery Booking API

This API allows users to manage grocery items and place orders. Admins can perform CRUD operations on groceries. Users can view available groceries and place orders.

## Prerequisites
- Node.js and npm installed
- MongoDB running locally or on a server
- Docker (optional for containerization)

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd grocery-booking-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following:
   ```env
   PORT=3000
   MONGO_URL=mongodb://localhost:27017/grocery
   SECRET_KEY=your_secret_key
   ```

4. Start the application:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:3000`.

## API Endpoints

### Admin Routes
| Method | Endpoint                  | Description                         |
|--------|---------------------------|-------------------------------------|
| POST   | `/api/admin/groceries`    | Add a new grocery item              |
| GET    | `/api/admin/groceries`    | View all grocery items              |
| PUT    | `/api/admin/groceries/:id`| Update grocery item details         |
| DELETE | `/api/admin/groceries/:id`| Remove a grocery item               |

### User Routes
| Method | Endpoint          | Description                         |
|--------|-------------------|-------------------------------------|
| GET    | `/api/groceries`  | View available grocery items         |
| POST   | `/api/orders`     | Place an order for groceries         |

### Utility Route
| Method | Endpoint          | Description                         |
|--------|-------------------|-------------------------------------|
| GET   | `/create-token`| Generate a JWT token for testing    |

## Using `/create-token`
This endpoint generates a JWT token for a default user. You can use this token for testing authenticated routes.

Example request:
```bash
curl -X POST http://localhost:3000/create-token
```

Example response:
```json
{
    "token": "your_generated_jwt_token"
}
```

## Run with Docker
1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. The API will be available at `http://localhost:3000`.


# Grocery API Documentation

This document provides detailed information about the Grocery API, including the endpoints for adding, retrieving, updating, and deleting grocery items. Each section outlines the request format and the expected response.

---

## Endpoints

### 1. Add a Grocery Item

**Endpoint:** `POST /groceries`

**Description:** Adds a new grocery item to the database.

#### Request:
**Headers:**
- `Content-Type: application/json`

**Body:**
```json
{
  "name": "string",
  "price": "number",
  "stock": "number"
}
```

#### Response:
- **201 Created**:
  ```json
  {
    "_id": "string",
    "name": "string",
    "price": "number",
    "stock": "number",
    "__v": "number"
  }
  ```
- **500 Internal Server Error**:
  ```json
  {
    "error": "string"
  }
  ```

---

### 2. Get All Groceries

**Endpoint:** `GET /groceries`

**Description:** Retrieves all grocery items from the database.

#### Request:
No request body or parameters are required.

#### Response:
- **200 OK**:
  ```json
  [
    {
      "_id": "string",
      "name": "string",
      "price": "number",
      "stock": "number",
      "__v": "number"
    }
  ]
  ```
- **500 Internal Server Error**:
  ```json
  {
    "error": "string"
  }
  ```

---

### 3. Update a Grocery Item

**Endpoint:** `PUT /groceries/:id`

**Description:** Updates an existing grocery item by its ID.

#### Request:
**Headers:**
- `Content-Type: application/json`

**Parameters:**
- `id` (string): The ID of the grocery item to update.

**Body:**
```json
{
  "name": "string",
  "price": "number",
  "stock": "number"
}
```

#### Response:
- **200 OK**:
  ```json
  {
    "_id": "string",
    "name": "string",
    "price": "number",
    "stock": "number",
    "__v": "number"
  }
  ```
- **404 Not Found**:
  ```json
  {
    "error": "Grocery not found"
  }
  ```
- **500 Internal Server Error**:
  ```json
  {
    "error": "string"
  }
  ```

---

### 4. Delete a Grocery Item

**Endpoint:** `DELETE /groceries/:id`

**Description:** Deletes an existing grocery item by its ID.

#### Request:
**Parameters:**
- `id` (string): The ID of the grocery item to delete.

#### Response:
- **200 OK**:
  ```json
  {
    "message": "Grocery deleted successfully"
  }
  ```
- **404 Not Found**:
  ```json
  {
    "error": "Grocery not found"
  }
  ```
- **500 Internal Server Error**:
  ```json
  {
    "error": "string"
  }
  ```

---

## Error Handling

All endpoints return appropriate error messages with a status code of `500` in case of unexpected errors. Make sure to handle these errors gracefully on the client side.

---



## License
This project is licensed under the MIT License.
