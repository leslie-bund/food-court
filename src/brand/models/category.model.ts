import { BaseModel } from '.';
import { type JSONSchema } from 'objection';

export default class CategoryModel extends BaseModel {
  static get tableName(): string {
    return 'categories';
  }

  name: string;
  brandId: number;

  static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['name', 'brandId'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        brandId: { type: 'integer' },
      },
    };
  }

  // static get relationMappings(): RelationMappings | RelationMappingsThunk {
  //   const Brand = `${__dirname}./brand.model`;

  //   return {
  //     brand: {
  //       modelClass: Brand,
  //       relation: Model.HasOneRelation,
  //       join: {
  //         from: 'categories.brandId',
  //         to: 'brands.id',
  //       },
  //     },
  //   };
  // }
}
