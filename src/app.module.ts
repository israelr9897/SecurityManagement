import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';
import { DBModule } from './DB/DB.module';
// import { UsersDbModule } from './DB/users-db/users-db.module';
// import { UtilitsService } from './utilits/utilits.service';
// import { UtilitsModule } from './utilits/utilits.module';
import { ShiftsnestModule } from './generate/shiftsnest/shiftsnest.module';
import { ShiftsService } from './shifts/shifts.service';
import { ShiftsController } from './shifts/shifts.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    DBModule,
    ShiftsnestModule,
    // UtilitsModule,
  ],
  controllers: [AuthController, ShiftsController],
  providers: [AuthService, ShiftsService],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
