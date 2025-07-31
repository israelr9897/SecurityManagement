import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';
import { DBModule } from './DB/DB.module';
import { ShiftsService } from './shifts/shifts.service';
import { ShiftsController } from './shifts/shifts.controller';
import { ShiftsModule } from './shifts/shifts.module';
import { DalModule } from './DAL/dal.module';
import { AssignmentController } from './assignment/assignment.controller';
import { AssignmentService } from './assignment/assignment.service';
import { AssignmentModule } from './assignment/assignment.module';
import { verifyToken } from './users.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    DBModule,
    DalModule,
    ShiftsModule,
    AssignmentModule,
  ],
  controllers: [AuthController, ShiftsController, AssignmentController],
  providers: [AuthService, ShiftsService, AssignmentService],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyToken).forRoutes('users', 'shifts', 'assignment');
  }
}
