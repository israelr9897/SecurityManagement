import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.Dto';
@Injectable()
export class UsersService {
  users: UserDTO[] = [];
  constructor() {
    let user1: UserDTO = new UserDTO();
    user1.id = '1';
    user1.username = 'israel';
    user1.password = '1234';
    user1.role = 'comander';

    let user2: UserDTO = new UserDTO();
    user2.id = '2';
    user2.username = 'moshe';
    user2.password = '000';
    user2.role = 'agant';

    this.users.push(user1);
    this.users.push(user2);
  }

  getAllUsers(): UserDTO[] {
    return this.users;
  }

  getUserByName(username: string): UserDTO | undefined {
    return this.users.find((u) => u.username === username);
  }

addUser(user: UserDTO): object {
    this.users.push(user);
    return { msg: 'user added' };
  }
}
