import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PresentationModule } from './presentation/presentation.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { LoggerModule } from './logger/logger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfigs from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfigs],
    }),
    LoggerModule,
    TypeOrmModule.forRootAsync({
      // name: 'replica',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        // name: 'replica',
        host: configService.get<string>('database.mysqlReplicaHost'),
        username: configService.get<string>('database.mysqlUserName'),
        port: configService.get<number>('database.mysqlPort'),
        password: configService.get<string>('database.mysqlPassword'),
        database: configService.get<string>('database.mysqlDatabase'),
        autoLoadEntities: true,
        entities: [__dirname + 'src/infrastructure/entities/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    InfrastructureModule,
    PresentationModule,
    DomainModule,
    ApplicationModule,
  ],
})
export class AppModule {}
