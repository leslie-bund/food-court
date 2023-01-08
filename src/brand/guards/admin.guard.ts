import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest() as Request;

    try {
      const { role } = JSON.parse(JSON.stringify(req.user));

      if (role === 'ADMIN') {
        return true;
      }
    } catch (error) {
      throw new HttpException(
        `${JSON.stringify(req.user)}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return false;
  }
}
