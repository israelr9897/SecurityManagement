import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/DTO/userDto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersSrv: UsersService,
    private readonly jwt: JwtService,
  ) {}

  async login(body: any): Promise<any> {
    const { username, password } = body;
    const user: UserDTO | undefined = this.usersSrv.getUserByName(username);
    if (user?.password !== password) return { msg: 'not find' };
    const token: string = await this.createToken(user);
    return token;
  }

  signup(data: any): object {
    let user: UserDTO = new UserDTO();
    user.username = data.username;
    user.password = data.password;
    user.role = 'agant';
    return this.usersSrv.addUser(user);
  }

  async createToken(user: any): Promise<string> {
    const token: string = await this.jwt.signAsync({
      username: user.username,
      role: user.role,
    });
    return token;
  }
}
