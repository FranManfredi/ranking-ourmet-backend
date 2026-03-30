import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import restaurantRoutes from './domains/restaurant/routes/restaurant.routes.js';

dotenv.config();

const app: Express = express();

// Middleware
app.use(express.json());

// Basic Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Ranking Gourmet API' });
});

// Restaurant Routes
app.use('/api/restaurants', restaurantRoutes);

export default app;
