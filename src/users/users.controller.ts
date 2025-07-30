import { Controller, Get } from '@nestjs/common';
import { UserDTO } from './user.Dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSrv: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersSrv.getAllUsers();
  }
}
