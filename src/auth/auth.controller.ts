import { Body, Controller, Post, Res } from '@nestjs/common';
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
    try {
      const token: string = await this.authSrv.login(body);
        res.cookie('Authorization', token);
        res.send('√ login');
    } catch (error) {
      res.send({ msg: 'Incorrect username or password' });
      
    }
  }
  @Post('signup')
  async signup(@Body() body: UserDTO) {
    return this.authSrv.signup(body);
  }
}
