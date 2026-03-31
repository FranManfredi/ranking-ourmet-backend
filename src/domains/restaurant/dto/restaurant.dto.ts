import {ReviewWithReviewerDTO} from "../../revew/dto/revew.dto.js";

export interface SimpleRestaurantDTO {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RestaurantWithReviewsDTO extends SimpleRestaurantDTO {
  reviews: ReviewWithReviewerDTO[];
}

export interface CreateRestaurantDTO {
  name: string;
}

export interface UpdateRestaurantDTO {
  name?: string;
}
