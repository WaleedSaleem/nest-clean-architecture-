import { Module } from '@nestjs/common';

@Module({
  providers: [], // No providers needed for plain entities/interfaces
  exports: [], // No services to export, entities/interfaces are imported directly
})
export class DomainModule {}
