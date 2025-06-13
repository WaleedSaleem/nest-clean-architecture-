import { Module } from '@nestjs/common';
import { PropertyRepositoryImpl } from './property/property.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Properties as PropertyModel } from './entities/entities/Properties';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyModel])],
  providers: [PropertyRepositoryImpl],
  exports: [PropertyRepositoryImpl],
})
export class InfrastructureModule {}
