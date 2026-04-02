export interface SimpleReviewerDTO {
  id: number;
  name: string;
  surname: string;
}

export interface SimpleReviewDTO {
  id: number;
  reviewerId: number;
  visitId: number; // Changed from restaurantId
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
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SimpleVisitDTO {
  id: number;
  visitedAt: Date;
  restaurantId: number;
}
