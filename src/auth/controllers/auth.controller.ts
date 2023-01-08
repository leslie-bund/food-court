import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
import { Request as Req } from 'express';
import { IUser } from 'src/users/entities';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: Req) {
    return this.authService.login(<Omit<IUser, 'password'>>req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req: Req) {
    return req.user;
  }
}
