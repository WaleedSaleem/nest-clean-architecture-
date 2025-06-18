import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropertyRepository as IPropertyRepo } from '../../domain/property/property.repository';
import { Property } from '../../domain/property/property.entity';
import { Properties as PropertyModel } from '../entities/Properties';
import { toDomainProperty } from './mappers/property.mapper';

@Injectable()
export class PropertyRepositoryImpl implements IPropertyRepo {
  constructor(
    @InjectRepository(PropertyModel)
    private readonly repo: Repository<PropertyModel>,
  ) {}

  async findByFilters(filters: any): Promise<Property[]> {
    const query = this.repo.createQueryBuilder('property');

    if (filters.beds)
      query.andWhere('property.beds = :beds', { beds: filters.beds });
    if (filters.baths)
      query.andWhere('property.baths = :baths', { baths: filters.baths });
    if (filters.priceMin)
      query.andWhere('property.price >= :priceMin', {
        priceMin: filters.priceMin,
      });
    if (filters.priceMax)
      query.andWhere('property.price <= :priceMax', {
        priceMax: filters.priceMax,
      });
    if (filters.sqftMin)
      query.andWhere('property.sqft >= :sqftMin', { sqftMin: filters.sqftMin });
    if (filters.sqftMax)
      query.andWhere('property.sqft <= :sqftMax', { sqftMax: filters.sqftMax });
    if (filters.type)
      query.andWhere('property.type = :type', { type: filters.type });
    if (filters.status)
      query.andWhere('property.status = :status', { status: filters.status });

    const results = await query.getMany();
    return results.map(toDomainProperty);
  }
}
