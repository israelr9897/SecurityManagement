import { Module } from '@nestjs/common';
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
  ],
  controllers: [AuthController, ShiftsController],
  providers: [AuthService, ShiftsService],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
