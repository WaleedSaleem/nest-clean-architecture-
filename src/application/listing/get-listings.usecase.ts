import { ListingRepository } from '../../domain/listing/listing.repository';
import { LastListing } from '../../domain/listing/listing.entity';
import { ListingFilters } from '../../domain/listing/listing-filters.interface';

export class GetPaginatedListingsUseCase {
  constructor(private readonly repo: ListingRepository) {}

  async execute(filters: ListingFilters): Promise<LastListing[]> {
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
