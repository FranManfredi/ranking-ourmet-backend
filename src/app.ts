import express, { Express, Request, Response } from 'express';
import restaurantRoutes from './domains/restaurant/routes/restaurant.routes.js';
import reviewerRoutes from './domains/reviewer/routes/reviewer.routes.js';
import reviewRoutes from './domains/review/routes/review.routes.js';
import visitRoutes from './domains/visit/routes/visit.routes.js';
import { setupSwagger } from './lib/swagger.js';

const app: Express = express();

// Middleware
app.use(express.json());

// Simple request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Body:', JSON.stringify(req.body, null, 2));
  }
  next();
});

// Basic Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Ranking Gourmet API' });
});

// Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/reviewers', reviewerRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/visits', visitRoutes);

setupSwagger(app);

export default app;
