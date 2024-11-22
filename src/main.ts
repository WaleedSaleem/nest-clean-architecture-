import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomWinstonLoggerService } from './logger/custom-winston-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Logger
  const loggerService = app.get(CustomWinstonLoggerService);
  const logger = loggerService.createLogger('Bootstrap');
  // Replace the built-in logger with your custom logger
  app.useLogger(logger);

  // Enable validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties not defined in the DTO
      forbidNonWhitelisted: true, // Throw an error if unknown properties are sent
      transform: true, // Automatically transform payloads to DTO instances
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
