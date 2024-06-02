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

- **POST /api/auth/register**: Creates a new account.
- **POST /api/auth/login**: Used to login into an account
- **GET /api/accounts**: Retrieves a list of accounts. Protected by authentication middleware.
- **GET /api/accounts?limit=1**: Retrieves a list of accounts with limit given in query param.
- **GET /api/accounts/:id**: Retrieves a specific account by ID.
- **PUT /api/accounts/:id**: Updates an account by ID.
- **DELETE /api/accounts/:id**: Deletes an account by ID.

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
