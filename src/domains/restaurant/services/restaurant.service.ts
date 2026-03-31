import { RestaurantRepository } from '../repositories/restaurant.repository.js';
import { CreateRestaurantDTO, UpdateRestaurantDTO, RestaurantWithReviewsDTO, SimpleRestaurantDTO } from '../dto/restaurant.dto.js';

export class RestaurantService {
  private repository = new RestaurantRepository();

  async getAll(): Promise<RestaurantWithReviewsDTO[]> {
    return await this.repository.findAll() as unknown as Promise<RestaurantWithReviewsDTO[]>;
  }

  async getById(id: number): Promise<RestaurantWithReviewsDTO> {
    const restaurant = await this.repository.findById(id);
    if (!restaurant) throw new Error('Restaurant not found');
    return restaurant as unknown as RestaurantWithReviewsDTO;
  }

  async create(data: CreateRestaurantDTO): Promise<SimpleRestaurantDTO> {
    return this.repository.create(data);
  }

  async update(id: number, data: UpdateRestaurantDTO): Promise<SimpleRestaurantDTO> {
    await this.getById(id); // Verificar existencia
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.getById(id); // Verificar existencia
    await this.repository.delete(id);
  }
}
