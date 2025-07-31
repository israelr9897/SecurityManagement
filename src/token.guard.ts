// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Observable } from 'rxjs';
// import { Request} from 'express';
// import { JwtService } from '@nestjs/jwt';
// import { config } from 'dotenv';
// config()

// @Injectable()
// export class TokenGuard implements CanActivate {
//   constructor(
//     private readonly jwt: JwtService,
//     private readonly req: Request,
//   ) {}
//   canActivate(
//     // context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     try {
//       const token: string = this.req.cookies.Authorization;
//       this.jwt.verify(token, {
//         secret: process.env.JWT_SECRET,
//       });
//     } catch (error) {
//       throw error;
//     }
//     return true;
//   }
// }
