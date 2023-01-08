import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces';

@Injectable()
export class UsersService {
  private readonly users: IUser[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
      role: 'ADMIN',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
      role: 'USER',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
