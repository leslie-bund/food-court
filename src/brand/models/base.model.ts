import { Model } from 'objection';

export default class BaseModel extends Model {
  readonly id: number;
}
