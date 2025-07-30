import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { verifyToken } from './users.middleware';
import { DBModule } from 'src/DB/DB.module';
import { DalModule } from 'src/DAL/dal.module';

@Module({
  imports: [DBModule, DalModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyToken).forRoutes('users');
  }
}
