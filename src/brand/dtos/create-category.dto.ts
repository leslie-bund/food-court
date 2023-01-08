import { IsNotEmpty, IsAlpha } from 'class-validator';

export default class CreateCategoryDto {
  @IsNotEmpty()
  @IsAlpha()
  name: string;
}
