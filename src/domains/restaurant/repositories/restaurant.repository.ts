import prisma from '../../../lib/prisma.js';

export class RestaurantRepository {
  async findAll() {
    return prisma.restaurant.findMany({
      include: { reviews: true }
    });
  }

  async findById(id: number) {
    return prisma.restaurant.findUnique({
      where: { id },
      include: { reviews: true }
    });
  }

  async create(data: { name: string; description?: string }) {
    return prisma.restaurant.create({
      data
    });
  }

  async update(id: number, data: { name?: string; description?: string; rating?: number }) {
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
