import { Request, Response } from 'express';
import { RevewService } from '../services/revew.service.js';
import { CreateRevewDTO, UpdateRevewDTO, RevewWithDetailsDTO, SimpleRevewDTO } from '../dto/revew.dto.js';

export class RevewController {
  private service = new RevewService();

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const revews: RevewWithDetailsDTO[] = await this.service.getAll();
      res.json(revews);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const revew: RevewWithDetailsDTO = await this.service.getById(Number(id));
      res.json(revew);
    } catch (error: any) {
      const status = error.message === 'Review not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const data: CreateRevewDTO = req.body;
      const revew: SimpleRevewDTO = await this.service.create(data);
      res.status(201).json(revew);
    } catch (error) {
      res.status(500).json({ error: 'Error creating review' });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const data: UpdateRevewDTO = req.body;
      const revew: SimpleRevewDTO = await this.service.update(Number(id), data);
      res.json(revew);
    } catch (error: any) {
      const status = error.message === 'Review not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await this.service.delete(Number(id));
      res.status(204).send();
    } catch (error: any) {
      const status = error.message === 'Review not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  };
}
