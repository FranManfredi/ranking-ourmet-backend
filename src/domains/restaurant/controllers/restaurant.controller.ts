import { Request, Response } from 'express';
import { RestaurantService } from '../services/restaurant.service.js';

export class RestaurantController {
  private service = new RestaurantService();

  getAll = async (req: Request, res: Response) => {
    try {
      const restaurants = await this.service.getAll();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const restaurant = await this.service.getById(Number(id));
      res.json(restaurant);
    } catch (error: any) {
      const status = error.message === 'Restaurant not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const restaurant = await this.service.create(req.body);
      res.status(201).json(restaurant);
    } catch (error) {
      res.status(500).json({ error: 'Error creating restaurant' });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const restaurant = await this.service.update(Number(id), req.body);
      res.json(restaurant);
    } catch (error: any) {
      const status = error.message === 'Restaurant not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.service.delete(Number(id));
      res.status(204).send();
    } catch (error: any) {
      const status = error.message === 'Restaurant not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  };
}
