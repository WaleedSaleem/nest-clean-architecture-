// src/presentation/presentation.module.ts
import { Module } from '@nestjs/common';
import { PropertyController } from './http/property/property.controller';
import { ApplicationModule } from '../application/application.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [PropertyController],
})
export class PresentationModule {}
