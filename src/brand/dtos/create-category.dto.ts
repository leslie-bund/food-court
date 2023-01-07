import { PickType } from '@nestjs/mapped-types';
import CreateMealAddonDto from './create-meal.dto';

export default class CreateCategoryDto extends PickType(CreateMealAddonDto, [
  'name',
]) {}
