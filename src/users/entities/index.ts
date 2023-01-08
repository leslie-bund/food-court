export class IUser {
  id: number;
  username: string;
  password?: string;
  role?: 'ADMIN' | 'USER';
}
