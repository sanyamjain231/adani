# CRUD API Project

## Summary

This project is a simple CRUD API built with Node.js, Express.js, TypeScript, and SQLite. It provides basic functionality to create, read, update, and delete user accounts. It also includes user authentication and authorization using JWT.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- SQLite
- JWT (JSON Web Token) for authentication and authorization

## Authentication and Authorization

- User authentication is implemented using email and password.
- Passwords are securely stored in the database using bcrypt hashing.
- JWT is used to manage user sessions and protect routes that require authorization.
- Middleware functions are used to check if a user is authenticated before allowing access to certain endpoints.

## API Endpoints

### Authentication

- **POST /login**: Authenticates a user with email and password.

### Accounts

- **GET /accounts**: Retrieves a list of accounts. Protected by authentication middleware.
- **POST /accounts**: Creates a new account. Protected by authentication middleware.
- **GET /accounts/:id**: Retrieves a specific account by ID. Protected by authentication middleware.
- **PUT /accounts/:id**: Updates an account by ID. Protected by authentication middleware.
- **DELETE /accounts/:id**: Deletes an account by ID. Protected by authentication middleware.

## Initialization and Start

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/sanyamjain231/adani_as.git>
   cd <repository-folder>

   ```

2. **Install dependencies:**
   npm install

3. **Set up environment variables:**
   Create a .env file in the root directory and add the following:
   JWT_SECRET=your_jwt_secret

4. **Initialize the database:**
   Make sure to have SQLite installed. You can initialize the database using the provided script or create it manually.

5. **Compile TypeScript to JavaScript:**
   npx tsc

6. **Start the server:**
   node dist/index.js
