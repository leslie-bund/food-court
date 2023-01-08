import { IsNotEmpty, IsAlphanumeric } from 'class-validator';

export default class CreateCategoryDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  name: string;
}
