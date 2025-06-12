import { Module } from '@nestjs/common';
import { PropertyRepositoryImpl } from './property/property.repository.impl';

@Module({
  providers: [PropertyRepositoryImpl],
  exports: [PropertyRepositoryImpl],
})
export class InfrastructureModule {}
