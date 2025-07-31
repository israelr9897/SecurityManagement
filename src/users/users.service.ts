import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.Dto';
import { DalService } from 'src/DAL/dal.service';
import { User } from 'src/modols/user';
@Injectable()
export class UsersService {
  constructor(private readonly dalService: DalService) {}

  async getAllUsers() {
    return await this.dalService.findAll(User);
  }

  async getUserByUsername(username: string) {
    return await this.dalService.findOneByUsername(User, username);
  }

  crateUser(user: UserDTO): object {
    return this.dalService.insert(User, user);
  }
}
