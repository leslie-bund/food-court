import { BaseModel } from '.';
import { JSONSchema } from 'objection';

export default class BrandModel extends BaseModel {
  static get tableName(): string {
    return 'brands';
  }

  name: string;

  static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
          pattern: '/[a-zA-Z]+/',
        },
      },
    };
  }
}
