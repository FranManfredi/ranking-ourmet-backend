import { SimpleRevewDTO } from '../../revew/dto/revew.dto.js';

export interface SimpleReviewerDTO {
  id: number;
  name: string;
  surname: string;
}

export interface ReviewerWithReviewsDTO extends SimpleReviewerDTO {
  reviews: SimpleRevewDTO[];
}

export interface CreateReviewerDTO {
  name: string;
  surname: string;
}

export interface UpdateReviewerDTO {
  name?: string;
  surname?: string;
}
