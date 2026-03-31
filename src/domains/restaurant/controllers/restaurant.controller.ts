import { Request, Response } from 'express';
import { RestaurantService } from '../services/restaurant.service.js';
import { CreateRestaurantDTO, UpdateRestaurantDTO, RestaurantWithReviewsDTO, SimpleRestaurantDTO } from '../dto/restaurant.dto.js';

export class RestaurantController {
  private service = new RestaurantService();

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const restaurants: RestaurantWithReviewsDTO[] = await this.service.getAll();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const restaurant: RestaurantWithReviewsDTO = await this.service.getById(Number(id));
      res.json(restaurant);
    } catch (error: any) {
      const status = error.message === 'Restaurant not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const data: CreateRestaurantDTO = req.body;
      const restaurant: SimpleRestaurantDTO = await this.service.create(data);
      res.status(201).json(restaurant);
    } catch (error) {
      res.status(500).json({ error: 'Error creating restaurant' });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const data: UpdateRestaurantDTO = req.body;
      const restaurant: SimpleRestaurantDTO = await this.service.update(Number(id), data);
      res.json(restaurant);
    } catch (error: any) {
      const status = error.message === 'Restaurant not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
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
