import { Injectable } from '@nestjs/common';
import { DalService } from 'src/DAL/dal.service';
import { Assignment } from 'src/modols/Assignment';
import { AssignmentDTO } from './Assignment.Dto';

@Injectable()
export class AssignmentService {
  constructor(private readonly dalService: DalService) {}

  async getAllAssignment(): Promise<object> {
    return await this.dalService.findAll(Assignment);
  }

  async getAssignmentByUserId(id: string): Promise<Array<any>> {
    return await this.dalService.findShiftByUserId(id);
  }

  async addAssignment(data: AssignmentDTO): Promise<object> {
    return await this.dalService.insert(Assignment, data);
  }
}
