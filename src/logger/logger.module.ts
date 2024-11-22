import { Global, Module } from '@nestjs/common';
import { CustomWinstonLoggerService } from './custom-winston-logger.service';

@Global()
@Module({
  providers: [CustomWinstonLoggerService],
  exports: [CustomWinstonLoggerService],
})
export class LoggerModule {}
