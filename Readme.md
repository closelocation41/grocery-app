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

## Tests
Add tests using your preferred testing framework (e.g., Jest or Mocha) for the controllers and middleware.

## License
This project is licensed under the MIT License.
