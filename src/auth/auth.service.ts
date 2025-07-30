import { Injectable } from '@nestjs/common';
import { UserDTO } from '../users/user.Dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/modols/user';
import e from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersSrv: UsersService,
    private readonly jwt: JwtService,
  ) {}

  async login(body: any): Promise<any> {
    const { username, password } = body;
    const user: any = await this.usersSrv.getUserByName(username);
    console.log(typeof user);

    if (!user) return;
    const isTrue: boolean = await this.verifyPassword(
      password,
      user?.hash_password,
    );
    if (!isTrue) return;
    const token = this.createToken(user);
    return token;
  }

  async signup(data: UserDTO): Promise<object> {
    data.password = await this.createHashPassword(data.password);
    data.role = 'agant';
    return this.usersSrv.addUser(data);
  }

  createToken(user: UserDTO): string {
    const token: string = this.jwt.sign({
      username: user.username,
      role: user.role,
    });
    return token;
  }

  async createHashPassword(pass: string): Promise<string> {
    const hashPass: string = await bcrypt.hash(pass, 10);
    return hashPass;
  }

  async verifyPassword(pass: string, hashPass: any): Promise<boolean> {
    const isMatch = await bcrypt.compare(pass, hashPass);
    return isMatch;
  }
}
