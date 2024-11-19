// src/application/services/listing.service.ts
import { Injectable, Inject } from '@nestjs/common';
import {
  ListingRepository,
  LISTING_REPOSITORY,
} from '../../domain/repositories/listing.repository';
import { Listing } from '../../domain/entities/listing.entity';

@Injectable()
export class ListingService {
  constructor(
    @Inject(LISTING_REPOSITORY)
    private readonly listingRepo: ListingRepository,
  ) {}

  async getAllListings(): Promise<Listing[]> {
    return this.listingRepo.findAll();
  }

  async getListingById(id: string): Promise<Listing | null> {
    return this.listingRepo.findById(id);
  }

  async createListing(data: {
    title: string;
    price: number;
    location: string;
  }): Promise<Listing> {
    const listing = new Listing(null, data.title, data.price, data.location);
    return this.listingRepo.create(listing);
  }
}
