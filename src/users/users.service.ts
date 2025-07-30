import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.Dto';
import { DBService } from 'src/DB/DB.service';
import { DalService } from 'src/DAL/dal.service';
@Injectable()
export class UsersService {
  constructor(private readonly dalService: DalService) {}

  async getAllUsers() {
    return await this.dalService.FindAll()
  }

  getUserByName(username: string): object {
    return this.dalService.FindOneById(username)
  }

  addUser(user: UserDTO): object {
    this.dalService.insertUser(user);
    return { msg: 'user added' };
  }
}
