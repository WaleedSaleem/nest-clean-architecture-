import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RepositoryModule } from './repositories/repository.module';

@Module({
  imports: [DatabaseModule, RepositoryModule],
  exports: [RepositoryModule],
})
export class InfrastructureModule {}
