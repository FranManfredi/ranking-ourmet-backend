import { SimpleRestaurantDTO } from '../../auth/dto/common.dto.js';
import { SimpleVisitDTO } from '../../auth/dto/common.dto.js';

export { SimpleRestaurantDTO };

export interface RestaurantWithVisitsDTO extends SimpleRestaurantDTO {
  visits: SimpleVisitDTO[];
}

export interface CreateRestaurantDTO {
  name: string;
  address: string;
}

export interface UpdateRestaurantDTO {
  name?: string;
  address?: string;
}
