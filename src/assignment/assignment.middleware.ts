import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { DalService } from 'src/DAL/dal.service';
import { Shift } from 'src/modols/shift';
import { User } from 'src/modols/user';

@Injectable()
export class IsExistsUserIdAndShiftId implements NestMiddleware {
  constructor(private readonly dalService: DalService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const { userId, shiftId } = req.body;
    const user = await this.dalService.findOneById(User, userId);
    const shift = await this.dalService.findOneById(Shift, shiftId);
    if (user && shift) {
      next();
    } else {
      res.send({ msg: 'The user id or shift id not find' });
    }
  }
}
