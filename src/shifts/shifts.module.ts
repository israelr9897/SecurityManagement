import { Module } from '@nestjs/common';
import { DBModule } from 'src/DB/DB.module';
import { DalModule } from 'src/DAL/dal.module';
import { ShiftsService } from './shifts.service';
import { ShiftsController } from './shifts.controller';

@Module({
  imports: [DBModule, DalModule],
  controllers: [ShiftsController],
  providers: [ShiftsService],
  exports: [ShiftsService],
})
export class ShiftsModule {}
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply().forRoutes('shifts');
//   }
