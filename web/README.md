# Web

This directory contains the frontend code for the portfolio template. It includes the UI components for the portfolio page, login page, and inbox.

## Setup

1. **Install Dependencies**:
   ```sh
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file in the `web` directory and add the following variables:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:your_api_port
   ```

3. **Start the Development Server**:
   ```sh
   npm run dev
   ```

## Pages

### Portfolio

- **Hero Section**: Contains a brief introduction and a call-to-action button.
- **About Me**: Provides information about yourself.
- **Experience**: Lists your professional experiences.
- **Projects**: Lists your projects.
- **Contact Form**: Allows visitors to send you messages.

### Login

- A simple login page that authenticates the user and provides access to the inbox.

### Inbox

- Displays messages received from the contact form. This page is protected and requires the user to be logged in.

## Project Structure

- `pages/`: Contains the Next.js pages.
- `components/`: Contains reusable UI components.
- `services/`: Contains API service functions for interacting with the backend.
- `context/`: Contains context providers, including AuthContext for authentication state management.