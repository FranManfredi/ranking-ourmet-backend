import { SimpleReviewerDTO, SimpleReviewDTO, SimpleRestaurantDTO } from '../../shared/dto/common.dto.js';

export { SimpleReviewDTO };

export interface ReviewWithDetailsDTO extends SimpleReviewDTO {
  reviewer: SimpleReviewerDTO;
  restaurant: SimpleRestaurantDTO;
}

export interface CreateReviewDTO {
  reviewerId: number;
  restaurantId: number;
  foodRating?: number;
  beverageRating?: number;
  serviceRating?: number;
  valueRating?: number;
  ambianceRating?: number;
}

export interface UpdateReviewDTO {
  foodRating?: number;
  beverageRating?: number;
  serviceRating?: number;
  valueRating?: number;
  ambianceRating?: number;
}
