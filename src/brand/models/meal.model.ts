import {
  BaseModel,
  // type CategoryModel,
  // type BrandModel
} from '.';
import {
  JSONSchema,
  // Model,
  // RelationMappings,
  // RelationMappingsThunk,
} from 'objection';

export default class MealModel extends BaseModel {
  static get tableName() {
    return 'meal_addons';
  }

  name: string;
  description: string;
  price: string;
  categoryId: number;
  brandId: number;

  static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['name', 'price'],

      properties: {
        id: { type: 'integer' },
        name: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
          pattern: '/[a-zA-Z]+/',
        },
        description: {
          type: ['string', 'null'],
          maxLength: 1000,
          pattern: '/[a-zA-Z]+/',
        },
        price: { type: 'string' },
        categoryId: { type: ['integer', 'null'] },
        brandId: { type: ['integer', 'null'] },
      },
    };
  }

  // static get relationMappings(): RelationMappings | RelationMappingsThunk {
  //   const Brand = `${__dirname}/brand.model`;
  //   const Category = `${__dirname}/category.model`;

  //   return {
  //     category: {
  //       modelClass: Category,
  //       relation: Model.HasOneRelation,
  //       join: {
  //         from: 'meal_addons.categoryId',
  //         to: 'categories.id',
  //       },
  //     },
  //     brand: {
  //       modelClass: Brand,
  //       relation: Model.HasOneRelation,
  //       join: {
  //         from: 'meal_addons.brandId',
  //         to: 'brands.id',
  //       },
  //     },
  //   };
  // }
}
