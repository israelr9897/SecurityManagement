import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSrv: AuthService) {}

  @Post('login')
  async login(@Body() body: object, @Res() res: Response) {
    const token: string = await this.authSrv.login(body);
    if (token) {
      // res.setHeader("Authorization", token)
      res.cookie('Authorization', token);
      res.send('√ login');
    } else {
      res.send( { msg: 'not find' });
    }
  }
  @Post('signup')
  signup(@Body() body: object) {
    return this.authSrv.signup(body);
  }
}
