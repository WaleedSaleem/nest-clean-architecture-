import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PresentationModule } from './presentation/presentation.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    LoggerModule,
    MongooseModule.forRoot('mongodb://localhost:27017/local'),
    DatabaseModule,
    PresentationModule,
  ],
})
export class AppModule {}
