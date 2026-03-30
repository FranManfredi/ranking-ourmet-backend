import { RestaurantRepository } from '../repositories/restaurant.repository.js';

export class RestaurantService {
  private repository = new RestaurantRepository();

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id: number) {
    const restaurant = await this.repository.findById(id);
    if (!restaurant) throw new Error('Restaurant not found');
    return restaurant;
  }

  async create(data: { name: string; description?: string }) {
    // Aquí puedes añadir validaciones adicionales
    return this.repository.create(data);
  }

  async update(id: number, data: { name?: string; description?: string; rating?: number }) {
    await this.getById(id); // Verificar existencia
    return this.repository.update(id, data);
  }

  async delete(id: number) {
    await this.getById(id); // Verificar existencia
    return this.repository.delete(id);
  }
}
