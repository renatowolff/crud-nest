import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main.ts: onde o sv inicia
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
