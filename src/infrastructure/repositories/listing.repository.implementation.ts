// src/infrastructure/repositories/listing.repository.impl.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IListingRepository } from '../../domain/repositories/listing.repository';
import { Listing } from '../../domain/entities/listing.entity';
import { ListingDocument } from '../database/schemas/listing.schema';

@Injectable()
export class ListingRepositoryImplementation implements IListingRepository {
  constructor(
    @InjectModel('Listing')
    private readonly listingModel: Model<ListingDocument>,
  ) {}

  async findAll(): Promise<Listing[]> {
    const listings = await this.listingModel.find().exec();
    return listings.map(
      (listing) =>
        new Listing(listing.id, listing.title, listing.price, listing.location),
    );
  }

  async findById(id: string): Promise<Listing | null> {
    const listing = await this.listingModel.findById(id).exec();
    return listing
      ? new Listing(listing.id, listing.title, listing.price, listing.location)
      : null;
  }

  async create(listing: Listing): Promise<Listing> {
    const createdListing = new this.listingModel({
      title: listing.title,
      price: listing.price,
      location: listing.location,
    });
    const savedListing = await createdListing.save();
    return new Listing(
      savedListing.id,
      savedListing.title,
      savedListing.price,
      savedListing.location,
    );
  }
}
