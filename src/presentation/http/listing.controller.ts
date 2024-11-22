import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  LoggerService,
} from '@nestjs/common';
import { ListingService } from '../../application/services/listing.service';
import { ListingDTO } from '../../application/dtos/listing.dto';
import { ListingTransformInterceptor } from '../interceptors/listing-transform.interceptor';
import { CustomWinstonLoggerService } from '../../logger/custom-winston-logger.service';

@Controller('listings')
@UseInterceptors(ListingTransformInterceptor)
export class ListingController {
  private readonly logger: LoggerService;

  constructor(
    private readonly listingService: ListingService,
    loggerService: CustomWinstonLoggerService,
  ) {
    this.logger = loggerService.createLogger(ListingController.name);
  }

  @Get()
  async getAllListings(): Promise<ListingDTO[]> {
    this.logger.log('Fetching all listings');

    const listings = await this.listingService.getAllListings();
    return listings.map((listing) => ({
      id: listing.id,
      title: listing.title,
      price: listing.price,
      location: listing.location,
      images: listing.images,
    }));
  }

  @Get(':id')
  async getListingById(@Param('id') id: string): Promise<ListingDTO | null> {
    this.logger.log(`Fetching listing with ID: ${id}`);

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
    this.logger.log(`Creating listing`, undefined, data);
    const listing = await this.listingService.createListing(data);
    return {
      id: listing.id,
      title: listing.title,
      price: listing.price,
      location: listing.location,
    };
  }
}
