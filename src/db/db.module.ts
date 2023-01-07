import { Global, Module } from '@nestjs/common';
import { Model } from 'objection';
import knex from 'knex';
import config from './knexfile';
import { BrandModel, CategoryModel, MealModel } from '../brand/models';

const providers: any[] = [
  ...[BrandModel, CategoryModel, MealModel].map((model) => ({
    provide: model.name,
    useValue: model,
  })),
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knexConfigOption = knex(config);
      Model.knex(knexConfigOption);
      return knex;
    },
  },
];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class DbModule {}
