import { Injectable } from '@nestjs/common';
import { ShiftDTO } from './shift.Dto';
import { DalService } from 'src/DAL/dal.service';
import { Shift } from 'src/modols/shift';

@Injectable()
export class ShiftsService {
  constructor(private readonly dalService: DalService) {}

  async getAllShifts() {
    return await this.dalService.findAll(Shift);
  }

  async getShiftById(id: string) {
    return await this.dalService.findOneById(Shift, id);
  }

  addShift(shift: ShiftDTO): object {
    return this.dalService.insert(Shift, shift);
  }
}
