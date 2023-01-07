import { PartialType } from '@nestjs/mapped-types';
import CreateMealAddonDto from './create-meal.dto';

export default class UpdateMealAddonDto extends PartialType(
  CreateMealAddonDto,
) {}
