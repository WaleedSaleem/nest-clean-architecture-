import { PropertyRepository } from '../../domain/property/property.repository';
import { Property } from '../../domain/property/property.entity';

export class GetPropertiesUseCase {
  constructor(private readonly repo: PropertyRepository) {}

  async execute(filters: any): Promise<Property[]> {
    // Apply business rules like filter range validation, etc.
    if (
      filters.priceMin &&
      filters.priceMax &&
      filters.priceMin > filters.priceMax
    ) {
      throw new Error('Invalid price range');
    }
    return this.repo.findByFilters(filters);
  }
}
