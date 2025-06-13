import { Module } from '@nestjs/common';
import { PropertyRepositoryImpl } from './property/property.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModel } from './property/property.model';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyModel])],
  providers: [PropertyRepositoryImpl],
  exports: [PropertyRepositoryImpl],
})
export class InfrastructureModule {}
