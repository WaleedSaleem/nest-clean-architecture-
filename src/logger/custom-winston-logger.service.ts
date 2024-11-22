// src/logger/custom-winston-logger.service.ts

import { Injectable, LoggerService } from '@nestjs/common';
import {
  createLogger,
  format,
  transports,
  Logger as WinstonLogger,
} from 'winston';

@Injectable()
export class CustomWinstonLoggerService implements LoggerService {
  private readonly logger: WinstonLogger;

  constructor() {
    this.logger = createLogger({
      format: format.combine(
        format.timestamp({
          format: 'DD/MM/YYYY HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.colorize({ all: true }), // Move colorize here and apply to all fields
        format.printf(({ timestamp, level, message, context, ...meta }) => {
          // Place the context (service name) at the beginning
          const contextStr = context ? `[${context}] ` : '';
          const metaStr = Object.keys(meta).length
            ? ` - ${JSON.stringify(meta)}`
            : '';
          return `${contextStr}${timestamp} ${level}: ${message}${metaStr}`;
        }),
      ),
      transports: [new transports.Console()],
    });
  }

  createLogger(context: string): LoggerService {
    return {
      log: (message: any, ctx?: string, meta?: Record<string, any>) => {
        this.logger.info(message, { context: ctx || context, ...meta });
      },
      error: (
        message: any,
        trace?: string,
        ctx?: string,
        meta?: Record<string, any>,
      ) => {
        this.logger.error(message, { trace, context: ctx || context, ...meta });
      },
      warn: (message: any, ctx?: string, meta?: Record<string, any>) => {
        this.logger.warn(message, { context: ctx || context, ...meta });
      },
      debug: (message: any, ctx?: string, meta?: Record<string, any>) => {
        this.logger.debug(message, { context: ctx || context, ...meta });
      },
      verbose: (message: any, ctx?: string, meta?: Record<string, any>) => {
        this.logger.verbose(message, { context: ctx || context, ...meta });
      },
    };
  }

  // Implement LoggerService methods to handle NestJS system logs
  log(message: any, context?: string) {
    this.logger.info(message, { context });
  }

  error(message: any, trace?: string, context?: string) {
    this.logger.error(message, { trace, context });
  }

  warn(message: any, context?: string) {
    this.logger.warn(message, { context });
  }

  debug(message: any, context?: string) {
    this.logger.debug(message, { context });
  }

  verbose(message: any, context?: string) {
    this.logger.verbose(message, { context });
  }
}
