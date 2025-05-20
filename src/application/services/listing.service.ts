import { Injectable, Inject } from '@nestjs/common';
import {
  IListingRepository,
  LISTING_REPOSITORY,
} from '../../domain/repositories/listing.repository';
import { Listing } from '../../domain/entities/listing.entity';
import {
  IImageService,
  IMAGE_SERVICE,
} from '../../domain/services/image.service';

@Injectable()
export class ListingService {
  constructor(
    @Inject(LISTING_REPOSITORY)
    private readonly listingRepo: IListingRepository,
    @Inject(IMAGE_SERVICE)
    private readonly imageService: IImageService,
  ) {}

  async getAllListings(): Promise<Listing[]> {
    const listings = await this.listingRepo.findAll();

    const listingIds = listings.map((listing) => listing.id);

    const imagesMap = await this.imageService.getImagesForListings(listingIds);

    return listings.map((listing) => {
      listing.images = imagesMap[listing.id] || [];
      return listing;
    });
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

  async getRecentListings(days: number = 5): Promise<Listing[]> {
    const since = new Date();
    since.setDate(since.getDate() - days);
    const listings = await this.listingRepo.findRecent(since);

    const listingIds = listings.map((listing) => listing.id);
    const imagesMap = await this.imageService.getImagesForListings(listingIds);

    return listings.map((listing) => {
      listing.images = imagesMap[listing.id] || [];
      return listing;
    });
  }
}
