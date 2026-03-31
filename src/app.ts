import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import restaurantRoutes from './domains/restaurant/routes/restaurant.routes.js';
import reviewerRoutes from './domains/reviewer/routes/reviewer.routes.js';
import revewRoutes from './domains/revew/routes/revew.routes.js';

dotenv.config();

const app: Express = express();

// Middleware
app.use(express.json());

// Basic Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Ranking Gourmet API' });
});

// Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/reviewers', reviewerRoutes);
app.use('/api/reviews', revewRoutes);

export default app;
