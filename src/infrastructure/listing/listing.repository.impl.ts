import { Injectable } from '@nestjs/common';
import { ListingRepository as IListingRepository } from '../../domain/listing/listing.repository';
import { ListingFilters } from '../../domain/listing/listing-filters.interface';

@Injectable()
export class ListingRepositoryImpl implements IListingRepository {
  async findByFilters(filters: ListingFilters): Promise<LastListing[]> {}
}
