import express from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipes';
import { PORT } from './config';

// Create Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', recipeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
