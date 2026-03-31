import { RevewRepository } from '../repositories/revew.repository.js';
import { CreateRevewDTO, UpdateRevewDTO, RevewWithDetailsDTO, SimpleRevewDTO } from '../dto/revew.dto.js';

export class RevewService {
  private repository = new RevewRepository();

  async getAll(): Promise<RevewWithDetailsDTO[]> {
    return this.repository.findAll() as unknown as Promise<RevewWithDetailsDTO[]>;
  }

  async getById(id: number): Promise<RevewWithDetailsDTO> {
    const revew = await this.repository.findById(id);
    if (!revew) throw new Error('Review not found');
    return revew as unknown as RevewWithDetailsDTO;
  }

  async create(data: CreateRevewDTO): Promise<SimpleRevewDTO> {
    return this.repository.create(data);
  }

  async update(id: number, data: UpdateRevewDTO): Promise<SimpleRevewDTO> {
    await this.getById(id);
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    await this.repository.delete(id);
  }
}
