import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
config()

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT ?? 3000, () => {
    console.log("server running on http://localhost:", PORT)
  });
}
bootstrap();
