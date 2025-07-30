import { IsNotEmpty, MinLength } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @MinLength(4)
  password: string;

  role: string;

  email: string;
}
