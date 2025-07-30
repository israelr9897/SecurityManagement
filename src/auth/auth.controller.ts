import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { DBService } from 'src/DB/DB.service';
import { UserDTO } from 'src/users/user.Dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authSrv: AuthService,
    private readonly dbSrv: DBService,
  ) {}

  @Post('login')
  async login(@Body() body: object, @Res() res: Response) {
    const token: string = await this.authSrv.login(body);
    if (token) {
      res.cookie('Authorization', token);
      res.send('√ login');
    } else {
      res.send({ msg: 'not find' });
    }
  }
  @Post('signup')
  async signup(@Body() body: UserDTO) {
    // await this.dbSrv.connect();
    return this.authSrv.signup(body);
  }
}
