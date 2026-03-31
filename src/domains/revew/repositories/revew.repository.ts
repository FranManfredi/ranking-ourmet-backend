import prisma from '../../../lib/prisma.js';
import { CreateRevewDTO, UpdateRevewDTO } from '../dto/revew.dto.js';

export class RevewRepository {
  async findAll() {
    return prisma.review.findMany({
      include: {
        reviewer: true,
        restaurant: true
      }
    });
  }

  async findById(id: number) {
    return prisma.review.findUnique({
      where: { id },
      include: {
        reviewer: true,
        restaurant: true
      }
    });
  }

  async create(data: CreateRevewDTO) {
    return prisma.review.create({
      data
    });
  }

  async update(id: number, data: UpdateRevewDTO) {
    return prisma.review.update({
      where: { id },
      data
    });
  }

  async delete(id: number) {
    return prisma.review.delete({
      where: { id }
    });
  }
}
