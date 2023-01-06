// import { Logger } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import 'dotenv/config';
import { Knex } from 'knex';

// Update with your config settings.

const config: { [k: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection:
      'postgres://mlfwnrgy:fNVOj1BtJfTdqFOztNXIYabjb-B1xZXJ@rogue.db.elephantsql.com/mlfwnrgy',
    pool: {
      min: 2,
      max: 100,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds/',
    },
  },

  production: {
    client: 'pg',
    connection:
      'postgres://mlfwnrgy:fNVOj1BtJfTdqFOztNXIYabjb-B1xZXJ@rogue.db.elephantsql.com/mlfwnrgy',
    pool: {
      min: 2,
      max: 100,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds/',
    },
  },
};

Logger.log('About to connect to db');

export default config[process.env.NODE_ENV ?? 'development'];
