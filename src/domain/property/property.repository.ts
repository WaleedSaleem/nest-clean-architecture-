import { Property } from './property.entity';

export interface PropertyRepository {
  findByFilters(filters: any): Promise<Property[]>;
  // findSimilar(propertyId: number): Promise<Property[]>;
}
