import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { ListingService } from '../../application/services/listing.service';
import { ListingDTO } from '../../application/dtos/listing.dto';
import { ListingTransformInterceptor } from '../interceptors/listing-transform.interceptor';

@Controller('listings')
@UseInterceptors(ListingTransformInterceptor)
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Get()
  async getAllListings(): Promise<ListingDTO[]> {
    const listings = await this.listingService.getAllListings();
    return listings.map((listing) => ({
      id: listing.id,
      title: listing.title,
      price: listing.price,
      location: listing.location,
    }));
  }

  @Get(':id')
  async getListingById(@Param('id') id: string): Promise<ListingDTO | null> {
    const listing = await this.listingService.getListingById(id);
    if (!listing) {
      return null;
    }
    return {
      id: listing.id,
      title: listing.title,
      price: listing.price,
      location: listing.location,
    };
  }

  @Post()
  async createListing(@Body() data: ListingDTO): Promise<ListingDTO> {
    const listing = await this.listingService.createListing(data);
    return {
      id: listing.id,
      title: listing.title,
      price: listing.price,
      location: listing.location,
    };
  }
}
