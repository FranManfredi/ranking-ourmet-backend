import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ranking Gourmet API',
      version: '1.0.0',
      description: 'API for managing restaurant rankings, reviews, and visits',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Restaurant: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            address: { type: 'string' },
            city: { type: 'string', default: 'MAR DEL PLATA' },
            tags: {
              type: 'array',
              items: { type: 'string' },
            },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Visit: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            visitedAt: { type: 'string', format: 'date-time' },
            restaurantId: { type: 'integer' },
          },
        },
        Review: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            reviewerId: { type: 'integer' },
            visitId: { type: 'integer' },
            foodRating: { type: 'number' },
            beverageRating: { type: 'number' },
            serviceRating: { type: 'number' },
            valueRating: { type: 'number' },
            ambianceRating: { type: 'number' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        Reviewer: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            surname: { type: 'string' },
          },
        },
      },
    },
  },
  // Path to the API docs
  apis: [
    './src/domains/**/*.routes.ts',
    './dist/domains/**/*.routes.js'
  ],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  console.log('Swagger docs available at http://localhost:3000/api-docs');
};
