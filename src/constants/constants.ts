import 'dotenv/config';

export class Constants {
  static get jwtSecret() {
    return process.env['JWT_SECRET'];
  }
}
