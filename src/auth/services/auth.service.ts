import { Injectable } from '@nestjs/common';
import { IUser } from 'src/users/entities';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<Omit<IUser, 'password'> | null> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      delete user?.password;
      delete user?.role;
      return user;
    }
    return null;
  }

  async login(user: Omit<IUser, 'password' | 'role'>) {
    return { token: this.jwtService.sign(user) };
  }
}
