import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSrv: AuthService) {}

  @Post('login')
  login(@Body() body: object) {
    return this.authSrv.login(body);
  }
  @Post('signup')
  signup(@Body() body: object) {
    return this.authSrv.signup(body);
  }
}
