import { Property } from '../../../domain/property/property.entity';

export const toPropertyResponse = (property: Property) => ({
  id: property.id,
  beds: property.beds,
  baths: property.baths,
  price: property.price,
  sqft: property.sqft,
  type: property.type,
  status: property.status,
});
