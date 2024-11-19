// src/application/application.module.ts
import { Module } from '@nestjs/common';
import { ListingService } from './services/listing.service';
import { DomainModule } from '../domain/domain.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [DomainModule, InfrastructureModule],
  providers: [ListingService],
  exports: [ListingService],
})
export class ApplicationModule {}
