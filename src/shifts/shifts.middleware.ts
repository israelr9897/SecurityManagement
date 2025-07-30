// import { Injectable, NestMiddleware } from '@nestjs/common';

// @Injectable()
// export class ShiftsMiddleware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     next();
//   }
// }

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ShiftsMiddleware implements NestMiddleware {
  constructor(private readonly jwt: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token: string = req.cookies.Authorization;
      const payload = this.jwt.verify(token, {
      secret: process.env.JWT_SECRET,
    });
    if(payload.role !== "commander") res.send({msg: "Invalid role"});
    next();
    } catch (error) {
      res.send({ msg: 'Invalid token' });
    }
  }
}
