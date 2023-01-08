import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Logger.log(`;-) Server ready at http://localhost:${port} `, `ServerStarted`);
  await app.listen(port);
}
bootstrap();
