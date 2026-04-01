import { SimpleRestaurantDTO } from '../../shared/dto/common.dto.js';
import { ReviewWithDetailsDTO } from '../../review/dto/review.dto.js';

export { SimpleRestaurantDTO };

export interface RestaurantWithReviewsDTO extends SimpleRestaurantDTO {
  reviews: ReviewWithDetailsDTO[];
}

export interface CreateRestaurantDTO {
  name: string;
}

export interface UpdateRestaurantDTO {
  name?: string;
}
