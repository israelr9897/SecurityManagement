import { IsNotEmpty } from 'class-validator';

export class ShiftDTO {
  @IsNotEmpty()
  startTime: Date;

  @IsNotEmpty()
  endTime: Date;

  location: string;
}
