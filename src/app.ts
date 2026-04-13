import express, { Express, Request, Response } from 'express';
import restaurantRoutes from './domains/restaurant/routes/restaurant.routes.js';
import reviewerRoutes from './domains/reviewer/routes/reviewer.routes.js';
import reviewRoutes from './domains/review/routes/review.routes.js';
import visitRoutes from './domains/visit/routes/visit.routes.js';
import { setupSwagger } from './lib/swagger.js';
import { auth } from "./lib/auth/auth.js";
import { toNodeHandler } from "better-auth/node";
import { isAuthenticated } from "./lib/auth/middleware/auth.middleware.js";
import { isAdmin } from "./lib/auth/middleware/admin.middleware.js";

const app: Express = express();

// Middleware base
app.use(express.json());

// Logger de peticiones
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Body:', JSON.stringify(req.body, null, 2));
  }
  next();
});

// 1. Endpoints de Autenticación (Better Auth)
// Solo los administradores pueden registrar gente nueva
app.all("/api/auth/sign-up/*path", isAdmin, toNodeHandler(auth));

// El resto de los endpoints de auth (sign-in, session, etc.) son públicos o manejados internamente
app.all("/api/auth/*path", toNodeHandler(auth));

// Ruta de bienvenida (Pública)
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Ranking Gourmet API' });
});

// 2. Rutas Protegidas (Aplicamos el middleware aquí para proteger todos los dominios)
app.use('/api/restaurants', isAuthenticated, restaurantRoutes);
app.use('/api/reviewers', isAuthenticated, reviewerRoutes);
app.use('/api/reviews', isAuthenticated, reviewRoutes);
app.use('/api/visits', isAuthenticated, visitRoutes);

setupSwagger(app);

export default app;
