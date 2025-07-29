import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';

config();

@Injectable()
export class CheckRole implements NestMiddleware {
  constructor(private readonly jwt: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token: string = req.cookies.Authorization;
      const payload = this.jwt.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      next();
    } catch (error) {
      res.send({ msg: 'Invalid token' });
    }
  }
}
