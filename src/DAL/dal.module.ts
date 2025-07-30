import { Module } from '@nestjs/common';
import { DBModule } from 'src/DB/DB.module';
import { DBService } from 'src/DB/DB.service';
import { DalService } from './dal.service';

@Module({
  providers: [DalService],
  exports: [DalService],
})
export class DalModule {}
