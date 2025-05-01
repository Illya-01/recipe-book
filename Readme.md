# Recipe Book Application

A full-stack application for exploring and filtering recipes from around the world.

## Project Structure

- `/BE` — Backend Express API (TypeScript)
- `/FE` — Frontend React application (TypeScript)

## Environment Setup

### Backend Environment Variables

Create a `.env` file in the `/BE` directory with the following content:

```
PORT=8000
MEAL_DB_API_URL=https://www.themealdb.com/api/json/v1/1/
ALLOWED_ORIGINS=http://localhost:3000
```

You can use `.env.example` as a template.

## Installation & Running

### Backend

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd BE
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The backend server will run at [http://localhost:8000](http://localhost:8000).

### Frontend

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd FE
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run at [http://localhost:5173](http://localhost:5173).

## Notes

- Make sure both servers are running for the application to work correctly.
- Adjust environment variables as needed for your deployment.
- For production, build both frontend and backend using `npm run build` in each directory.

---
