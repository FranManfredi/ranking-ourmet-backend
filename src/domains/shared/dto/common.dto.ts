export interface SimpleReviewerDTO {
  id: number;
  name: string;
  surname: string;
}

export interface SimpleReviewDTO {
  id: number;
  reviewerId: number;
  restaurantId: number;
  foodRating: number;
  beverageRating: number;
  serviceRating: number;
  valueRating: number;
  ambianceRating: number;
  createdAt: Date;
}

export interface SimpleRestaurantDTO {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
