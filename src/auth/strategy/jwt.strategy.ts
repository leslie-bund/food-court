import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser } from 'src/users/interfaces';
import { Constants } from 'src/constants/constants';
import { UsersService } from 'src/users/services/users.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UsersService,
    public configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Constants.jwtSecret,
    });
  }

  async validate(payload: Omit<IUser, 'password' | 'role'>) {
    const user = this.userService.findOne(payload?.username);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
