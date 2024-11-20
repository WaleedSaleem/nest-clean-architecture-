import { Injectable } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';
import { ListingDTO } from '../../application/dtos/listing.dto';

@Injectable()
export class ListingTransformInterceptor extends TransformInterceptor<ListingDTO> {
  constructor() {
    super((data) => {
      // Transformation logic here
      if (Array.isArray(data)) {
        return data.map((item) => this.transformListing(item));
      } else {
        return this.transformListing(data);
      }
    });
  }

  private transformListing(listing: ListingDTO) {
    return {
      ...listing,
      // Add or modify properties
      displayPrice: `$${listing.price.toLocaleString()}`,
      fullLocation: `${listing.location}, Some Country`,
      // Remove properties if needed
      // id: undefined,
    };
  }
}
