// src/presentation/presentation.module.ts
import { Module } from '@nestjs/common';
import { ListingController } from './http/listing.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [ListingController],
})
export class PresentationModule {}
