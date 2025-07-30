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

  async getUserById(id: string) {
    return await this.dalService.findOneById(User, id);
  }

  addUser(user: UserDTO): object {
    this.dalService.insert(User, user);
    return { msg: 'user added' };
  }
}
