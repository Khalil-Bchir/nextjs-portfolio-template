# Portfolio Template

This project is a full-stack portfolio template built using Next.js, Tailwind CSS, and Shadcn-ui for the frontend and Express.js for the backend. The template includes a portfolio page, login functionality, and a secure inbox to store and read messages. Messages are saved in a MongoDB database.

## Features

- **Portfolio Page**: Includes sections like Hero, About Me, Experience, and a Contact Form.
- **Login Functionality**: Allows users to log in to access the inbox.
- **Inbox**: Securely stores and displays messages received from the contact form.
- **API**: Handles login, message storage, and retrieval.

## Directory Structure

- `api/`: Contains all backend code including API routes.
- `web/`: Contains all frontend code.

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS, Shadcn-ui
- **Backend**: Express.js, Node.js
- **Database**: MongoDB

## Getting Started

To get started with this project:

1. Clone the repository:
   ```bash
   git clone https://github.com/Khalil-Bchir/nextjs-portfolio-template.git
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd nextjs-portfolio-template/web
   npm install
   
   cd ../api
   npm install
   ```

3. Set up MongoDB:
   - Ensure MongoDB is installed and running locally or use a cloud-based MongoDB service. Update the MongoDB URI in your backend configuration (`api/.env`).

4. Start the backend and frontend servers:
   ```bash
   # Start backend server
   cd api
   npm run dev
   
   # Start frontend server
   cd ../web
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Accessing the Inbox

To access the inbox:

1. Click on **Inbox** in the footer of the portfolio page.
2. You will be redirected to a login page.
3. Use the following credentials for the demo:
   - **Email**: test@example.com
   - **Password**: passer
4. After logging in, you will be able to view and manage messages received from the contact form on the portfolio main page.

![Portfolio Template](https://i.goopics.net/c0wc2n.png)

## Demo

Check out the live demo [here](https://personal-portfolio-bay-six.vercel.app/).