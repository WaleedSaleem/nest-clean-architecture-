import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsIn,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { SortBy } from '../../property/utilities/enums';

export class ListingPaginationDto {
  // purpose of the listings ( sale , rent or all )

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsIn(['buy', 'rent', 'street'])
  type: string;

  @ApiProperty()
  @IsOptional()
  purpose?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  pageSize?: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  currentPage?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  locationName?: string;

  // location type of the listing  ( city , neighborhood or all )
  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsIn(['all', 'city', 'neighborhood', 'street'])
  locationType?: string;

  @ApiProperty()
  @IsOptional()
  minBeds?: string;

  @ApiProperty()
  @IsOptional()
  maxBeds?: string;

  @ApiProperty()
  @IsOptional()
  minBaths?: string;

  @ApiProperty()
  @IsOptional()
  maxBaths?: string;

  @ApiProperty()
  @IsOptional()
  minPrice?: string;

  @ApiProperty()
  @IsOptional()
  maxPrice?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  streetId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  minSqft?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  maxSqft?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  maxListDate?: string;

  @ApiProperty()
  @IsOptional()
  minListDate?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  buildingAge?: string;

  @ApiProperty({
    required: false,
    description:
      'status  = Active returns Active listings , closed return closed listings',
  })
  @IsNotEmpty()
  @IsOptional()
  lastStatus?: [];

  @ApiProperty({
    required: false,
    description:
      'status  = Active returns Active listings , closed return closed listings',
  })
  @IsNotEmpty()
  @IsOptional()
  propertyType?: [];

  @ApiProperty({ required: false, enum: SortBy })
  @IsOptional()
  @IsEnum(SortBy)
  sortBy?: string; // sort the result

  @ApiProperty({
    required: false,
    description: 'Filter listings on the bases of polygon',
  })
  @IsOptional()
  polygon?: string;

  @ApiProperty({
    required: false,
    description: 'Filter listings on the bases of polygon',
  })
  @IsOptional()
  viewPort?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  paginationApiPageSize?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  locationId?: string;

  @ApiProperty({
    required: false,
    description:
      'Latitude value. Must be used with radius and longitude parameter to return listings within a certain radius of a given latitude and longitude',
  })
  @IsOptional()
  lat?: string;

  @ApiProperty({
    required: false,
    description:
      'Longitude value. Must be used with radius and latitude parameter to return listings within a certain radius of a given latitude and longitude',
  })
  @IsOptional()
  long?: string;

  @ApiProperty({
    required: false,
    description: 'Requires parameters long (longitude) and lat (latitude)',
  })
  @IsOptional()
  radius?: string;

  @ApiProperty({
    required: false,
    description: 'Requires the zip code of the searched area',
  })
  @IsString()
  @IsOptional()
  zip?: string;
}
