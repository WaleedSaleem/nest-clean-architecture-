import { Controller, Post, HttpCode, Body, Get } from '@nestjs/common';
import { ListingPaginationDto } from './dtos/get-listings.dto';
import { GetPaginatedListingsUseCase } from '../../../application/listing/get-listings.usecase';
import { ListingRepositoryImpl } from '../../../infrastructure/listing/listing.repository.impl';

@Controller('properties')
export class PropertyController {
  @Post('fetch-listing-pagination')
  // @UseInterceptors(new TransformMultipleListingsInterceptor())
  @HttpCode(200)
  async fetchListingsWithPagination(
    @Body() listingPaginatedDto: ListingPaginationDto,
  ) {
    // this.logger.instance.silly(
    //   `${ListingsController.name}`,
    //   `${this.fetchListingsWithPagination.name}`,
    //   'Fetch Listings with filter',
    //   {},
    // );
    const userCase = new GetPaginatedListingsUseCase(
      new ListingRepositoryImpl(),
    );

    const listings = await userCase.execute({ type: 'rent' });
    return listings;
  }
}
