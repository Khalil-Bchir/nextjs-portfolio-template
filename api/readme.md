# API

This directory contains the backend code for the portfolio template. It includes the API routes for handling login, saving messages from the contact form, and retrieving messages for the inbox.

## Setup

1. **Install Dependencies**:

   ```sh
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the `api` directory and add the following variables:

   ```env
   DATABASE_URI=your_mongo_db_uri
   JWT_SECRET=your_secret_key
   INITIAL_USERNAME=admin
   INITIAL_PASSWORD=admin_password
   PORT=5000
   ```

3. **Start the Server**:

   ```sh
   npm start
   ```

## API Endpoints

### Authentication

- **Login**: `POST /api/login`
  - Request Body:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

### Messages

- **Save Message**: `POST /api/messages`

  - Request Body:
    ```json
    {
      "name": "string",
      "email": "string",
      "message": "string"
    }
    ```

- **Get Messages**: `GET /api/messages`
  - Headers:
    ```http
    Authorization: Bearer jwt_token
    ```
