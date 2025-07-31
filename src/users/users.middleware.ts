import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class verifyToken implements NestMiddleware {
  constructor(private readonly jwt: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token: string = req.cookies.Authorization;
      this.jwt.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      next();
    } catch (error) {
      res.send({ msg: 'Invalid token' });
    }
  }
}
