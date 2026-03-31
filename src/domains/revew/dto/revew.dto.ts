import { SimpleReviewerDTO } from '../../revewer/dto/reviewer.dto.js';
import { SimpleRestaurantDTO } from '../../restaurant/dto/restaurant.dto.js';

export interface SimpleRevewDTO {
  id: number;
  reviewerId: number;
  restaurantId: number;
  foodRating: number;
  veberageRating: number;
  serviceRating: number;
  valueRating: number;
  ambianceRating: number;
  createdAt: Date;
}

export interface RevewWithDetailsDTO extends SimpleRevewDTO {
  reviewer: SimpleReviewerDTO;
  restaurant: SimpleRestaurantDTO;
}

export interface CreateRevewDTO {
  reviewerId: number;
  restaurantId: number;
  foodRating?: number;
  veberageRating?: number;
  serviceRating?: number;
  valueRating?: number;
  ambianceRating?: number;
}

export interface UpdateRevewDTO {
  foodRating?: number;
  veberageRating?: number;
  serviceRating?: number;
  valueRating?: number;
  ambianceRating?: number;
}
