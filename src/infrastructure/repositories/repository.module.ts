// src/infrastructure/repositories/repositories.module.ts
import { Module } from '@nestjs/common';
import { ListingRepositoryImplementation } from './listing.repository.implementation';
import { DatabaseModule } from '../database/database.module';
import { LISTING_REPOSITORY } from '../../domain/repositories/listing.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: LISTING_REPOSITORY,
      useClass: ListingRepositoryImplementation,
    },
  ],
  exports: [
    {
      provide: LISTING_REPOSITORY,
      useClass: ListingRepositoryImplementation,
    },
  ],
})
export class RepositoryModule {}
