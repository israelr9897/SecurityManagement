import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmentDTO } from './Assignment.Dto';
import { ShiftDTO } from 'src/shifts/shift.Dto';

@Controller('assignment')
export class AssignmentController {
  constructor(private readonly assignmentSrv: AssignmentService) {}

  @Get()
  getAllAssignment(): object {
    return this.assignmentSrv.getAllAssignment();
  }

  @Get("/:id")
  getAssignmentById(@Param("id") id: string): Promise<Array<any>> {
    return this.assignmentSrv.getAssignmentByUserId(id);
  }

  @Post()
  addAssignment(@Body()data: AssignmentDTO): object {
    return this.assignmentSrv.addAssignment(data);
  }
}
