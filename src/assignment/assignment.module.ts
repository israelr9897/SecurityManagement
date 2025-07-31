import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DBModule } from 'src/DB/DB.module';
import { DalModule } from 'src/DAL/dal.module';
import { AssignmentService } from './assignment.service';
import { AssignmentController } from './assignment.controller';
import { IsExistsUserIdAndShiftId } from './assignment.middleware';

@Module({
    imports: [DBModule, DalModule],
    controllers: [AssignmentController],
    providers: [AssignmentService],
    exports: [AssignmentService],
})
export class AssignmentModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IsExistsUserIdAndShiftId).forRoutes('assignment');
  }
}
