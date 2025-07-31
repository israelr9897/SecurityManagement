import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmentDTO } from './Assignment.Dto';
import { Roles } from 'src/roles.decorator';
import { RoleGuard } from 'src/role.guard';

@Controller('assignment')
export class AssignmentController {
  constructor(private readonly assignmentSrv: AssignmentService) {}
  
  @Get()
  getAllAssignment(): object {
    return this.assignmentSrv.getAllAssignment();
  }
  
  @UseGuards(RoleGuard)
  @Roles("riza")
  @Get("/:id")
  getAssignmentById(@Param("id") id: string): Promise<Array<any>> {
    return this.assignmentSrv.getAssignmentByUserId(id);
  }

  @Post()
  addAssignment(@Body()data: AssignmentDTO): object {
    return this.assignmentSrv.addAssignment(data);
  }
}
