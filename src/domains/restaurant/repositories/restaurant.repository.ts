import prisma from '../../../lib/prisma.js';
import { CreateRestaurantDTO, UpdateRestaurantDTO } from '../dto/restaurant.dto.js';

export class RestaurantRepository {
  async findAll() {
    return prisma.restaurant.findMany({
      include: {
        reviews: {
          include: {
            reviewer: true
          }
        }
      }
    });
  }

  async findById(id: number) {
    return prisma.restaurant.findUnique({
      where: { id },
      include: {
        reviews: {
          include: {
            reviewer: true
          }
        }
      }
    });
  }

  async create(data: CreateRestaurantDTO) {
    return prisma.restaurant.create({
      data
    });
  }

  async update(id: number, data: UpdateRestaurantDTO) {
    return prisma.restaurant.update({
      where: { id },
      data
    });
  }

  async delete(id: number) {
    return prisma.restaurant.delete({
      where: { id }
    });
  }
}
