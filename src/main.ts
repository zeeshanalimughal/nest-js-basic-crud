import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
  .setTitle("Nest Api")
  .setDescription("Nest Swagger API Documentation")
  .setVersion('1.0')
  .build();

  const document  = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('/doc',app, document);
  await app.listen(3000);
}
bootstrap();
