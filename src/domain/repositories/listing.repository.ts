// src/domain/repositories/listing.repository.ts
import { Listing } from '../entities/listing.entity';

export const LISTING_REPOSITORY = 'ListingRepository';

export interface ListingRepository {
  findAll(): Promise<Listing[]>;
  findById(id: string): Promise<Listing | null>;
  create(listing: Listing): Promise<Listing>;
}
