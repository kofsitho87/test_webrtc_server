import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = 22001; // 3000

  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap().then();
