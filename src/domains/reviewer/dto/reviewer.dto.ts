import { SimpleReviewerDTO, SimpleReviewDTO } from '../../shared/dto/common.dto.js';

export { SimpleReviewerDTO };

export interface ReviewerWithReviewsDTO extends SimpleReviewerDTO {
  reviews: SimpleReviewDTO[];
}

export interface CreateReviewerDTO {
  name: string;
  surname: string;
}

export interface UpdateReviewerDTO {
  name?: string;
  surname?: string;
}
