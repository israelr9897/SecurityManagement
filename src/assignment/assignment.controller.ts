import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmentDTO } from './Assignment.Dto';

@Controller('assignment')
export class AssignmentController {
  constructor(private readonly assignmentSrv: AssignmentService) {}

  @Get()
  getAllAssignment(): object {
    return this.assignmentSrv.getAllAssignment();
  }

  @Post()
  addAssignment(@Body()data: AssignmentDTO): object {
    return this.assignmentSrv.addAssignment(data);
  }
}
