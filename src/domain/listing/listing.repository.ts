import { ListingFilters } from './listing-filters.interface';
import { LastListing } from './listing.entity';

export interface ListingRepository {
  findByFilters(filters: ListingFilters): Promise<LastListing[]>;
}
