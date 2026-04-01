import prisma from '../../../lib/prisma.js';
import { CreateReviewDTO, UpdateReviewDTO } from '../dto/review.dto.js';

export class ReviewRepository {
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

  async create(data: CreateReviewDTO) {
    return prisma.review.create({
      data
    });
  }

  async update(id: number, data: UpdateReviewDTO) {
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
