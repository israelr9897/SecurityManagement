import { IsNotEmpty } from 'class-validator';

export class AssignmentDTO {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  shiftId: number;
}


