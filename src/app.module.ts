import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PresentationModule } from './presentation/presentation.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    LoggerModule,
    MongooseModule.forRoot('mongodb://localhost:27017/local'),
    InfrastructureModule,
    PresentationModule,
    DomainModule,
    ApplicationModule,
  ],
})
export class AppModule {}
