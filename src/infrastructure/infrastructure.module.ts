import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RepositoryModule } from './repositories/repository.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [DatabaseModule, RepositoryModule, ServicesModule],
  exports: [RepositoryModule, ServicesModule],
})
export class InfrastructureModule {}
