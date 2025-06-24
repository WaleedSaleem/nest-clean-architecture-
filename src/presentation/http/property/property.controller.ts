import { Controller, Get, Query, Param } from '@nestjs/common';
import { GetPropertiesDto } from '../property/dtos/get-properties.dto';
import { PropertyRepositoryImpl } from '../../../infrastructure/property/property.repository.impl';
import { GetPropertiesUseCase } from '../../../application/property/get-properties.usecase';
// import { GetSimilarPropertiesUseCase } from '../../../application/property/get-similar-properties.usecase';
import { toPropertyResponse } from './property.mapper';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyRepo: PropertyRepositoryImpl) {}

  @Get()
  async getByFilters(@Query() query: GetPropertiesDto) {
    const useCase = new GetPropertiesUseCase(this.propertyRepo);
    const properties = await useCase.execute(query);
    return properties.map(toPropertyResponse);
  }

  // @Get(':id/similar')
  // async getSimilar(@Param('id') id: number) {
  //   const useCase = new GetSimilarPropertiesUseCase(this.propertyRepo);
  //   const properties = await useCase.execute(+id);
  //   return properties.map(toPropertyResponse);
  // }

  @Post('fetch-listing-pagination')
  // @UseInterceptors(new TransformMultipleListingsInterceptor())
  @HttpCode(200)
  async fetchListingsWithPagination(
    @Headers('Userservicetoken') userServiceToken: string,
    @Headers('Cognitouserid') _cognitoUserId: string,
    @Body() listingPaginatedDto: ListingPaginationDto,
  ) {
    this.logger.instance.silly(
      `${ListingsController.name}`,
      `${this.fetchListingsWithPagination.name}`,
      'Fetch Listings with filter',
      {},
    );
    return await this.rebornListingService.fetchListingsWithPagination(
      listingPaginatedDto,
      { userServiceToken, _cognitoUserId },
    );
  }
}
