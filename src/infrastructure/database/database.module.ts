// src/infrastructure/database/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingSchema } from './schemas/listing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Listing', schema: ListingSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
