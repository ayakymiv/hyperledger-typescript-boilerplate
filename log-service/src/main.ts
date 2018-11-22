import { NestFactory } from '@nestjs/core';
import { LogModule } from './log.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { EnvConfig } from './config/env';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(LogModule, {
    transport: Transport.REDIS,
    options: {
      url: EnvConfig.REDIS_URL,
    },
  });

  app.listen(() => {
    Logger.log(`chain-service connected to ${EnvConfig.REDIS_URL}`);
  });
}
bootstrap();